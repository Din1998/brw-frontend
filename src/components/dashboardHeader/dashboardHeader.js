import Image from "next/image";

import userImg from '@/assets/image/user/user2.png'
import Link from "next/link";

export default function DashboardHeader({ routeName }){
    return(
        <div className="dashboardHeader">
            <div className="route_name">
                <h6 className="name">{routeName}</h6>
            </div>
            <div className="item_wrapper">
                <ul className="items">
                    <li><Link href='/'><i class="fa-solid fa-bell"></i></Link></li>
                    <li><Link href='/'><span className="message_icon"><i class="fa-solid fa-message"></i></span></Link></li>
                </ul>
                <div className="user_thumb">
                    <Image src={userImg} alt="..." />
                </div>
            </div>
        </div>
    )
}