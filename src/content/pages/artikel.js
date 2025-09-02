import React from "react"

// Import gambar dari folder src/images
import artikel1 from "../../images/artikel1.jpeg"
import artikel2 from "../../images/artikel2.jpeg"
import artikel3 from "../../images/artikel3.jpeg"
import artikel4 from "../../images/artikel4.jpeg"

export default function ArtikelPage() {
  const path = typeof window !== "undefined" ? window.location.pathname : ""

  const articles = {
    "/kerja-di-jepang": {
      title: "Kerja di Jepang",
      image: artikel1,
      date: "2025-08-01",
      content: `
        Kerja di Jepang: Peluang, Tantangan, dan Tips
        Jepang saat ini menghadapi krisis tenaga kerja karena jumlah penduduk menurun dan populasi menua. 
        Banyak sektor seperti manufaktur, konstruksi, perhotelan, hingga kesehatan kekurangan pekerja. 
        Pemerintah Jepang membuka program kerja untuk tenaga asing agar dapat membantu mengisi kebutuhan tersebut.
      `
    },
    "/kerjajepang": {
      title: "Kerja Jepang",
      image: artikel2,
      date: "2025-08-05",
      content: `
        Banyak pekerja dari Indonesia sudah bekerja di Jepang, terutama di bidang kesehatan, konstruksi, pertanian, perikanan, restoran, hotel, dan IT.
      `
    },
    "/jepang": {
      title: "Jepang",
      image: artikel3,
      date: "2025-08-12",
      content: `
        Jepang adalah salah satu negara dengan budaya kerja disiplin, gaji kompetitif, namun juga biaya hidup tinggi.
      `
    },
    "/japan": {
      title: "Japan",
      image: artikel4,
      date: "2025-08-20",
      content: `
        Kesempatan kerja di Jepang bisa menjadi pengalaman berharga dengan keuntungan internasional yang besar.
      `
    }
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
