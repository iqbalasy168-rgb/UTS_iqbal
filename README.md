# Website UMKM Soto Mang Iqbal

Website profil UMKM kuliner dengan identitas visual **pasar kuliner segar**. Desain memakai hijau daun, mint, kuning kunyit, merah tomat, latar putih gading, ilustrasi SVG lokal, dan komposisi poster yang cerah. Desain ini sengaja dibedakan dari proyek Sate Mas Bagus yang memakai gaya street-food gelap.

## Identitas proyek
- Nama usaha: Soto Mang Iqbal (identitas simulasi untuk tugas)
- Jenis usaha: UMKM kuliner / soto
- Halaman: Beranda, Tentang, Menu Soto, Kontak
- Katalog: 8 variasi menu soto
- Teknologi: HTML5, CSS3, JavaScript murni
- Database: tidak digunakan
- Formulir kontak: tidak digunakan; halaman Kontak hanya berisi informasi usaha dan lokasi

## Daftar menu contoh
1. Soto Ayam Bening — Rp18.000
2. Soto Ayam Lamongan — Rp20.000
3. Soto Daging Sapi — Rp25.000
4. Soto Betawi — Rp28.000
5. Soto Babat — Rp24.000
6. Soto Kikil — Rp23.000
7. Soto Campur — Rp27.000
8. Soto Ceker — Rp20.000

Harga merupakan data simulasi, bukan penawaran harga aktual.

## Fitur
- Empat halaman yang saling terhubung dengan navigasi yang sama.
- Navigasi responsif dengan menu hamburger.
- Penanda halaman aktif pada navigasi.
- Katalog delapan menu dengan filter kategori dan pencarian nama.
- Tabel jam operasional pada halaman Tentang.
- Halaman Kontak berisi alamat contoh, jam operasional, telepon, media sosial, serta tautan pencarian lokasi di Google Maps.
- Ilustrasi SVG lokal untuk logo, hero, dan menu.
- Layout responsif untuk ponsel, tablet, dan desktop.
- Tidak ada formulir, backend PHP, atau database.

## Struktur folder
```text
soto-mang-iqbal/
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── logo-soto.svg
│   ├── hero-soto.svg
│   └── soto-*.svg
├── bukti/
│   └── README.txt
└── README.md
```

## Cara menjalankan
1. Ekstrak ZIP proyek.
2. Buka folder `soto-mang-iqbal` di VS Code.
3. Buka `index.html` di browser, atau jalankan menggunakan ekstensi Live Server.
4. Gunakan navigasi untuk membuka empat halaman.
5. Pada halaman Menu Soto, coba tombol filter kategori dan kotak pencarian.
6. Pada halaman Kontak, periksa informasi lokasi serta tautan Google Maps.

Website tidak memerlukan PHP, MySQL, database, atau konfigurasi server.

## Data simulasi yang perlu diganti
Alamat area Pangkalpinang, nomor telepon `0812-0000-0000`, akun sosial `@sotomang.iqbal`, jam operasional, nama usaha, dan harga menu adalah contoh untuk tugas. Ganti dengan informasi yang benar sebelum website dipublikasikan.

## Catatan ketentuan tugas
Sesuai arahan proyek, formulir kontak dihilangkan dan halaman Kontak hanya menampilkan informasi kunjungan. Karena itu, komponen formulir kontak pada rubrik UTS tidak dipenuhi oleh versi ini. Pastikan keputusan ini sesuai dengan instruksi dosen.

## Sumber ilustrasi
Seluruh file SVG pada folder `img/` merupakan ilustrasi vektor orisinal yang dibuat untuk proyek ini; tidak menggunakan foto pihak ketiga. Google Fonts menggunakan Nunito Sans dan Bree Serif apabila koneksi internet tersedia. Font cadangan sistem tetap digunakan saat offline.

## Validasi dan bukti tugas
Setiap halaman dapat divalidasi melalui https://validator.w3.org/ dengan mengunggah file HTML satu per satu. Simpan tangkapan layar hasil validasi yang sebenarnya ke folder `bukti/`. Jangan mengisi folder dengan hasil yang belum dilakukan.

## Catatan pengerjaan
Kode menggunakan HTML, CSS, dan JavaScript murni tanpa framework CSS maupun library JavaScript. JavaScript hanya dipakai untuk navigasi hamburger, penanda halaman aktif, serta filter dan pencarian katalog.
