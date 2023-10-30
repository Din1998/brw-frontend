
import Explore from '@/components/explore'
import styles from './page.module.css'
import Hero from '@/components/section-layout/hero/Hero'
import Offer from '@/components/section-layout/offer/Offer'
import GallerySection from '@/components/Gallerysection'
import WhyChoose from '@/components/Whychoose'
import HowWork from '@/components/Howwork'
import IntroSection from '@/components/Intro'
import Explore2 from '@/components/Explore2'
import Testemonial from '@/components/Testemonial'
import Sponsor from '@/components/Sponsor'


export const metadata = {
  title: 'Boat Rental',
  description: 'Generated by create next app',
}




export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Offer />
      <Explore />
      <GallerySection />
      <WhyChoose />
      <HowWork />
      <IntroSection />
      <Explore2 />
      <Testemonial />
      <Sponsor />
    </main>
  )
}
