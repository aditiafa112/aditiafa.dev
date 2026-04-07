const WEDDING_URL = "https://wedding.aditiafa.dev/";

export function buildWeddingInvitationMessage(name: string): string {
  const trimmed = name.trim();
  const personalUrl = `${WEDDING_URL}?name=${encodeURIComponent(trimmed)}`;

  return [
    "Bismillahirrahmanirrahim",
    "",
    "Assalamu'alaikum warahmatullahi wabarakatuh,",
    "",
    "Kepada Yth.",
    "Bapak/Ibu/Saudara/i",
    trimmed,
    "",
    "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami:",
    "",
    "Aditia Falacha Arvin & Ayu Rahmasari",
    "",
    "InsyaAllah akan dilaksanakan pada:",
    "🗓 Hari/Tanggal : Sabtu, 25 April 2026",
    "🕙 Waktu        : 10.00 – 12.00 WIB",
    "📍 Lokasi       : Lampung, Kediaman Mempelai Wanita",
    "",
    "Untuk informasi lebih lengkap, silakan kunjungi tautan undangan berikut:",
    personalUrl,
    "",
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    "",
    "Mohon maaf apabila undangan ini disampaikan melalui pesan singkat. Terima kasih atas perhatian dan doanya.",
    "",
    "Wassalamu'alaikum warahmatullahi wabarakatuh.",
    "",
    "Hormat kami,",
    "Aditia & Ayu 🤍",
  ].join("\n");
}
