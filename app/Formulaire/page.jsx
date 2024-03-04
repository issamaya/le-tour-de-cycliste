
import FormControle from '@/components/FormControle'
import styles from './formulaire.module.css'


export default function FormulaireControle() {
    return <>
        <section className={styles.section}>
            <h2 className={styles.Caption}>Formulaire De Contact</h2>
            <FormControle />
        </section>
    </>
}