/* ============================================================
   KONFIGURASI KADO VIRTUAL
   Ganti semua nilai di bawah ini sesuai kebutuhanmu.
   Tidak perlu sentuh file lain (index.html / style.css / script.js).
   ============================================================ */

const CONFIG = {

  // Nama penerima kado, muncul di halaman sampul & surat
  recipientName: "Maria Revalina Sitompul",

  // Nama kamu (pengirim), muncul di penutup surat
  senderName: "Dari, Aku, brondong tanteee wkwk",

  // ---------- GALERI FOTO ----------
  // Ganti "src" dengan path foto kamu, misalnya "foto/1.jpg"
  // (taruh foto-foto di folder "foto/" di sebelah index.html)
  photos: [
    { src: "chat pertama.jpeg", caption: "Pertama kali kenal ni yee" },
    { src: "foto pertama dia.jpeg", caption: "PAP PERTAMA KAMUU SENG" },
    { src: "ss chat.jpeg", caption: "SAI LALAP BAHAS BERAKK" },
    { src: "https://placehold.co/400x500/2e1530/d4af6a?text=Foto+4", caption: "Hari yang tak terlupakan" },
  ],

  // ---------- SURAT / PESAN ----------
  // Video utama yang muncul di halaman surat
  letterVideo: "video beliau juga.mp4",

  // Isi surat. Bisa beberapa paragraf, pisahkan dengan "\n\n"
  letterText:
    "HAPPYYYY BIRTHDAYYYYY MY BABYYYYYY,... Semoga kamu selalu takut akan Tuhann yaa, sehat selalu, panjang umur, dan bisa bertahan di teknik ituuu. " +
    "Di hari spesial kamuuu ini, aku cuma mau bilang " +
    "terima kasih karena sudah hadir dan mewarnai hidupku yang gelap ini serta membawa begitu banyak kebahagiaan dan kerandoman ke hidupku WAKAKAKA.\n" +
    "Kamu adalah wujudd terindah yang pernah hadir dalam hidupku, dan kuharap kitaa bisa " +
    "terus merayakan hari-hari bahagiamu di tahun-tahun berikutnyaaaa yaa sayanggg. You mean the world, kini dan nanti.\n\n I WILL TRY TO BE WITH U FOREVERR BABBYYY. GOD BLESS YOUUU. I LOVE YOUUUUUU MY BABYYYYYYYYYYYYY",

  // ---------- JOURNEY (linimasa) ----------
  timeline: [
    { date: "21 Juli 2026", title: "Pertama kali aku memberanikan diri untuk ngechat kamu", text: "Awal dari semuanya, 'FB BREE' BAHAHAAHAH." },
    { date: "22 Juli 2026", title: "Telfonan untuk pertama kalinya", text: "rada akward disini jujur." },
    { date: "23 Juli 2026", title: "Blak blakan bilang gini", text: "'kita emg ga pacaran tp bisa ga siiee kau sama ku aja teruss'" },
    { date: "Hari ini", title: "Cerita kita yang tak pernah pudar", text: "Akan banyak cerita yang akan datang." },
  ],

  // ---------- MOMENT (hitung mundur) ----------
  // Format tanggal: "YYYY-MM-DDTHH:MM:SS"
  momentTargetDate: "2030-12-25T00:00:00",
  momentLabel: "Menuju hari kita berjumpa, aminnn, semoga bisa lebih cepat dari ini yaa sayangggg.",
  momentNote: "Ga sabar rayain ini bareng bareng.",

  // ---------- PLAYLIST ----------
  songTitle: "LAGU UNTUK KAMU SAYANGG, SEMOGA SUKA YAWWW!!",
  songVideoUrl: "./videoplayback.mp4",
  songNote: "LAGU INI NGINGATIN PAS AKU MAU DEKATIN DIRIMU WKWKW.",

  // ---------- GIFT (kejutan terakhir) ----------
  giftText:
    "KADO NYA TUNGGUINN YA SAYANGG, AKU MAAF SEBELUMNYA KALAU HADIAH INI MUNGKIN GA SESUAI HARAPAN KAMU, DAN MUNGKIN CUMA INI YANG BISA AKU BERI KE KAMU SAAT INI SAYAANGG. HAPPY BIRTHDAY YAAA SEKALII LAGIII. I'M SO LUCKY TO HAVE YOUUUUUU. I LOVE YOU MY BABYYYYYY",
};
