
import styles from './giftCard.module.css'


export default function GiftCard(){
    return(
        <div className={styles.card_wrap}>
            {/* <span className={styles.circle1}></span>
            <span className={styles.circle2}></span> */}
            <div className={styles.content_wrap}>
                <div className={styles.content}>
                    <h6 className={styles.title}>20% off for all Boat for Customer</h6>
                    <p className={styles.subtitle}>Discount voucher</p>
                </div>
                <div className={styles.date}>
                    <p className={styles.last_date}>Use In : 19/10/2023</p>
                    <button>Use Now <i class="fa-solid fa-chevron-right"></i> </button>
                </div>
            </div>
           
        </div>
    )
}