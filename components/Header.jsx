// Header.js
import Image from 'next/image';
import logo from '@/public/we.png';
import ville from '@/public/ottawa-vs-toronto.jpg'
import styles from './Header.module.css';
import MenuNav from './MenuNav';

export default function Header({setPage}) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.titre} onClick={()=>setPage('accueil')}>
          <Image className={styles.logo} src={logo} alt="logo du cyclisme" />
          <h1>Le Tour du Cycliste</h1>
          </a>
        </div>
        <MenuNav setPage = {setPage} />
      </div>
      <Image className={styles.ville} src={ville} alt="logo du cyclisme" />
    </header>
  );
}
