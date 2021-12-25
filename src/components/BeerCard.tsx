import { Beer } from "../types/Beer";

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const {
    name,
    price,
    rating: { average, reviews },
  } = beerData;

  return (
    <div>
      <h1>🍺{name}</h1>
      <p>💵{price}</p>
      <p>average rating: ⭐{average}</p>
      <p>{reviews} ratings</p>
    </div>
  );
};
