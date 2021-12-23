import { Beer } from "../types/Beer";
import Image from 'next/image'

interface BeerProps {
    beerData: Beer
}

export const BeerCard = ({ beerData }: BeerProps) => {
    const { name, price, rating: { average, reviews }, image } = beerData;

    return (
        <div>
            <h1>🍺{name}</h1>
            <p>💵{price}</p>
            <p>average rating: ⭐{average}</p>
            <p>{reviews} ratings</p>
            <Image src={image} alt={name} />
        </div>
    )
}