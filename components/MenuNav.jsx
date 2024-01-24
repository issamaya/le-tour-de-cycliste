import styles from './MenuNav.module.css'

export default function(){
    return <nav className={styles.nav}>
        <ul>
            <li><a href="#">tour Ottawa</a></li>
            <li><a href="#">tour Toronto</a></li>
            <li><a href="#">inscription</a></li>
            <li><a href="#">reservation</a></li>
        </ul>
    </nav>
}