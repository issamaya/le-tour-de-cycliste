
// OttawaTour.js
import Image from 'next/image';
import canalRideau from '@/public/canalRideau.jpeg';
import marcheBy from '@/public/marcheBy.jpeg';
import parcMajorHills from '@/public/parcMajorHills.jpeg';
import premonadeSussex from '@/public/premonadeSussex.jpeg';
import itineraireOttawa from '@/public/itineraireOttawa.png';
import parlement from '@/public/parlement.jpeg';
import tourOttawa2 from '@/public/Cyclisme.jpg';
import Toggler from '@/components/Toggler';
import tourOttawa from '@/public/Tour-cycliste.jpg';



import styles from '../components/Ottawa.module.css'


export default function OttawaTour() {
    return <div className={styles.ottawaTour}>
        <h1>Le Tour du Cycliste Ottawa </h1>
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
            <Toggler titre="Images">
            <p className={styles.p}>
                 Découvrez les images passionnantes que le Tour du Cycliste à Ottawa a à offrir.
                 Parcourez les rues pittoresques d'Ottawa et explorez des parcours soigneusement 
                 planifiés qui mettront à l'épreuve les compétiteurs tout en offrant des vues
                  spectaculaires. Que vous soyez coureur professionnel ou simple passionné de
                   cyclisme, nos itinéraires variés offrent une expérience unique à chaque étape.
                   </p>
                   <Image src={canalRideau} alt="canalRideau" width={200} height={400} />
                   <Image src={marcheBy} alt="marcheBy" width={200} height={400} />
                   <Image src={parcMajorHills} alt="parcMajorHills" width={200} height={400} />
                   <Image src={premonadeSussex} alt="premonadeSussex" width={200} height={400} />
                   <Image src={parlement} alt="parlement" width={200} height={400} />
            </Toggler>
        </section>

        <section className={styles.section}>
            <Toggler titre="Cartes">
            <p className={styles.p}>
                Explorez les cartes détaillées du Tour du Cycliste à Ottawa pour avoir une vue 
                d'ensemble des parcours, des points d'intérêt et des zones stratégiques de
                 compétition. Les cartes vous guideront à travers les rues de la ville, 
                 vous permettant de suivre de près l'action palpitante. Soyez prêt à vivre
                  une aventure cycliste inoubliable avec nos cartes interactives.
                  </p>
                  <p>
                  Itinéraire du Tour de Cycliste à Ottawa:
                  </p>
                  
<ul>
<li>Départ: Parc Major's Hill</li>
<li>Arrêt 1: Rue Sussex</li>
<li>Arrêt 2: Parc de la Gatineau</li>
<li>Arrêt 3: Canal Rideau</li>
<li>Arrêt 4: Marché Byward</li>
<li>Arrêt 5: Colline du Parlement</li>
</ul>
                  
                  <Image src={itineraireOttawa} alt="itineraireOttawa" width={300} height={200} />
                
            </Toggler>
        </section>

        <section className={styles.section}>
            <Toggler titre="Renseignement">
            Obtenez des renseignements essentiels sur le Tour du Cycliste à Ottawa.
             Des détails sur l'inscription aux informations sur les horaires et les règlements
              de la compétition, notre section "Renseignements" vous fournira toutes les 
              informations nécessaires pour participer ou assister à l'événement. Restez 
              informé et soyez prêt à vivre le cyclisme de classe mondiale.
            </Toggler>
        </section>
        <section className={styles.section}>
            <Toggler titre="Contact">
            Pour toute question, contactez notre équipe dédiée. Que ce soit pour des 
            informations sur la compétition, les partenariats ou d'autres demandes,
             nous sommes là pour vous aider. Retrouvez nos coordonnées dans la section 
             "Contact" et n'hésitez pas à nous joindre. Rejoignez-nous dans cette aventure
              cycliste exceptionnelle et faites partie de l'excitation du Tour du Cycliste à Ottawa.
            </Toggler>
        </section>

    </div>
}

