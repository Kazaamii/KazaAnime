# 🌸 Kazanime - Platform Streaming & Download Anime

Website streaming anime subtitle Indonesia dengan fitur lengkap: bookmark, login, pilih avatar waifu, 7 tema, dan download multi-kualitas.

## ✨ Fitur Lengkap

### 🔐 Autentikasi & Profil
- **Login/Register** dengan username & password
- **25 Avatar Waifu & Husbando** untuk dipilih:
  - Rem, Emilia, Zero Two, Mai Sakurajima, Marin Kitagawa
  - Yor Forger, Makima, Power, Nezuko, Mikasa
  - Hinata, Asuna, Megumin, Aqua, Chika
  - Gojo, Levi, Tanjiro, Goku, Naruto
  - Anya, Frieren, Ai Hoshino, Tohka, Kurumi
- **Ganti Avatar** kapan saja dari profil
- **Profil Dropdown** dengan info user & bookmark count

### 🔖 Bookmark Anime
- Tambah/hapus anime favorit ke bookmark
- Section bookmark terpisah untuk melihat koleksi
- Bookmark tersimpan per user di localStorage
- Tombol bookmark di setiap anime card

### 📥 Download Anime
- **4 Kualitas**: 1080p (350MB), 720p (200MB), 480p (120MB), 360p (70MB)
- Subtitle Indonesia termasuk
- Design card modern untuk setiap resolusi

### 🎨 7 Tema Kustom
| Tema | Ikon | Deskripsi |
|------|------|-----------|
| Sakura | 🌸 | Pink & ungu manis (default) |
| Autumn | 🍂 | Oranye hangat musim gugur |
| Winter | ❄️ | Biru dingin elegan |
| Summer | ☀️ | Kuning cerah tropis |
| Midnight | 🌙 | Ungu gelap misterius |
| Neon | 💜 | Cyberpunk vibrant |
| Forest | 🌿 | Hijau natural segar |

### 📺 Streaming
- Player dengan kontrol lengkap
- Kualitas streaming: 480p, 720p, 1080p
- 4 Server mirror: JP, SG, US, ID
- Episode selector

### 🚀 API Integration
- **AniList API** - Trending, populer, search, genre filter
- **Jikan API** - Seasonal anime, top ranking
- **Consumet API** - Streaming sources
- Real-time data dengan fallback
- API status indicator

## 📦 Struktur Project

```
kazanime/
├── index.html          # Website utama (single file, 1165 lines)
├── package.json        # NPM config
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore
└── README.md           # Dokumentasi
```

## 🖥️ Desktop Optimization

- Max-width 1400px untuk desktop
- Grid adaptive: 2-7 kolom
- Responsive breakpoints: 1400px, 1200px, 1024px, 768px, 480px
- Touch-friendly untuk mobile

## 🚀 Deploy ke Vercel

### Via Vercel CLI:
```bash
npm install -g vercel
cd kazanime
vercel --prod
```

### Via GitHub:
1. Push ke GitHub
2. Import di vercel.com/new
3. Framework: **Other**
4. Deploy!

## 🎮 Cara Menggunakan

### Register:
1. Klik **Masuk** di navbar
2. Tab **Daftar**
3. Isi username & password
4. Pilih avatar waifu/husbando
5. Klik **Daftar Sekarang**

### Bookmark:
1. Login terlebih dahulu
2. Klik ikon ♡ di anime card
3. Lihat bookmark di section **🔖 Bookmark Saya**

### Ganti Avatar:
1. Klik profil → **Ganti Avatar**
2. Pilih waifu/husbando baru
3. Klik **Simpan Avatar**

## 📄 License
MIT License

---
**Made with 💖 by Kazanime Team**
