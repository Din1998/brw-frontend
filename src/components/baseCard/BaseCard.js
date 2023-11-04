
import styles from './BaseCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../assets/image/product/img1.png'

export default function BaseCard(){
  return(
    <div className={styles.base_card_wrap}>
      <div className={styles.thumb}>
        <Image src={img1} alt='...' />
      </div>
      <div className={styles.content_wrap}>
      <Link href='/details'><h6 className={styles.title}> CROSS OCEAN YACHT</h6></Link>
     
      <div className={styles.option_wrap}>
        <ul>
          <li>5 Star</li>
          <li>3 Cabin</li>
          <li>19 People</li>
          <li>30”ft</li>
        </ul>
      </div>
      <div className={styles.rating_wrap}>
        <ul>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
        <p>3.2<span>(758)</span></p>
      </div>
      <div className={styles.card_btm}>
        <Link href='/details' className='btn__base'>View Details</Link>
     
        <div className={styles.price_wrap}>
          <p className={styles.price}>$878.00 <span>/night</span></p>
          <p className={styles.discount_price}>$987.00</p>
        </div>
      </div>
      </div>
    </div>
  )
}