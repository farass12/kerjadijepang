import React from "react"

export default function ArtikelPage() {
  const path = typeof window !== "undefined" ? window.location.pathname : ""

  const articles = {
    "/kerja-di-jepang": {
      title: "Kerja di Jepang",
      image: "/images/artikel1.jpeg",
      date: "2025-08-01",
      content: "Isi lengkap artikel Kerja di Jepang..."
    },
    "/kerjajepang": {
      title: "Kerja Jepang",
      image: "/images/artikel2.jpeg",
      date: "2025-08-05",
      content: "Isi lengkap artikel Kerja Jepang..."
    },
    "/jepang": {
      title: "Jepang",
      image: "/images/artikel3.jpeg",
      date: "2025-08-12",
      content: "Isi lengkap artikel Jepang..."
    },
    "/japan": {
      title: "Japan",
      image: "/images/artikel4.jpeg",
      date: "2025-08-20",
      content: "Isi lengkap artikel Japan..."
    }
  }

  const article = articles[path]

  if (!article) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
      </main>
    )
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{article.date}</p>
      <img
        src={article.image}
        alt={article.title}
        className="mb-6 rounded-lg"
      />
      <p className="text-lg leading-relaxed">{article.content}</p>
    </main>
  )
}
