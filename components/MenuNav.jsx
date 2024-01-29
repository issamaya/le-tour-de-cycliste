
import styles from './MenuNav.module.css'
import Toggler from './Toggler'

export default function MenuNav({ setPage }) {
    return <nav className={styles.nav}>
        <ul>
            <section>
                <Toggler titre="lien vers les tours" className={styles.lien}>
                    <li><a href="#" onClick={() => setPage("Ottawa")}>Ottawa</a></li>
                    <li><a href="#" onClick={() => setPage("Montreal")}>Montreal</a></li>
                </Toggler>
            </section>
            <li><a href="#" onClick={() => setPage("inscription")}>inscription</a></li>
            <li><a href="#" onClick={() => setPage("reservation")}>reservation</a></li>
        </ul>
    </nav>
}