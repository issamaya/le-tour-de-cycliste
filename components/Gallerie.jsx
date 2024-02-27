
'use client'
import Image from 'next/image'

import styles from './Gallerie.module.css';


export default function Gallerie({images}) {
    return <div >
        <li className={styles.li} key={images.id}>
        {images.map((image) => 
            <Image className={styles.format}
                src={image.src} 
                alt={image.alt} 
                width={image.width} 
                height={image.height} />
        
        )}
        </li>
    </div>
}