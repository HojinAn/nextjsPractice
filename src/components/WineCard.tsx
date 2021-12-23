import { Wine } from "../types/Wine";
import Image from "next/image"

interface WineProps {
    wineData: Wine
}

export const WineCard = ({ wineData }: WineProps) => {
    const { wine, winery, rating: { average, reviews }, location, image } = wineData;

    return (
        <div>
            <h1>🍷{wine}</h1>
            <p>🏡{winery}, {location}</p>
            <p>average rating: ⭐{average}</p>
            <p>{reviews}</p>
            <Image src={image} alt={wine} />
        </div>
    )
}