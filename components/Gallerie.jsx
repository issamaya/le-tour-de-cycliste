import Image from 'next/image'

import styles from './Gallerie.module.css'

export default function Gallerie({images}) {
    return <div className={styles.gallerie}>
        {images.map((image) => 
            <Image 
                src={image.src} 
                alt={image.alt} 
                width={image.width} 
                height={image.height} />
        )}
    </div>
}