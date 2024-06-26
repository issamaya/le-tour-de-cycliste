
import Image from 'next/image';
import Toggler from '@/components/Toggler';
import Gallerie from '../../components/Gallerie'
import gallerieCyclisme from '@/public/gallerie-cyclisme.json'
import Mont_royal from '@/public/Mont_royal.jpg';
import parc_LaFontaine from '@/public/parc_LaFontaine.jpg';
import place_jacque_quartier from '@/public/place_jacque_quartier.jpg';
import quartier_des_spectacles from '@/public/quartier_des_spectacles.jpg';
import vieux_montreal from '@/public/vieux_montreal.jpg';
import itineraire_Montreal from '@/public/itineraire_Montreal.jpg';
import vieux_port from '@/public/vieux_port.jpg';
import styles from '../Montreal/Montreal.module.css'
import Link from 'next/link';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'Cyclisme | Tour Montréal',
    description: 'Présentation du tour du cyclisme qui va dérouler à la ville de Montréal .',
    openGraph: {
        title: 'Cyclisme | Tour Montréal',
        description: 'Présentation du tour du cyclisme qui va dérouler à la ville de Montréal.',
        images: ['/Montreal.jpg']
    }
}

export default function MontrealTour() {
    return <div className={styles.montrealTour}>
        <h1 className={styles.titre}>Le circuit de Montreal </h1>
        <div className={styles.image}>
            <Gallerie images={gallerieCyclisme.slice(2, 4)} priority />

        </div>
        <p className={styles.p}>
            Bienvenue à MT-Cyclisme, l&apos;événement de cyclisme incontournable
            qui captivera les amateurs de vélo à Montréal. Plongez dans l&apos;univers
            passionnant du cyclisme de classe mondiale alors que notre événement transforme
            cette grande ville en une scène épique de compétition. Inspiré par la grandeur
            du Tour de France, notre course de cyclisme promet des jours palpitants de
            compétition acharnée, répartis sur des pistes spécialement conçues à travers
            Montréal. Venez admirer la puissance, l&apos;endurance et la stratégie
            des cyclistes professionnels qui rivalisent pour la victoire dans chaque
            étape de notre événement. Que vous soyez un fervent fan de cyclisme ou
            simplement à la recherche d&apos;une expérience mémorable, MT-Cyclisme
            vous invite à vous joindre à nous pour célébrer la passion du cyclisme et
            vivre l&apos;excitation de cette course exceptionnelle dans la métropole dynamique.
            Préparez-vous à être ébloui par l&apos;énergie électrisante de la
            compétition cycliste à son meilleur.
        </p>
        <section className={styles.section}>
            <Toggler titre="Images">
                <p className={styles.pp}>
                    Découvrez les paysages passionnantes que le Tour de Montréal a à offrir.
                    Parcourez les rues pittoresques de Montréal et explorez des parcours soigneusement
                    planifiés qui mettront à l&apos;épreuve les compétiteurs tout en offrant des vues
                    spectaculaires. Que vous soyez coureur professionnel ou simple passionné de
                    cyclisme, nos itinéraires variés offrent une expérience unique à chaque étape.
                </p>
                <div className={styles.imgHead}>
                    <Image className={styles.img} src={Mont_royal} alt="Mont_royal" width={300} height={500} />
                    <Image className={styles.img} src={parc_LaFontaine} alt="parc_LaFontaine" width={300} height={500} />
                    <Image className={styles.img} src={place_jacque_quartier} alt="place_jacque_quartier" width={300} height={500} />
                    <Image className={styles.img} src={quartier_des_spectacles} alt="quartier_des_spectacles" width={300} height={500} />
                    <Image className={styles.img} src={vieux_montreal} alt="vieux_montreal" width={300} height={500} />
                    <Image className={styles.img} src={vieux_port} alt="vieux_port" width={300} height={500} />
                </div>
            </Toggler>
        </section>

        <section className={styles.section}>
            <Toggler titre="Cartes">
                <p className={styles.pp}>
                    Explorez les cartes détaillées du Tour de Montréal pour avoir une vue
                    d&apos;ensemble des parcours, des points d&apos;intérêt et des zones stratégiques de
                    compétition. Les cartes vous guideront à travers les rues de la ville,
                    vous permettant de suivre de près l&apos;action palpitante. Soyez prêt à vivre
                    une aventure cycliste inoubliable avec nos cartes interactives.
                </p>
                <h2 className={styles.h2} >
                    Itinéraire du Tour de Cycliste à Montreal:
                </h2>
                <ul className={styles.pp}>
                    <li>Départ: Place Jacques-Cartier</li>
                    <li>Arrêt 1: Vieux-Port de Montréal</li>
                    <li>Arrêt 2: Parc La Fontaine</li>
                    <li>Arrêt 3: Mont Royal</li>
                    <li>Arrêt 4: Quartier des spectacles</li>
                    <li>Arrêt 5: Vieux-Montréal</li>
                </ul>
                <Image src={itineraire_Montreal} className={styles.img} alt="itineraire_Montreal" width={800} height={400} />
                <Link href="https://maps.app.goo.gl/bii1FzFAFqMS3mAU7" target="_blank" className={styles.lien}> lien vers l&apos;itineraire</Link>
            </Toggler>
        </section>

        <section className={styles.section}>
            <Toggler titre="Renseignement">
                <p className={styles.pp}>
                    Obtenez des renseignements essentiels sur le Tour de Montréal.
                    Des détails sur l&apos;inscription aux informations sur les horaires et les règlements
                    de la compétition, notre section &quot;Renseignements&quot; vous fournira toutes les
                    informations nécessaires pour participer ou assister à l&apos;événement. Restez
                    informé et soyez prêt à vivre le cyclisme de classe mondiale.
                </p>
            </Toggler>
        </section>
        <section className={styles.section}>
            <Toggler titre="Contact" >
                <p className={styles.pp}>
                    Pour toute question, contactez notre équipe dédiée. Que ce soit pour des
                    informations sur la compétition, les partenariats ou d&apos;autres demandes,
                    nous sommes là pour vous aider. Retrouvez nos coordonnées dans la section
                    &quot;Contact&quot; et n&apos;hésitez pas à nous joindre. Rejoignez-nous dans cette aventure
                    cycliste exceptionnelle et faites partie de l&apos;excitation du Tour de Montréal.
                </p>
            </Toggler>
        </section>

    </div>

}
