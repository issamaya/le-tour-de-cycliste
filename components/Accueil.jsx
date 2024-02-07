import Image from 'next/image'
import styles from '@/components/Accueil.module.css'
import Ottawa from '@/public/Ottawa.jpg';
import Montreal from '@/public/Montreal.jpg';

export default function Acceuil() {
    return <>

        <div className={styles.accueil}>
            <h1>Bienvenue sur le site Cyclisme Tours</h1>
            <p>
                Rejoignez-nous pour une expérience de cyclisme inoubliable à l'occasion du Tour du Cycliste,
                un événement captivant qui se déroulera simultanément à Montreal et Ottawa !
                Organisé par l'association à but non lucratif "Cyclisme pour Tout le Monde",
                cet événement est conçu pour rassembler les passionnés de cyclisme de tous horizons.
                Préparez-vous à vivre des moments palpitants de compétition, de découverte et de camaraderie.
                La date à marquer dans vos agendas est le [26 juin 2024]. Que vous soyez un cycliste
                chevronné ou que vous souhaitiez simplement vivre l'excitation de cet événement exceptionnel,
                nous vous invitons à vous inscrire et à faire partie de cette aventure cycliste unique.
                Venez pédaler à travers les rues emblématiques de Montreal et Ottawa, découvrez des paysages
                époustouflants et partagez votre passion pour le cyclisme. Ne manquez pas l'opportunité
                de participer à cet événement ouvert à tous ! Inscrivez-vous dès maintenant et rejoignez-nous
                pour célébrer la joie du cyclisme ensemble.
            </p>

            <section className={styles.section}>
                <h2>Le Tour du Cycliste Montreal</h2>

                <a>
                    <Image className={styles.img} src={Montreal} alt="Montreal" width={600} height={400} />
                </a>

                <p>
                    Bienvenue à OM-Cyclisme, l'événement de cyclisme incontournable
                    qui captivera les amateurs de vélo à Montréal. Plongez dans l'univers
                    passionnant du cyclisme de classe mondiale alors que notre événement transforme
                    cette grande ville en une scène épique de compétition.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Le Tour de Cycliste  Ottawa</h2>

                <a>
                    <Image className={styles.img} src={Ottawa} alt="Ottawa" width={600} height={400} />
                </a>

                <p>
                    Bienvenue à OM-Cyclisme, l'événement de cyclisme incontournable
                    qui captivera les amateurs de vélo à Ottawa et Toronto. Plongez dans l'univers
                    passionnant du cyclisme de classe mondiale alors que notre événement transforme
                    ces deux grandes villes en scènes épiques de compétition.
                </p>
            </section>

        </div>

    </>
}