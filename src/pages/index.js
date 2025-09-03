import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import SEO from "../components/SEO"   // ✅ tambahkan ini

import HeroVideoMp4 from "../videos/hero.mp4"
import HeroVideoWebm from "../videos/hero.webm"
import HeroImage from "../images/hero.png"
import ScrollDownHintImage from "../images/scroll-down-hint.png"
import { ArrowRight } from "lucide-react"
import {
  LIKECOIN_DESCRIPTION,
  TENAGA_KERJA,
  KURANG_TENAGA,
  ISCN_DESCRIPTION,
  IPFS_DESCRIPTION,
  NFT_MODULE_DESCRIPTION,
  TOKEN_DESCRIPTION,
  WIDGET_DESCRIPTION,
  PORTAL_DESCRIPTION,
  WORDPRESS_PLUGIN_DESCRIPTION,
  JEPANG_APP,
  KERJA_JEPANG,
  KERJA_INFORMATIK,
} from "../text";

import AppGridList from "../components/AppGridList"
import GridListApp from "../components/GridListApp"
import AppItem from "../components/AppItem"
import ItemApp from "../components/ItemApp"
import AwardsPartnersSection from "../components/AwardsPartnersSection"
import Button from "../components/Button"
import CommunityLink from "../components/CommunityLink"
import Divider from "../components/Divider"
import GradientText from "../components/GradientText"
import KeyVisualImage from "../components/KeyVisualImage"
import LatestNewsSection from "../components/LatestNewsSection"
import Layout from "../components/Layout"
import MediaCoverageSection from "../components/MediaCoverageSection"
import ParagraphSection from "../components/ParagraphSection"
import StatisticSection from "../components/StatisticSection"
// import SubscribeNewsletterSection from "../components/SubscribeNewsletterSection"
import NFTWidgetSlideshow from "../components/NFTWidgetSlideshow"
import JoinValidatorSection from "../components/JoinValidatorSection"

const HomePage = ({ apps, writingNFTItems, blogUrl }) => {
  const communityItems = ['discord', 'github', 'twitter', 'likersocial']

  return (
    <Layout className="text-like-cyan-vlight">
      {/* ✅ Tambahkan SEO di sini */}
      <SEO
        title="Kerja di Jepang"
        description="Lowongan kerja di Jepang, peluang kerja informatika, dan informasi tenaga kerja asing."
      />

      {/* Hero Section */}
      <section>
        <div className="relative flex justify-center">
          <svg className="w-full h-full max-h-screen pointer-events-none" viewBox="0 0 2560 1966" />
          <video
            autoPlay
            playsInline
            loop
            muted
            className="absolute inset-0 top-0 object-contain object-top max-h-screen mx-auto scale-[1.8] translate-y-[40px] sm:translate-y-0"
            poster={HeroImage}
            alt="#Depub"
            style={{ filter: 'brightness(0.9)' }}
          >
            <source src={HeroVideoWebm} type="video/webm" />
            <source src={HeroVideoMp4} type="video/mp4" />
          </video>
        </div>
        {/* <div className="relative text-center p-[24px]">
          <GradientText
            tag="h1"
            className="text-[42px] sm:text-[64px] md:text-[80px] leading-tight"
          >
            Work in Japan
          </GradientText>
          <h2 className="text-[32px] font-bold font-display mt-[24px]">
            Temukan Lowongan Kerja di Jepang
          </h2>
        </div> */}
      </section>
    


      {/* Sub-Nav Section */}
      <section className="flex flex-col items-center relative mt-[32px] sm:mt-[88px]">
  <Button
    className="text-[22px] -mt-[100px] border border-like-green rounded-lg px-6 py-2"
    preset="filled"
    href="https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F"
    target="_blank"
    rel="noopener"
  >
    <b>DAFTAR SEKARANG!</b>
  </Button>

  <nav className="flex justify-center mt-[24px]">
    <ul className="grid grid-cols-2 sm:flex flex-wrap gap-x-[8px] gap-y-[16px]">
      {/* isi menu */}
    </ul>
  </nav>
</section>

      

      {/* Statistic Section */}
      <StatisticSection />

      {/* LikeCoin chain Section */}
{/* Writing NFT Section */}

<section className="flex flex-col items-center mt-24 px-6">
  <h2 className="text-4xl font-bold text-center text-white">
    JEPANG KRISIS TENAGA KERJA
  </h2>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-[#951b1bff] border-red border-red rounded-2xl p-6 text-like-green ">
    <div className="text-4xl mb-4">👵🏻👴🏻</div>
    <h3 className="text-xl font-semibold mb-2">Banyak Usia Lanjut</h3>
    <p className="text-sm leading-relaxed">
      Usia lanjut di jepang lebih banyak dari pada usia muda, yang artinya pekerja 
      usia muda sangat sedikit sekali.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#951b1bff] border-red border-red rounded-2xl p-6 text-like-green ">
    <div className="text-4xl mb-4">📉</div>
    <h3 className="text-xl font-semibold mb-2">Kurang Dari 1 JUTA TK</h3>
    <p className="text-sm leading-relaxed">
      Laporan media reuters pada juli 2024, jepang menghadapi kekurangan hampir 
      1 juta pekerja asing pada tahun 2040.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#951b1bff] border-red border-red rounded-2xl p-6 text-like-green ">
    <div className="text-4xl mb-4">📈</div>
    <h3 className="text-xl font-semibold mb-2">Jumlah TK Asing Terus Meningkat</h3>
    <p className="text-sm leading-relaxed">
      jumlah pekerja asing di jepang meningkat lebih dari empat kali lipat dalam 15 tahun terakhir 
      menjadi 2,05 juta atau sekitar 3% dari seluruh tenaga kerja per Oktober 2023.
    </p>
  </div>

  <div className="bg-[#951b1bff] border-red border-red rounded-2xl p-6 text-like-green ">
    <div className="text-4xl mb-4">🛠️</div>
    <h3 className="text-xl font-semibold mb-2">Membutuhkan tenaga kerja</h3>
    <p className="text-sm leading-relaxed">
      Jepang mengharapkan bantuan manpower atau tenaga kerja dari berbagai negara, 
      salah satunya dari indonesia.
    </p>
  </div>

  <div className="bg-[#951b1bff] border-red border-red rounded-2xl p-6 text-like-green ">
    <div className="text-4xl mb-4">🌏🤝</div>
    <h3 className="text-xl font-semibold mb-2">Pekkerja Asing Sangat Penting</h3>
    <p className="text-sm leading-relaxed">
      Pekerja asing di anggap sangat penting bagi ekonomi jepang karena mereka membantu 
      mengisi kekurangan tenaga kerja yang parah karena penuaan dan angka kelahiran yang 
      turun drastis.
    </p>
  </div>

  <div className="bg-[#951b1bff] border-red border-red rounded-2xl p-6 text-like-green ">
    <div className="text-4xl mb-4">📊👷</div>
    <h3 className="text-xl font-semibold mb-2">Kurang 3,8 juta di 2035</h3>
    <p className="text-sm leading-relaxed">
      Menurut media lokal Jepang (JiJi pers) Jepang diproyeksikan akan menghadapi kekurangan 
      tenaga kerja yang setara dengan 3,84 juta pekerja pada tahun 2035, yang berarti 17,75 
      juta jam kerja yang tidak terisi setiap hari, media lokal melaporkan.
    </p>
  </div>
</div>
</section>

<section className="mt-[96px] px-[24px]">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[32px]">

    {/* GRID KIRI - TEXT */}
    <div className="flex items-center">
      <h2 className="text-[32px] md:text-[48px] text-left leading-tight font-bold text-gray-900">
        BEKERJA DI JEPANG DENGAN PROFESI YANG SESUAI DENGAN KEAHLIAN ANDA
      </h2>
    </div>

    {/* GRID KANAN - SLIDESHOW */}
    <div className="flex justify-center lg:justify-end min-h-[400px]">
      <div className="w-full max-w-md">
        <NFTWidgetSlideshow items={writingNFTItems} />
      </div>
    </div>

  </div>
</section>





      {/* Judul */}
{/* Judul */}
<section className="flex flex-col items-center mt-[100px]">
  <h2
    className="text-[48px] text-center md:text-left text-[#631111ff] font-bold"
    style={{ textShadow: "0 0 10px rgba(255,255,255,1)" }}
  >
    MANFAAT KERJA DI JEPANG
  </h2>
</section>



{/* Grid Card */}
<section
  className="flex flex-col items-center p-[25px] bg-red-900 rounded-2xl"
>
  <AppGridList>
    {apps.map((data) => (
      <li
        key={data.title}
        className="w-[268px] rounded-2xl bg-red-900"
        style={{ boxShadow: "10px 10px 20px rgba(49, 47, 47, 0.6)" }}
      >
        <AppItem {...data} />
      </li>
    ))}
  </AppGridList>
</section>







      <JoinValidatorSection className="mt-[88px]" />

  <section className="flex flex-col items-center mt-[100px] p-[24px]">
  <div className="flex items-center">
      <h2 className="text-[32px] md:text-[48px] text-left leading-tight font-bold text-gray-900">
        PERKIRAAN BIAYA PRIBADI  
      </h2>
    </div> 
    <div className="flex items-center">
      <h2 className="text-[32px] md:text-[48px] text-left leading-tight font-bold text-gray-900">
        UNTUK KERJA DI JEPANG
      </h2>
    </div>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-like-cyan-vlight text-[20px]">
    {/* Kolom kiri */}
    <div className="space-y-10">
      <div>
        <div className="flex items-center">
          <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
          <span>Paspor Elektronik 5 tahun (Rp. 650.000) 
          <p>Paspor Elektronik 10 tahun (Rp. 950.000)</p></span>
        </div>
        <div className="border-b border-like-cyan-vlight w-[99%] mt-3"></div>
      </div>

      <div>
        <div className="flex items-center">
          <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
          <span>Biaya Aplikasi Visa (Rp. 500.000)</span>
        </div>
        <div className="border-b border-like-cyan-vlight w-[99%] mt-3"></div>
      </div>

      <div>
        <div className="flex items-center">
          <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
          <span>Ujian JLPT N3 (Rp. 220.000)
          <p>Ujian JLPT N4 (Rp. 180.000)</p></span>
        </div>
        <div className="border-b border-like-cyan-vlight w-[99%] mt-3"></div>
      </div>
    </div>

    {/* Kolom kanan */}
    <div className="space-y-10">
      <div>
        <div className="flex items-center">
          <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
          <span>Ujian Specified Skilled Worker 
            <p>(SSW) (Rp. 500.000)</p></span>
        </div>
        <div className="border-b border-like-cyan-vlight w-[83%] mt-2"></div>
      </div>

      <div>
        <div className="flex items-center">
          <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
          <span>Tiket Pesawat (Rp. 5.000.000)</span>
        </div>
        <div className="border-b border-like-cyan-vlight w-[83%] mt-2"></div>
      </div>

      <div>
        <div className="flex items-center">
          <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
          <span>Uang saku sampai gajian 
            <p>(Rp. 6.000.000)</p></span>
        </div>
        <div className="border-b border-like-cyan-vlight w-[83%] mt-2"></div>
      </div>
    </div>
  </div>

  <p className="mt-[15px] text-like-cyan-vlight text-[15px] text-center">
    *Biaya pribadi ini tidak diserahkan ke HASHIWA, melainkan digunakan langsung oleh peserta
  </p>
</section>

      <div className="relative mx-[24px] mt-[88px] px-[16px] md:px-[64px] py-[64px] rounded-[16px] border-[1px] border-like-cyan-light bg-[#631111]">
  <section className="justify-center min-h-screen p-[24px] flex flex-col items-center">
    <h2
      className="text-[48px] text-center md:text-left text-red font-bold"
      style={{ textShadow: "0 0 10px rgba(116, 102, 102, 0.8)" }}
    >
      SYARAT CALON PESERTA
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-red text-[20px]">
      {/* Kolom kiri */}
      <div className="space-y-10">
        <div>
          <div className="flex items-center">
            <ArrowRight size={30} className="mr-2 text-red" />
            <span>Sarjana (S1) di bidang Teknik Informatika / Manajemen Informatika / Sistem Informasi</span>
          </div>
          <div className="border-b border-red w-[82%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-red" />
            <span>Berpengalaman di bidang IT</span>
          </div>
          <div className="border-b border-red w-[82%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-red" />
            <span>Berkomitmen belajar bahasa Jepang</span>
          </div>
          <div className="border-b border-red w-[82%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-red" />
            <span>TOEIC Minimal 550 / 600 (Preferable)</span>
          </div>
          <div className="border-b border-red w-[82%] mt-2"></div>
        </div>
      </div>

      {/* Kolom kanan */}
      <div className="space-y-10">
        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-red" />
            <span>Berkelakuan baik dan berakhlak mulia</span>
          </div>
          <div className="border-b border-red w-[93%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-red" />
            <span>Tidak merokok / bersedia berhenti merokok</span>
          </div>
          <div className="border-b border-red w-[93%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-red" />
            <span>Bersedia dikontrak 2 tahun saat bekerja di Jepang</span>
          </div>
          <div className="border-b border-red w-[93%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-red" />
            <span>Tidak bertato</span>
          </div>
          <div className="border-b border-red w-[93%] mt-2"></div>
        </div>
      </div>
    </div>
  </section>
</div>



        <Divider className="mx-auto my-[48px]" />
        <LatestNewsSection className="mt-[88px]" />
        <Divider className="mx-auto my-[48px]" />
        <MediaCoverageSection className="mt-[88px]" />
      <AwardsPartnersSection className="mt-[88px]" />
      {/* <SubscribeNewsletterSection /> */}
    </Layout>
  )
}

export default function HomePageWithData(props) {
  return (
    <StaticQuery
      query={graphql`
        query HomePageQuery {
          site {
            siteMetadata {
              blogUrl
            }
          }
          appList: markdownRemark(
            fileAbsolutePath: { regex: "/src/content/appList.md$/" }
          ) {
            frontmatter {
              en {
                appItems {
                  code
                }
              }
            }
          }
          homePage: pagesJson(name: {eq: "home"}) {
        writingNFTItems {
  image
  title
}

          }
        }
      `}
      render={(data) => {
        const {
          appItems: { code: appListCode },
        } = data.appList.frontmatter.en;
        const { writingNFTItems } = data.homePage;
        const appListData = JSON.parse(appListCode);
        const apps = appListData
          .filter((data) => data.title === "Apps")[0].items
          .slice(0, 6);
        return (
          <HomePage
            apps={apps}
            writingNFTItems={writingNFTItems}
            blogUrl={data.site.siteMetadata.blogUrl}
            {...props}
          />
        );
      }}
    />
  );
}
