const WEDDING_URL = "https://wedding.aditiafa.dev/";

export function buildWeddingInvitationMessage(name: string): string {
  const trimmed = name.trim();
  const personalUrl = `${WEDDING_URL}?name=${encodeURIComponent(trimmed)}`;

  return [
    `Kepada Yth. ${trimmed},`,
    "",
    `Dengan penuh kebahagiaan, kami mengundang ${trimmed} untuk hadir dalam pernikahan kami: Aditia Falacha Arvin & Ayu Rahmasari yang akan dilaksanakan pada:`,
    "",
    "🗓 Sabtu, 25 April 2026",
    "",
    "Untuk informasi lengkap mengenai acara, dapat mengunjungi tautan berikut:",
    personalUrl,
    "",
    `Kami sangat menantikan kehadiran ${trimmed} di hari bahagia kami.`,
    "",
    "Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.",
    "",
    "Kami yang berbahagia,",
    "Aditia Falacha Arvin & Ayu Rahmasari",
  ].join("\n");
}
