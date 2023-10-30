
import styles from './testemonialCard.module.css'
import Image from 'next/image'

import img from '@/assets/image/user/user1.png'

export default function TestemonialCard (){
    return(
        <div className={styles.card_wrap}>
            <div className={styles.user_meta}>
                <div className={styles.thumb_wrap}>
                    <Image src={img} alt='...'/>
                </div> 
                <div className={styles.user_content}>
                    <h6 className={styles.name}>Theresa Webb</h6>
                    <p className={styles.location}>USA, Lekk city</p>
                </div>
               
            </div>
            <div className={styles.rating_wrap}>
                <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
                <p className={styles.time_status}>Jun 30, 2023</p>
            </div>
            <div className={styles.description}>
                <p>This ring is more beautiful in person. My favorite ring by far now. Customer service is the best I’ve had so far. Came in very quickly considering they made it after I ordered it Will definitely </p>
            </div>

        </div>
    )
}