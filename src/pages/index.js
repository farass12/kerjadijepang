import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

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
import AppItem from "../components/AppItem"
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
import SubscribeNewsletterSection from "../components/SubscribeNewsletterSection"
import NFTWidgetSlideshow from "../components/NFTWidgetSlideshow"
import JoinValidatorSection from "../components/JoinValidatorSection"

const HomePage = ({ apps, writingNFTItems, blogUrl }) => {
  const communityItems = [
    'discord',
    'github',
    'twitter',
    'likersocial',
  ]
  return (
    <Layout className="text-like-cyan-vlight">
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
          {/* <div className="absolute hidden inset-x-0 bottom-0 h-[25%] md:flex justify-center">
            <img
              className="w-[22px] mb-[24px] object-contain"
              src={ScrollDownHintImage}
              alt="Scroll Down"
            />
          </div> */}
        </div>
        <div className="relative text-center p-[24px]">
          <GradientText tag="h1" className="text-[42px] sm:text-[64px] md:text-[80px] leading-tight"></GradientText>
          <h2 className="text-[32px] font-bold font-display mt-[24px]">
            
          </h2>
        </div>
      </section>

      {/* Sub-Nav Section */}
      <section className="flex flex-col items-center relative mt-[32px] sm:mt-[88px]">
        <Button
          className="text-[22px]"
          preset="filled"
          href="https://liker.land"
          target="_blank"
          rel="noopener"
        >DAFTAR SEKARANG</Button>
        <nav className="flex justify-center mt-[24px]">
          <ul className="grid grid-cols-2 sm:flex flex-wrap gap-x-[8px] gap-y-[16px]">
            {/* <li>
              <Button
                preset="outlined"
                href="https://app.like.co"
                target="_blank"
                rel="noopener"
              >Register ISCN</Button>
            </li> */}
            {/* <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/"
                target="_blank"
                rel="noopener"
              >Docs</Button>
            </li> */}
            {/* <li>
              <Button
                preset="outlined"
                href={blogUrl}
                target="_blank"
                rel="noopener"
              >Blog</Button>
            </li> */}
            {/* <li>
              <Button
                preset="outlined"
                href="https://docs.like.co/faq"
                target="_blank"
                rel="noopener"
              >FAQ</Button>
            </li> */}
          </ul>
        </nav>
        {/* <p className="text-[16px] mt-[24px]">
          Questions? Ask the <a className="underline" href="http://discord.gg/likecoin">community</a>.
        </p> */}
      </section>

      {/* Statistic Section */}
      <StatisticSection />

      {/* LikeCoin chain Section */}
      <section className="relative flex mt-[88px]">
        <div className="relative flex justify-center flex-grow">
          <KeyVisualImage className="absolute right-0 max-w-[750px] mr-[-120px] opacity-60 md:mr-0 md:opacity-100" />
        </div>
        <div className="relative flex flex-col justify-center flex-grow md:max-w-[66%] p-[24px]">
          <GradientText tag="h2" className="text-[48px] text-center md:text-left">JEPANG KRISIS TENAGA KERJA</GradientText>
          {/* <p className="mt-[24px] text-like-cyan-vlight text-[20px]">{LIKECOIN_DESCRIPTION}</p> */}
          <ul className="grid md:grid-cols-2	gap-x-[32px] gap-y-[48px] mt-[48px]">
            <li>
              <ParagraphSection title="BANYAK USIA LANJUT">
              {ISCN_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="Pekerja asing sangat penting">
              {TENAGA_KERJA}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="Kurang 3,8 Juta di 2035">
              {KURANG_TENAGA}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="KURANG 1 JUTA TK " href="">
              {IPFS_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="JUMLAH TK ASING TERUS MENINGKAT " href="">
              {NFT_MODULE_DESCRIPTION}
              </ParagraphSection>
            </li>
            <li>
              <ParagraphSection title="MEMBUTUHKAN TENAGA KERJA" href="">
              {TOKEN_DESCRIPTION}
              </ParagraphSection>
            </li>
          </ul>
        </div>
      </section>

      {/* Writing NFT Section */}
<section className="mt-[96px] px-[24px]">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[32px]">

    {/* GRID KIRI - TEXT */}
    <div className="flex items-center">
      <GradientText 
        tag="h2" 
        className="text-[32px] md:text-[48px] text-left leading-tight"
      >
        BEKERJA DI JEPANG DENGAN PROFESI YANG SESUAI DENGAN KEAHLIAN ANDA
      </GradientText>
    </div>

    {/* GRID KANAN - SLIDESHOW */}
    <div className="flex justify-center lg:justify-end min-h-[400px]">
      <div className="w-full max-w-md">
        <NFTWidgetSlideshow items={writingNFTItems} />
      </div>
    </div>

  </div>
</section>



      <section className="flex flex-col items-center mt-[100px] p-[24px]">
        <GradientText tag="h2" className="text-[48px] text-center md:text-left">
          MANFAAT KERJA DI JEPANG
        </GradientText>
        <AppGridList className="mt-[32px]">
          {apps.map((data) => (
            <li key={data.title} className="w-[268px]">
              <AppItem {...data} />
            </li>
          ))}
        </AppGridList>
        {/* <div className="flex items-center justify-center mt-[32px]">
          <Link to="/apps">
            <Button preset="filled">More Apps</Button>
          </Link>
        </div> */}
      </section>

      <JoinValidatorSection className="mt-[88px]" />

  <section className="flex flex-col items-center mt-[100px] p-[24px]">
  <GradientText tag="h2" className="text-[48px] text-center md:text-left">
   PERKIRAAN BIAYA PRIBADI</GradientText>
   <GradientText tag="h3" className="text-[48px] text-center md:text-left">
    <p>UNTUK KERJA DI JEPANG</p></GradientText>
  

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

      <div className="relative mx-[24px] mt-[88px] px-[16px] md:px-[64px] py-[64px] rounded-[16px] border-[1px] border-like-cyan-light">
  <section className="justify-center min-h-screen p-[24px] flex flex-col items-center">
    <GradientText tag="h3" className="text-[32px] text-center">
      SYARAT CALON PESERTA
    </GradientText>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-like-cyan-vlight text-[20px]">
      {/* Kolom kiri */}
      <div className="space-y-10">
        <div>
          <div className="flex items-center">
            <ArrowRight size={30} className="mr-2 text-like-cyan-vlight" />
            <span>Sarjana (S1) di bidang Teknik Informatika / Manajemen Informatika / Sistem Informasi</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[82%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
            <span>Berpengalaman di bidang IT</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[82%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
            <span>Berkomitmen belajar bahasa Jepang</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[82%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
            <span>TOEIC Minimal 550 / 600 (Preferable)</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[82%] mt-2"></div>
        </div>
      </div>

      {/* Kolom kanan */}
      <div className="space-y-10">
        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
            <span>Berkelakuan baik dan berakhlak mulia</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[93%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
            <span>Tidak merokok / bersedia berhenti merokok</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[93%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
            <span>Bersedia dikontrak 2 tahun saat bekerja di Jepang</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[93%] mt-2"></div>
        </div>

        <div>
          <div className="flex items-center">
            <ArrowRight size={18} className="mr-2 text-like-cyan-vlight" />
            <span>Tidak bertato</span>
          </div>
          <div className="border-b border-like-cyan-vlight w-[93%] mt-2"></div>
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
      <SubscribeNewsletterSection />
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
