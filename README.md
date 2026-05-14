# Web LKM 17 - Fakultas Teknik UNSIL

## 🚀 Cara Menjalankan Proyek Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan website di komputer kamu:

#
Clone Repositori
git clone [https://github.com/shuraalt/web-lkm-17.git]
cd web-lkm-17

Pastikan Node.js sudah di install, lalu jalankan:
npm install

Untuk Menjalankan Server Pengembangan (http://localhost:3000)
npm run dev
--------------------------------------------------------------------------------------------
Struktur Folder Penting
/src/app: Berisi route dan halaman utama aplikasi.

/src/lib: Berisi data statis materi (lihat file materi.ts).

/public: Berisi aset gambar dan file statis lainnya.
---------------------------------------------------------------------------------------------
Agar tidak terjadi konflik kode saat bekerja bersama, harap ikuti alur berikut:
#
Selalu Pull Sebelum Push:
Sebelum mulai ngoding, pastikan local kamu sudah yang paling baru:
git pull origin main
#
Buat Branch Baru (Opsional tapi Disarankan):
git checkout -b nama-fitur-kamu
#
Gunakan Pesan Commit yang Jelas:
Contoh: git commit -m "contoh: memperbaiki font montserrat di halaman materi"
#
Push ke GitHub:
git push origin main
#
Buat nambah isi materi masuk ke file materi.ts
nanti ada 
#
isi: ``
#
isi materi tinggal dimasukin diantara kutip