import { Wine } from "../types/Wine";

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
        </div>
    )
}