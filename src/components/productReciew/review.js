import Image from "next/image"


export default function Review({img}) {
    return (
        <div className='review_wrap'>
            <div className='user_meta'>
                <div className='thumb_wrap'>
                    <Image src={img} alt='...' />
                </div>
                <div className='user_info'>
                    <h6 className='name'>Arlene McCoy</h6>
                    <p className='add'>USA, Lekk city</p>
                </div>
            </div>
            <div className='star_wrap'>
                <ul>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-regular fa-star"></i></li>
                    <li>5.0</li>
                </ul>
                <p className='date'>Jun 30, 2023</p>
            </div>
            <div className='review_text'>
                <p>This ring is more beautiful in person. My favorite ring by far now. Customer service is the best I’ve had so far. Came  very quickly considering they made it after I ordered it Will definitely </p>
            </div>
        </div>
    )
}