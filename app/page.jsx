
// OttawaTour.js
import Image from 'next/image';
import tourOttawa2 from '@/public/Cyclisme.jpg';
import tourOttawa from '@/public/Tour-cycliste.jpg';
import styles from './page.module.css';

export default function OttawaTour() {
    return <div className={styles.ottawaTour}>
        <h1>Le Tour du Cycliste </h1>
        <div className={styles.imgHead}>
            <Image src={tourOttawa} alt="Tour du Cycliste à Ottawa" width={400} height={200} />
            <Image src={tourOttawa2} alt="Tour du Cycliste à Ottawa" width={400} height={200} />
        </div>
        <p className={styles.p}>
            Bienvenue à OT-Cyclisme, l'événement de cyclisme incontournable
            qui captivera les amateurs de vélo à Ottawa et Toronto. Plongez dans l'univers
            passionnant du cyclisme de classe mondiale alors que notre événement transforme
            ces deux grandes villes en scènes épiques de compétition. Inspiré par la grandeur
            du Tour de France, notre course de cyclisme promet des jours palpitants de
            compétition acharnée, répartis sur des pistes spécialement conçues à travers
            Ottawa et Toronto. Venez admirer la puissance, l'endurance et la stratégie
            des cyclistes professionnels qui rivalisent pour la victoire dans chaque
            étape de notre événement. Que vous soyez un fervent fan de cyclisme ou
            simplement à la recherche d'une expérience mémorable, OT-Cyclisme
            vous invite à vous joindre à nous pour célébrer la passion du cyclisme et
            vivre l'excitation de cette course exceptionnelle entre deux métropoles
            dynamiques. Préparez-vous à être ébloui par l'énergie électrisante de la
            compétition cycliste à son meilleur.
        </p>
        <section className={styles.section}>
            <h2 className={styles.h2}>Itinéraires</h2>
        </section>

        <section className={styles.section}>
            <h2 className={styles.h2}>Cartes</h2>
        </section>

        <section className={styles.section}>
            <h2 className={styles.h2}>Renseignements</h2>
        </section>

        <section className={styles.section}>
            <h2 className={styles.h2}>Contact</h2>
        </section>

    </div>


}

