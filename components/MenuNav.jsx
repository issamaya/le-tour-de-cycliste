
import Link from 'next/link'
import styles from './MenuNav.module.css'
export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>   
                    <li><Link href="/Ottawa" className={styles.lien} >Ottawa</Link></li>
                    <li><Link href="/Montreal"  className={styles.lien}>Montreal</Link></li>
                    <li><Link href="/Formulaire" className={styles.lien} >Contact</Link></li>
        </ul>
    </nav>
}