
import styles from './MenuNav.module.css'

export default function MenuNav({ setPage }) {
    return <nav className={styles.nav}>
        <ul>
            <li><a href="#" onClick={() => setPage("Ottawa")}>Ottawa</a></li>
            <li><a href="#" onClick={() => setPage("Montreal")}>Montreal</a></li>
            <li><a href="#" onClick={() => setPage("inscription")}>inscription</a></li>
            <li><a href="#" onClick={() => setPage("reservation")}>reservation</a></li>
        </ul>
    </nav>
}