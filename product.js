/**
 * products.js — Data produk statis
 * 
 * CARA UPDATE:
 * 1. Edit produk di Admin Panel (tersimpan ke Spreadsheet)
 * 2. Klik "Generate products.js" di menu Admin
 * 3. Copy kode yang muncul
 * 4. Replace isi file ini dengan kode tersebut
 * 5. Upload ulang ke Google Drive / hosting
 */

var STORE_DATA = {
  wa_number: "6281234567890",
  products: [
    {
      "id": "PRD-ABC123",
      "name": "Template CV Premium",
      "price": 49000,
      "images": [
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600"
      ],
      "category": "Template",
      "video": "",
      "description": "[{\"type\":\"h2\",\"content\":\"Template CV Profesional\"},{\"type\":\"p\",\"content\":\"Desain modern dan bersih, cocok untuk berbagai industri. File editable di Google Slides.\"},{\"type\":\"h2\",\"content\":\"Yang Anda Dapatkan\"},{\"type\":\"ul\",\"items\":[\"1x File Google Slides\",\"1x File PDF preview\",\"Panduan penggunaan\",\"Free update\"]},{\"type\":\"divider\"},{\"type\":\"p\",\"content\":\"Format file akan dikirimkan via email setelah pembayaran dikonfirmasi.\"}]"
    },
    {
      "id": "PRD-DEF456",
      "name": "Ebook Digital Marketing",
      "price": 79000,
      "images": [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600"
      ],
      "category": "Ebook",
      "video": "",
      "description": "[{\"type\":\"h2\",\"content\":\"Panduan Lengkap Digital Marketing\"},{\"type\":\"p\",\"content\":\"Ebook 120+ halaman yang membahas strategi digital marketing dari dasar hingga advanced.\"},{\"type\":\"h2\",\"content\":\"Materi yang Dicover\"},{\"type\":\"ol\",\"items\":[\"SEO Fundamentals\",\"Social Media Strategy\",\"Google Ads\",\"Content Marketing\",\"Email Marketing\",\"Analytics & Data\"]},{\"type\":\"spacer\"},{\"type\":\"p\",\"content\":\"Cocok untuk pemula maupun yang sudah berpengalaman.\"}]"
    },
    {
      "id": "PRD-GHI789",
      "name": "Preset Lightroom Paket Lengkap",
      "price": 35000,
      "images": [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
      ],
      "category": "Preset",
      "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "description": "[{\"type\":\"h2\",\"content\":\"20+ Preset Lightroom Mobile\"},{\"type\":\"p\",\"content\":\"Koleksi preset Lightroom untuk foto portrait, landscape, dan street photography.\"},{\"type\":\"h2\",\"content\":\"Isi Paket\"},{\"type\":\"ul\",\"items\":[\"20 preset DNG\",\"20 preset XMP\",\"File instalasi PDF\",\"Video tutorial\"]},{\"type\":\"divider\"},{\"type\":\"p\",\"content\":\"Kompatibel dengan Lightroom Mobile (Android & iOS) dan Lightroom Desktop.\"}]"
    }
  ]
};
