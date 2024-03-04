'use client'

import { useEffect, useState } from "react"
import styles from "./FormControle.module.css"

export default function FormControle() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [courriel, setCourriel] = useState('');
    const [motif, setMotif] = useState('');
    const [message, setMessage] = useState('');

    const handleNom = (event) => setNom(event.target.value);
    const handlePrenom = (event) => setPrenom(event.target.value);
    const handleCourriel = (event) => setCourriel(event.target.value);
    const handleMotif = (event) => setMotif(event.target.value);
    const handleMessage = (event) => setMessage(event.target.value);

    const [erreurNom, setErreurNom] = useState('');
    const [erreurPrenom, setErreurPrenom] = useState('');
    const [erreurCourriel, setErreurCourriel] = useState('');
    const [erreurMotif, setErreurMotif] = useState('');
    const [erreurMessage, setErreurMessage] = useState('');
    const [envoiReussi, setEnvoiReussi] = useState(false);

   useEffect(() => {
        if (envoiReussi) {
            const timer = setTimeout(() => {
                setEnvoiReussi(false);
            }, 3000); // Le toast disparaît après 3 secondes
            return () => clearTimeout(timer);
        }
    }, [envoiReussi]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let erreur = false;

        const regexCaracteresSpeciaux = /[!@#$%^&*(),.?":{}|<>]/;
        
        if (!nom || nom.length < 4 || regexCaracteresSpeciaux.test(nom)) {
            setErreurNom('Le nom d\'utilisateur doit contenir plus de 4 lettres et ne doit pas contenir de caractères spéciaux');
            erreur = true;
        } else {
            setErreurNom('');
        }

        if (!prenom || prenom.length < 4 || regexCaracteresSpeciaux.test(prenom)) {
            setErreurPrenom('Le prénom d\'utilisateur doit contenir plus de 4 lettres et ne doit pas contenir de caractères spéciaux');
            erreur = true;
        } else {
            setErreurPrenom('');
        }

        if (!courriel || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(courriel)) {
            setErreurCourriel('le courreile que vous avez saisi n\'est pas valide');
            erreur = true;
        } else {
            setErreurCourriel('');
        }

        if (!motif) {
            setErreurMotif('Veuillez choisir un motif de la liste');
            erreur = true;
        } else {
            setErreurMotif('');
        }

        if (!message || message.length < 30) {
            setErreurMessage('Veuillez expliquer davantage');
            erreur = true;
        } else {
            setErreurMessage('');
        }

        if (erreur) {
            return;
        }
            setEnvoiReussi(true);
            setNom('');
            setPrenom('');
            setCourriel('');
            setMotif('');
            setMessage('');
    }
    return <form className={styles.form} onSubmit={handleSubmit}>
        <label>
            Nom
            <input
                type="text"
                name="nom"
                value={nom}
                onChange={handleNom} />
            {erreurNom &&
                <div className={styles.erreur}>{erreurNom}</div>}
        </label>
        <label>
            Prénom
            <input
                type="text"
                name="prenom"
                value={prenom}
                onChange={handlePrenom} />
            {erreurPrenom &&
                <div className={styles.erreur}>{erreurPrenom}</div>}
        </label>
        <label>
            Courriel
            <input
                type="text"
                name="courriel"
                value={courriel}
                onChange={handleCourriel} />
            {erreurCourriel &&
                <div className={styles.erreur}>{erreurCourriel}</div>}
        </label>
        <label>
            Motif
            <select
                name="motif"
                value={motif}
                onChange={handleMotif}>
                <option value="">Sélectionnez un motif</option>
                <option value="reclamation">Réclamation</option>
                <option value="renseignement">Renseignement</option>
            </select>
            {erreurMotif && <div className={styles.erreur}>{erreurMotif}</div>}
        </label>

        <label>
            Message
            <textarea
                name="message"
                value={message}
                onChange={handleMessage} />
            {erreurMessage &&
                <div className={styles.erreur}>{erreurMessage}</div>}
        </label>

        <input type="submit" value="Envoyer Message" />

        {envoiReussi &&
            <div className={`${styles.Toast} ${styles.show}`}>
                Le message est bien envoyé
            </div>
        }
    </form>
}


