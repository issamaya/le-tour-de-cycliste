// Header.js
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '@/public/we.png';
import ville from '@/public/ottawa-vs-toronto.jpg'
import cyclisme1 from '@/public/cyclisme1.jpg'
import Tour_cycliste from '@/public/Tour_cycliste.jpg'
import tourOttawa2 from '@/public/tourOttawa2.jpg'
import tourOttawa from '@/public/tourOttawa.jpg'
import marcheBy from '@/public/marcheBy.jpeg'
import parlement from '@/public/parlement.jpeg'
import canalRideau from '@/public/canalRideau.jpeg'
import styles from './Header.module.css';
import MenuNav from './MenuNav';

export default function Header({ setPage }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.titre} onClick={() => setPage('accueil')}>
            <Image className={styles.logo} src={logo} alt="logo du cyclisme" />
            <h1>Cyclisme pour tout le monde </h1>
          </a>
        </div>
        <MenuNav setPage={setPage} />
      </div>
      <Container fluid className={styles.container}>
        <div className={styles.scrollContainer}>
          <Image className={styles.ville} src={ville} alt="ville" />
          <Image className={styles.ville} src={cyclisme1} alt="cyclisme1" />
          <Image className={styles.ville} src={Tour_cycliste} alt="Tour_cycliste" />
          <Image className={styles.ville} src={tourOttawa} alt="tourOttawa" />
          <Image className={styles.ville} src={tourOttawa2} alt="tourOttawa2" />
          <Image className={styles.ville} src={marcheBy} alt="marcheBy" />
          <Image className={styles.ville} src={parlement} alt="lparlement" />
          <Image className={styles.ville} src={canalRideau} alt="canalRideau" />
          
        </div>
      </Container>

    </header>
  );
}
