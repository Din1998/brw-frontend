import styles from './offerKey.module.css'




export default function OfferKey({title,subtitle,icon,addClass,additionalClassName}){
    return(
    
        <div className={`${styles.offer_key_wrap} ${addClass} ${additionalClassName}`}>
            <div className={styles.icon_wrap}>
                <i className={icon}></i>
            </div>
            <div className={styles.content_wrap}>
                <h6 className={styles.title}>{title}</h6>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}