
import styles from './workkey.module.css'

export default function WorkKey() {
    return(
        <div className={styles.card_wrap}>
            <div className={styles.icon_wrap}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className={styles.number}><p>01</p></div>
            </div>
            <div className={styles.content_wrap}>
                <h6 className={styles.title}>Search Your Boat</h6>
                <p className={styles.subtitle}>Search for lorem ipsum will uncover many web sites still in their infancy. Various versions</p>
            </div>
        </div>
    )
}