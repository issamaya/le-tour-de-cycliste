import Image from 'next/image';
import Ottawa from '@/public/Ottawa.jpg';
import Montreal from '@/public/Montreal.jpg';
import styles from '@/app/page.module.css';
import Link from 'next/link';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: 'Cyclisme | Accueil',
  description: 'Présentation du tour du cyclisme qui va dérouler au Canada .',
  openGraph: {
      title: 'Cyclisme | Accueil',
      description: 'Présentation du tour du cyclisme qui va dérouler au Canada.',
      images: ['/Cyclisme.jpg']
  }
}

export default function Acceuil() {
  return (
    <div className={styles.container}>
      <h1>Bienvenue sur le site Cyclisme Tours</h1>
      <p className={styles.text}>
        Rejoignez-nous pour une expérience de cyclisme inoubliable à l&apos;occasion du Tour du Cycliste,
        un événement captivant qui se déroulera simultanément à Montreal et Ottawa !
        Organisé par l&apos;association à but non lucratif &quot;Cyclisme pour Tout le Monde&quot;,
        cet événement est conçu pour rassembler les passionnés de cyclisme de tous horizons.
        Préparez-vous à vivre des moments palpitants de compétition, de découverte et de camaraderie.
        La date à marquer dans vos agendas est le [26 juin 2024]. Que vous soyez un cycliste
        chevronné ou que vous souhaitiez simplement vivre l&apos;excitation de cet événement exceptionnel,
        nous vous invitons à vous inscrire et à faire partie de cette aventure cycliste unique.
        Venez pédaler à travers les rues emblématiques de Montreal et Ottawa, découvrez des paysages
        époustouflants et partagez votre passion pour le cyclisme. Ne manquez pas l&apos;opportunité
        de participer à cet événement ouvert à tous ! Inscrivez-vous dès maintenant et rejoignez-nous
        pour célébrer la joie du cyclisme ensemble.
      </p>

      <section className={styles.event_section}>
        <h2>Le Tour du Cycliste Montreal</h2>
        <Link href="/Montreal" className={styles.event_link}>
          <Image src={Montreal} alt="Montreal" width={600} height={400} />
        </Link>
        <p className={styles.text}>
          Bienvenue à OM-Cyclisme, l&apos;événement de cyclisme incontournable
          qui captivera les amateurs de vélo à Montréal. Plongez dans l&apos;univers
          passionnant du cyclisme de classe mondiale alors que notre événement transforme
          cette grande ville en une scène épique de compétition.
        </p>
      </section>

      <section className={styles.event_section}>
        <h2>Le Tour de Cycliste Ottawa</h2>
        <Link href="/Ottawa" className={styles.event_link}>
          <Image src={Ottawa} alt="Ottawa" width={600} height={400} />
        </Link>
        <p className={styles.text}>
          Bienvenue à OM-Cyclisme, l&apos;événement de cyclisme incontournable
          qui captivera les amateurs de vélo à Ottawa et Toronto. Plongez dans l&apos;univers
          passionnant du cyclisme de classe mondiale alors que notre événement transforme
          ces deux grandes villes en scènes épiques de compétition.
        </p>
      </section>
    </div>
  );
}
