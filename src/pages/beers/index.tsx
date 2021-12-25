import type { NextPage } from "next";

const BeerPage: NextPage = () => {
  return (
    <div>
      <h1>Beer</h1>
      <p>
        <a href="beers/ale">beers/ale</a>
      </p>
      <p>
        <a href="beers/stouts">beers/stouts</a>
      </p>
    </div>
  );
};

export default BeerPage;
