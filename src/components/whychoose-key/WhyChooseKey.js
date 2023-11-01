import styles from './WhyChooseKey.module.css'




export default function WhyChooseKey({title,subtitle,icon,addClass}){
    return(
    
        <div className={`${styles.offer_key_wrap} ${addClass}`}>
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