
'use client'
import Image from 'next/image'



export default function Gallerie({images}) {
    return <div>
        {images.map((image) => 
            <Image 
                src={image.src} 
                alt={image.alt} 
                width={image.width} 
                height={image.height} />
        )}
    </div>
}