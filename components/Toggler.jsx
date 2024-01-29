'use client'
import { useState } from "react"
import styles from "./Toggler.module.css"


export default function Toggler({ children, titre }) {
    const [hidden, setHidden] = useState(true);

    const toggle = () => {
        setHidden(!hidden);
    }
    return <div>
        <div onClick={toggle} className={styles.titre} >
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
}