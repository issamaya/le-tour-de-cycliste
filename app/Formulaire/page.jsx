
import React from 'react';
import styles from '../Formulaire/formulaire.module.css';

export default function Formulaire() {
  return <>
    <div className={styles.form}>
      <h1>Formulaire de Contact</h1>
      <label>
        Nom: <input name="myInput" />
      </label>
      <label>
        Prénom: <input name="myInput" />
      </label>
      <label>
        Courriel: <input name="myInput" />
      </label>
      <label>
        Message: <input name="myMessage" />
      </label>
      <button type="submit">Envoyer</button>
    </div>
  </>
}