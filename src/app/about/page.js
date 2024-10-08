
"use client"

import Breadcrumb2 from "@/components/breadcrumb2/breadcrumb2";
import WhyChoose from '@/components/Whychoose';
import Testemonial from '@/components/Testemonial';
import Explore2 from '@/components/Explore2';
import HowWork from '@/components/Howwork';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import IntroSection from "@/components/Intro";
import Luxury from "@/components/luxury";
import Footer from "@/components/footer/Footer";
import NavBar2 from "@/components/navBar2/NavBar2";

const aboutContent = [
    {
      title: 'About',
      subTitle: '',
    },
  ];


export default function About() {

    return (
        <>
        <NavBar2 />
            {/* page banner */}
            <div>
                {aboutContent.map((data, index) => (
                    <div key={index}>
                    <Breadcrumb2 title={data.title} subTitle={data.subTitle} />
                    </div>
                ))}
            </div>

           


            <main className="about-section">
              
                    <div className='px-5'>
                        <Breadcrumb />
                    </div>  
                    <Luxury />
                    <WhyChoose />
                    <HowWork />
                    <Explore2 />
                    <IntroSection />
                    <Testemonial />
       
            </main>

            <Footer />
        </>

    )
}