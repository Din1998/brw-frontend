
import styles from './reservationsCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

import img from '@/assets/image/product/img1.png'

export default function ReservationsCard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.thumb_wrap}>
                <Image src={img} alt='...' />
            </div>
            <div className={styles.content_wrap}>
                <div className={styles.title}>
                    <Link href='/dashboard/boatdetails'><h6>CROSS OCEAN YACHT</h6></Link>

                </div>
                <div className={styles.status}>
                    <ul>
                        <li>
                            <p>Booking</p>
                            <span>Jan11 - Jan15</span>
                        </li>
                        <li>
                            <p>People</p>
                            <span>05</span>
                        </li>
                        <li>
                            <p>operator Type</p>
                            <span>No Captain</span>
                        </li>
                        <li>
                            <p>Payment</p>
                            <span>paid</span>
                        </li>
                        <li>
                            <p className='badge badge--danger'>Pending</p>
                            <button></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}