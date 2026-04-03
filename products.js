/**
 * products.js — Data produk & konfigurasi
 *
 * UPDATE:
 * 1. Buka Admin → tab Export → Generate Kode
 * 2. Copy seluruh output
 * 3. Paste di sini, replace semua
 * 4. Upload ulang ke hosting
 */

var STORE_DATA = {
  wa_number: "6281234567890",
  api_url: "https://script.google.com/macros/s/AKfycbzl7y3umo8ZOWMa6-vusamSwJ9-2l_rmvZ4gwU8pMpx6t2I9X7DYYylrKW_PVHGDvV3QA/exec",
  payment: {
    bsi_name: "TokoKu Official",
    bsi_number: "7123456789",
    dana_number: "081234567890",
    linkaja_number: "081234567890",
    shopeepay_number: "081234567890",
    qris_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/300px-QR_code_for_mobile_English_Wikipedia.svg.png"
  },
  products: [
    {
      "id": "PRD-A1B2C3",
      "name": "Template CV Premium",
      "price": 49000,
      "images": [
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600"
      ],
      "category": "Template",
      "video": "",
      "description": "[{\"type\":\"h2\",\"content\":\"Template CV Profesional\"},{\"type\":\"p\",\"content\":\"Desain modern dan bersih, cocok untuk berbagai industri. File editable di Google Slides dan Canva.\"},{\"type\":\"h2\",\"content\":\"Yang Anda Dapatkan\"},{\"type\":\"ul\",\"items\":[\"1x File Google Slides\",\"1x File Canva\",\"1x File PDF preview\",\"Panduan penggunaan\",\"Free update selamanya\"]},{\"type\":\"divider\"},{\"type\":\"p\",\"content\":\"Format file akan dikirimkan via email setelah pembayaran dikonfirmasi admin.\"}]"
    },
    {
      "id": "PRD-D4E5F6",
      "name": "Ebook Digital Marketing 2024",
      "price": 79000,
      "images": [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600"
      ],
      "category": "Ebook",
      "video": "",
      "description": "[{\"type\":\"h2\",\"content\":\"Panduan Lengkap Digital Marketing\"},{\"type\":\"p\",\"content\":\"Ebook 120+ halaman yang membahas strategi digital marketing dari dasar hingga advanced.\"},{\"type\":\"h2\",\"content\":\"Materi yang Dicover\"},{\"type\":\"ol\",\"items\":[\"SEO Fundamentals\",\"Social Media Strategy\",\"Google Ads & Meta Ads\",\"Content Marketing\",\"Email Marketing\",\"Analytics & Data Driven\"]},{\"type\":\"spacer\"},{\"type\":\"p\",\"content\":\"Cocok untuk pemula maupun yang sudah berpengalaman.\"}]"
    },
    {
      "id": "PRD-G7H8I9",
      "name": "Preset Lightroom Paket Lengkap",
      "price": 35000,
      "images": [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
      ],
      "category": "Preset",
      "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "description": "[{\"type\":\"h2\",\"content\":\"20+ Preset Lightroom Mobile & Desktop\"},{\"type\":\"p\",\"content\":\"Koleksi preset untuk portrait, landscape, dan street photography.\"},{\"type\":\"h2\",\"content\":\"Isi Paket\"},{\"type\":\"ul\",\"items\":[\"20 preset format DNG\",\"20 preset format XMP\",\"File instalasi PDF\",\"Video tutorial\"]},{\"type\":\"divider\"},{\"type\":\"p\",\"content\":\"Kompatibel dengan Lightroom Mobile dan Desktop versi terbaru.\"}]"
    }
  ]
};
