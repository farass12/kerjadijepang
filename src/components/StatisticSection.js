import * as React from "react"

export default function StatisticSection() {
  return (
    <section className="relative mt-[88px] px-[48px]">
      <div>
        <ul className="mx-auto my-14 w-full lg:max-w-[1024px] xl:max-w-[1440px] min-w-[224px] gap-x-[96px] gap-y-[48px] grid md:grid-cols-2 xl:grid-cols-3 sm:flex-row flex-wrap justify-center">
          <li>
            <h1 className="text-3xl font-bold mb-7">VISI</h1>
            <p>
              Menjadi penyelenggara pendidikan bahasa Jepang unggulan skala
              internasional yang berkontribusi pada pengembangan SDM dan
              penyebaran dakwah islam
            </p>
          </li>
          <li>
            <h1 className="text-3xl font-bold mb-7">MISI</h1>
            <p>
              1. Menggali Potensi bahasa Jepang dan skil unik siswa. <br />
              2. Membimbing siswa di dalam maupun di luar kelas terkait
              pembelajaran bahasa Jepang dan kehidupan di Jepang. <br />
              3. Mencetak resource yang mampu berdakwah di Jepang. <br />
              4. Mencetak resource yang mampu bersaing di era global.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
