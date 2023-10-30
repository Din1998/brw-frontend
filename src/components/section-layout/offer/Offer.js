import { Row, Col, Container } from 'react-bootstrap'
import styles from './offer.module.css'
import SectionContent from '@/components/sectionContent/SectionContent'
import OfferKey from '@/components/offer-key/OfferKey'
import Image from 'next/image'

import bgImg1 from '../../../assets/image/common/offer-bg1.png'
import bgImg2 from '../../../assets/image/common/offer-bg2.png'






const keyContent = [ {
    icon: 'fa-solid fa-sailboat',
    title: 'Sailing Overseas', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
    
  },
  {
    icon: 'fa-solid fa-sailboat',
    title: 'Yacht Tour', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
  },
  {
    icon: 'fa-solid fa-sailboat',
    title: 'Snorkeling', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
  },
  {
    icon: 'fa-solid fa-sailboat',
    title: 'Snorkeling', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
  },
  {
    icon: 'fa-solid fa-sailboat',
    title: 'Fishing', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
  },
  {
    icon: 'fa-solid fa-sailboat',
    title: 'Nautical Exploration', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
  },
  {
    icon:'fa-solid fa-sailboat',
    title: 'Yacht Travel', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
  },
  {
    icon: 'fa-solid fa-sailboat',
    title: 'Peoples Oriented', 
    subTitle: 'We are proud to offer the most dynamic multifaceted marketing in the industry and all countries',
  }

];

console.log(keyContent)

const displayedKeyContent = keyContent.slice(0, 8);

export default function Offer(){
    return(
        <section className={styles.offer_section}>
            <span className={styles.offer_bgImg1}><Image src={bgImg1} alt='...' /></span>
            <span className={styles.offer_bgImg2}><Image src={bgImg2} alt='...' /></span>
            <Container fluid>
                <Row>
                    <Col className='ms-3'>
                        <SectionContent />
                    </Col>
                    
                </Row>
                <div className={styles.key_component_wrap}>
                    <Row className="gx-0">
                        {displayedKeyContent.map((data, index) => {
                        const isLastFour = index >= displayedKeyContent.length - 4; 
                        const className = isLastFour ? 'last_card' : ''; 
                        const isFourthComponent = index === 3;
                        const isEighthComponent = index === 7;
                        const additionalClassName = isFourthComponent
                            ? 'class-for-fourth'
                            : isEighthComponent
                            ? 'class-for-eighth'
                            : '';

                        return (
                            <Col lg={3} key={index}>
                                <OfferKey 
                                    icon={data.icon} 
                                    title={data.title} 
                                    subtitle={data.subTitle} 
                                    addClass={className} 
                                    additionalClassName={additionalClassName}
                                    />
                            </Col>
                            );
                        })}
                    </Row>
                </div>
            </Container>
        </section>
    )
}