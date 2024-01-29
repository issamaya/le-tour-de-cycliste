import Image from 'next/image'
import cyclisme1 from '@/public/cyclisme1.jpg'
export default function Acceuil (){
    return <>

<Image src={cyclisme1} alt="cyclisme" width={1200} height={400} />


    Accueil
    </>
}