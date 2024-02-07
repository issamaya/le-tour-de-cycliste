'use client'
import { useState } from "react"
import styles from "./Toggler.module.css"

export default function Toggler({ children, titre }) {
    const [hidden, setHidden] = useState(true);

    const toggle = () => {
        setHidden(!hidden);
    }

    const handleClick = (e) => {
        // Vérifie si l'élément cliqué est une balise <a>
        if (e.target.tagName.toLowerCase() === "a") {
            setHidden(true); // Ferme le Toggler si c'est un lien
        }
    }

    return (
        <div onClick={handleClick}>
            <div onClick={toggle} className={styles.titre}>
                <span>
                    {hidden ? '⮝' : '⮟'}
                </span>
                {titre}
            </div>
            {!hidden &&
                <div>
                    {children}
                </div>
            }
        </div>
    );
}
