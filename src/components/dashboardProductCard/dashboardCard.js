

import Image from 'next/image'
import styles from './dashboardCard.module.css'

import img from '@/assets/image/product/img10.png'


import { useState } from 'react';
import Link from 'next/link';




export default function DashboardProductCard({showModal}){

    const [modalShow, setModalShow] = useState(false);
    return(
        <div className={styles.wrapper}>
            <div className={styles.thumb_wrap}>
                <Image src={img} alt='...' />
            </div>
            <div className={styles.content_wrap}>
                <div className={styles.title}>
                    <Link href='/dashboard/boatdetails'><h6>CROSS OCEAN YACHT</h6></Link>
                    
                </div>  
                <div className={styles.user_cta}>
                    <div className={styles.btn_group}>
                        <button className='btn__base base-2 me-2'><i class="fa-solid fa-pencil"></i> Edit</button>
                        <button className='btn__base danger' onClick={() => showModal(true)}><i class="fa-solid fa-trash-can"></i> Delete</button>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </div>
        </div>
    )
}


