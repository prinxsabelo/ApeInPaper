import { createClient } from 'contentful'
import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/static/About'
import Faq from '../components/static/Faq'
import Footer from '../components/static/Footer'
import Hero from '../components/static/Hero'
import Navbar from '../components/static/Navbar'
import Services from '../components/static/Services'
import Values from '../components/static/Values'
import Whitepaper from '../components/static/Whitepaper'
import Work from '../components/static/Work'

const Home: NextPage = (props:any) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-back overflow-hidden">
      <Head>
        <title>Ape In Paper</title>
        <link rel="icon" href="/assets/ApeInLogo.png" />
      </Head>
      <main className="flex w-full flex-1 flex-col">
        <Navbar/>
        {/* Home */}
        <Hero herosection={props.hero} heroSectionVideo={props.heroSectionVideo}/>
        {/* <img src='/assets/images/playvid.png' className='mt-10 h-fit'/> */}
        {/* About Us */}
        <About aboutsection={props.about} aboutSectionList={props.aboutList}/>
        {/* Services */}
        <Services ourServices={props.ourServices}/>
        {/* Core Values */}
        <Values coreValues={props.coreValues} whoWeAre={props.whoWeAre} ourGrowth={props.ourGrowth} service={props.service} ourTeam={props.ourTeam} commentSection={props.commentSection} trustedByNftSection={props.trustedByNftSection}/>
        {/* White paper */}
        <Whitepaper whitePaperSection={props.whitePaperSection}/>
        {/* Faq */}
        <Faq faqSection={props.faqSection}/>
        {/* Work */}
        <Work workingWithUsSection={props.workingWithUsSection}/>
        {/* Footer */}
        <Footer footerSection={props.footerSection}/>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  })
  const herosection = await client.getEntries({ content_type: "heroSection" })
  const aboutsection = await client.getEntries({ content_type: "aboutSection" })
  const aboutsectionlist = await client.getEntries({ content_type: "aboutSectionList" })
  const ourServices = await client.getEntries({ content_type: "ourServices" })
  const coreValues = await client.getEntries({ content_type: "coreValues" })
  const whoWeAre = await client.getEntries({ content_type: "whoWeAre" })
  const ourGrowth = await client.getEntries({ content_type: "ourGrowth" })
  const service = await client.getEntries({ content_type: "service" })
  const ourTeam = await client.getEntries({ content_type: "ourTeam" })
  const commentSection = await client.getEntries({ content_type: "checkOut" })
  const whitePaperSection = await client.getEntries({ content_type: "whitePaper" })
  const faqSection = await client.getEntries({ content_type: "faq" })
  const workingWithUsSection = await client.getEntries({ content_type: "workingWithUsSection" })
  const footerSection = await client.getEntries({ content_type: "footer" })
  const trustedByNftSection = await client.getEntries({ content_type: "trustedByTopNft" })
  const heroSectionVideo = await client.getEntries({ content_type: "heroSectionVideo" })
  return {
    props: {
      hero: herosection.items,
      about: aboutsection.items,
      aboutList: aboutsectionlist.items,
      ourServices: ourServices.items,
      coreValues: coreValues.items,
      whoWeAre: whoWeAre.items,
      ourGrowth: ourGrowth.items,
      service: service.items,
      ourTeam: ourTeam.items,
      commentSection: commentSection.items,
      whitePaperSection: whitePaperSection.items,
      faqSection: faqSection.items,
      workingWithUsSection: workingWithUsSection.items,
      footerSection: footerSection.items,
      trustedByNftSection: trustedByNftSection.items,
      heroSectionVideo: heroSectionVideo.items,
    }
  }
}