import React from "react"

export default function ArtikelPage() {
  const path = typeof window !== "undefined" ? window.location.pathname : ""

  const articles = {
    "/kerja-di-jepang": {
      title: "Kerja di Jepang",
      image: "/images/artikel1.jpeg", // ✅ ambil dari /static/images/
      date: "2025-08-01",
      content: `
        Kerja di Jepang: Peluang, Tantangan, dan Tips
        Jepang saat ini menghadapi krisis tenaga kerja karena jumlah penduduk menurun dan populasi menua. 
        Banyak sektor seperti manufaktur, konstruksi, perhotelan, hingga kesehatan kekurangan pekerja. 
        Pemerintah Jepang membuka program kerja untuk tenaga asing agar dapat membantu mengisi kebutuhan tersebut.
      `,
    },
    "/kerjajepang": {
      title: "Kerja Jepang",
      image: "/images/artikel2.jpeg",
      date: "2025-08-05",
      content: `
        Banyak pekerja dari Indonesia sudah bekerja di Jepang, terutama di bidang kesehatan, konstruksi, pertanian, perikanan, restoran, hotel, dan IT.
      `,
    },
    "/jepang": {
      title: "Jepang",
      image: "/images/artikel1.jpeg",
      date: "2025-08-12",
      content: `
        Jepang adalah salah satu negara dengan budaya kerja disiplin, gaji kompetitif, namun juga biaya hidup tinggi.
      `,
    },
    "/japan": {
      title: "Japan",
      image: "/images/artikel1.jpeg",
      date: "2025-08-20",
      content: `
        Kesempatan kerja di Jepang bisa menjadi pengalaman berharga dengan keuntungan internasional yang besar.
      `,
    },
  }

  const article = articles[path]

  if (!article) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
        <p className="text-gray-500">Periksa kembali URL artikel.</p>
      </main>
    )
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      {/* Judul */}
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      {/* Tanggal */}
      <p className="text-sm text-gray-500 mb-4">{article.date}</p>

      {/* Gambar */}
      <img
        src={article.image}
        alt={article.title}
        className="mb-6 rounded-lg w-full"
      />

      {/* Konten */}
      <p className="text-lg leading-relaxed whitespace-pre-line">
        {article.content}
      </p>
    </main>
  )
}
