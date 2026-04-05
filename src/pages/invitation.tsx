import MainLayout from "@/components/layouts/MainLayout";
import { buildWeddingInvitationMessage } from "@/lib/invitationMessage";
import { parseNamesFromCsv } from "@/lib/parseInvitationCsv";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function safeDecodeQueryParam(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export default function InvitationPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [initializedFromRouter, setInitializedFromRouter] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const batchCopyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const batchFileInputRef = useRef<HTMLInputElement>(null);
  const hydratedNameFromUrl = useRef(false);

  const [batchNames, setBatchNames] = useState<string[]>([]);
  const [batchError, setBatchError] = useState<string | null>(null);
  const [copiedBatchIndex, setCopiedBatchIndex] = useState<number | null>(null);

  const trimmedName = name.trim();
  const message = useMemo(() => {
    if (!trimmedName) return "";
    return buildWeddingInvitationMessage(trimmedName);
  }, [trimmedName]);

  const canAct = trimmedName.length > 0;

  useEffect(() => {
    if (!router.isReady || hydratedNameFromUrl.current) return;
    hydratedNameFromUrl.current = true;
    const q = router.query.name;
    const raw = typeof q === "string" ? q : Array.isArray(q) ? q[0] : undefined;
    startTransition(() => {
      if (raw) {
        setName(safeDecodeQueryParam(raw));
      }
      setInitializedFromRouter(true);
    });
    // Read `?name=` only on first ready; shallow URL updates must not re-hydrate the field.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- router.query intentionally omitted
  }, [router.isReady]);

  useEffect(() => {
    if (!initializedFromRouter || !router.isReady) return;
    const current = router.query.name;
    const currentStr =
      typeof current === "string"
        ? current
        : Array.isArray(current)
          ? current[0]
          : undefined;
    const next = trimmedName || undefined;
    if (currentStr === next) return;

    void router.replace(
      { pathname: "/invitation", query: next ? { name: next } : {} },
      undefined,
      { shallow: true },
    );
  }, [initializedFromRouter, router, trimmedName]);

  const handleCopy = useCallback(async () => {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      if (copyResetRef.current) clearTimeout(copyResetRef.current);
      copyResetRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [message]);

  useEffect(() => {
    return () => {
      if (copyResetRef.current) clearTimeout(copyResetRef.current);
      if (batchCopyResetRef.current) clearTimeout(batchCopyResetRef.current);
    };
  }, []);

  const handleBatchFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      setBatchError(null);
      const reader = new FileReader();
      reader.onload = () => {
        const text = typeof reader.result === "string" ? reader.result : "";
        const names = parseNamesFromCsv(text);
        if (names.length === 0) {
          setBatchNames([]);
          setBatchError(
            "Tidak ada nama yang bisa dibaca. Pastikan CSV memuat satu nama per baris (kolom pertama).",
          );
          return;
        }
        setBatchNames(names);
      };
      reader.onerror = () => {
        setBatchNames([]);
        setBatchError("Gagal membaca file. Coba unggah ulang.");
      };
      reader.readAsText(file);
    },
    [],
  );

  const clearBatchList = useCallback(() => {
    setBatchNames([]);
    setBatchError(null);
    setCopiedBatchIndex(null);
    if (batchFileInputRef.current) batchFileInputRef.current.value = "";
  }, []);

  const copyBatchRow = useCallback(async (index: number, guestName: string) => {
    const msg = buildWeddingInvitationMessage(guestName);
    try {
      await navigator.clipboard.writeText(msg);
      setCopiedBatchIndex(index);
      if (batchCopyResetRef.current) clearTimeout(batchCopyResetRef.current);
      batchCopyResetRef.current = setTimeout(() => {
        setCopiedBatchIndex(null);
      }, 2000);
    } catch {
      setCopiedBatchIndex(null);
    }
  }, []);

  const whatsappHref =
    message.length > 0
      ? `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
      : undefined;

  return (
    <MainLayout>
      <Head>
        <title>Undangan WhatsApp | DITLAB</title>
      </Head>

      <h1 className="mx-auto mb-6 text-xl font-bold sm:text-2xl md:text-4xl">
        Undangan WhatsApp
      </h1>

      <p className="mx-auto mb-6 max-w-2xl text-sm text-slate-600 sm:text-base">
        Satu nama: isi manual lalu salin atau buka WhatsApp. Batch: unggah CSV
        berisi daftar nama (satu baris satu tamu, kolom pertama = nama) untuk
        aksi per baris tanpa pratinjau.
      </p>

      <h2 className="mx-auto mb-3 max-w-2xl text-lg font-semibold text-slate-800">
        Satu nama
      </h2>
      <div className="mx-auto mb-6 flex max-w-2xl flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <label className="sr-only" htmlFor="guest-name">
          Nama tamu
        </label>
        <input
          id="guest-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contoh: Mas Maul"
          autoComplete="name"
          className="min-w-0 flex-1 rounded-lg border-2 border-slate-700 px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <button
          type="button"
          onClick={() => setName("")}
          disabled={!canAct}
          className="rounded-lg border-2 border-slate-700 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Hapus
        </button>
      </div>

      <div className="mx-auto mb-6 max-w-2xl">
        <h2 className="mb-2 text-sm font-semibold text-slate-700">Pratinjau</h2>
        <pre
          className="max-h-[min(50vh,24rem)] overflow-auto whitespace-pre-wrap rounded-lg border-2 border-slate-700 bg-slate-50 p-4 text-sm text-slate-800"
          aria-live="polite"
        >
          {message || "Isi nama tamu di atas untuk melihat pesan."}
        </pre>
      </div>

      <div className="mx-auto flex max-w-2xl flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          disabled={!canAct}
          className="rounded-lg bg-slate-700 px-5 py-2.5 text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? "Disalin" : "Salin teks"}
        </button>
        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-white transition-colors hover:bg-green-700"
          >
            Buka WhatsApp
          </a>
        ) : (
          <span
            className="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-green-600/40 px-5 py-2.5 text-white"
            aria-disabled
          >
            Buka WhatsApp
          </span>
        )}
      </div>

      <hr className="mx-auto mb-8 max-w-2xl border-slate-200" />

      <h2 className="mx-auto mb-2 max-w-2xl text-lg font-semibold text-slate-800">
        Batch (CSV)
      </h2>
      <p className="mx-auto mb-4 max-w-2xl text-sm text-slate-600">
        File teks CSV: satu nama per baris. Jika ada beberapa kolom, hanya kolom
        pertama yang dipakai. Baris berjudul &quot;nama&quot; / &quot;name&quot;
        diabaikan.
      </p>

      <div className="mx-auto mb-4 flex max-w-2xl flex-wrap items-center gap-3">
        <input
          ref={batchFileInputRef}
          type="file"
          accept=".csv,text/csv,text/plain"
          className="sr-only"
          id="batch-csv"
          onChange={handleBatchFile}
        />
        <label
          htmlFor="batch-csv"
          className="inline-flex cursor-pointer items-center justify-center rounded-lg border-2 border-slate-700 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-50"
        >
          Pilih file CSV
        </label>
        <button
          type="button"
          onClick={clearBatchList}
          disabled={batchNames.length === 0 && !batchError}
          className="rounded-lg border-2 border-slate-700 px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Kosongkan daftar
        </button>
        {batchNames.length > 0 && (
          <span className="text-sm text-slate-600">
            {batchNames.length} nama
          </span>
        )}
      </div>

      {batchError && (
        <p
          className="mx-auto mb-4 max-w-2xl rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900"
          role="alert"
        >
          {batchError}
        </p>
      )}

      {batchNames.length > 0 && (
        <ul className="mx-auto max-w-2xl divide-y divide-slate-200 rounded-lg border-2 border-slate-700">
          {batchNames.map((guestName, index) => {
            const wa = `https://api.whatsapp.com/send?text=${encodeURIComponent(
              buildWeddingInvitationMessage(guestName),
            )}`;
            return (
              <li
                key={`${guestName}-${index}`}
                className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="min-w-0 flex-1 font-medium text-slate-800">
                  {guestName}
                </span>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => void copyBatchRow(index, guestName)}
                    className="rounded-lg bg-slate-700 px-3 py-1.5 text-sm text-white transition-colors hover:bg-slate-800"
                  >
                    {copiedBatchIndex === index ? "Disalin" : "Salin teks"}
                  </button>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-green-600 px-3 py-1.5 text-sm text-white transition-colors hover:bg-green-700"
                  >
                    Buka WhatsApp
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </MainLayout>
  );
}
