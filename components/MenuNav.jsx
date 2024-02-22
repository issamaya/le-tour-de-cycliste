
import Link from 'next/link'
import styles from './MenuNav.module.css'
import Toggler from './Toggler'

export default function MenuNav({ setPage }) {
    return <nav className={styles.nav}>
        <ul>
            <section>
                <Toggler titre="lien vers les tours" className={styles.lien}>
                    <li><Link href="/Ottawa" >Ottawa</Link></li>
                    <li><Link href="/Montreal" >Montreal</Link></li>
                </Toggler>
                
            </section>
            <li><Link href="/Formulaire" className={styles.contact} >Contact</Link></li>
           
        </ul>
    </nav>
}