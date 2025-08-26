import * as React from "react"

import StatNumber from "./StatNumber"

export default function StatisticSection() {
  const [registeredContents, setRegisteredContents] = React.useState(0)
  const [writingNFTCount, setWritingNFTCount] = React.useState(0)
  const [likeDistribution, setLikeDistribution] = React.useState(0)
  const [iscnOwnerCount, setIscnOwnerCount] = React.useState(0)
  React.useEffect(() => {
    async function fetchData() {
      try {
        const {
          totalISCNCount: registeredContentsRaw = 0,
          NFTCount: writingNFTCountRaw = 0,
          LIKEs: likeDistributionRaw = 0,
          iscnOwnerCount: iscnOwnerCountRaw = 0,
        } = await fetch("https://api.like.co/like/like/stat").then((r) => r.json())
        setRegisteredContents(registeredContentsRaw)
        setWritingNFTCount(writingNFTCountRaw)
        setLikeDistribution(likeDistributionRaw)
        setIscnOwnerCount(iscnOwnerCountRaw)
      } catch (error) {
        console.error("Failed to fetch stat number")
        console.error(error)
      }
    }
    fetchData()
  }, [])
  return (
    <section className="relative mt-[88px] px-[48px]">
      <div>
        <ul className="mx-auto my-14 w-full lg:max-w-[1024px] xl:max-w-[1440px] min-w-[224px] gap-x-[96px] gap-y-[48px] grid md:grid-cols-2 xl:grid-cols-3 sm:flex-row flex-wrap justify-center">
          <li>
            <StatNumber
              value="VISI"
              unit=""
              label="Menjadi penyelenggara pendidikan bahasa Jepang 
              unggulan skla internasional yang berkontribusi pada pengembangan SDM dan penyebaran dakwah islam"
            />
          </li>
          <li>
            <StatNumber
              value="MISI"
              unit="content"
              label="1.	Menggali Potensi bahasa Jepang dan skil unik siswa.
              2. Membimbing siswa di dalam maupun di luar kelas terkait pembelajaran bahasa Jepang dan kehidupan di Jepang.
              3. Mencetak resource yang mampu berdakwah di Jepang.
              4. Mencetak resource yang mampu bersaing di era global."
            />
          </li>
          {/* <li>
            <StatNumber
              value={writingNFTCount || 15095}
              unit="Writing NFT"
              label="are minted from content"
            />
          </li> */}
          {/* <li>
            <StatNumber
              value={likeDistribution || 56186085}
              unit="LIKE"
              label="are distributed to creators"
            />
          </li> */}
        </ul>
      </div>
    </section>
  );
}
