
import FormControle from '@/components/FormControle'
import styles from './formulaire.module.css'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: 'Cyclisme | Renseignement/Réclamation',
    description: 'Présentation d\'un formulaire pour demander des renseignements/Réclamations sur le tour du cyclisme à Ottawa ou Montréal.',
    openGraph: {
        title: 'Cyclisme | Renseignements/Réclamations',
        description: 'Présentation d\'un formulaire pour demander des renseignements/Réclamations sur le tour du cyclisme à Ottawa ou Montréal.',
        images: ['/Cyclisme.jpg']
    }
}

export default function FormulaireControle() {
    return <>
        <section className={styles.section}>
            <h2 className={styles.Caption}>Formulaire De Contact</h2>
            <FormControle />
        </section>
    </>
}