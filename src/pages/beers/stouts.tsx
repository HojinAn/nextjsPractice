import type { NextPage } from "next";
import { BeerContainer } from "../../components/BeerContainer";

const StoutsBeerPage: NextPage = () => {
    const name = 'stouts';


    return (
        <div>
            <h1>{name} Beer</h1>
            <BeerContainer name={name} />
        </div>
    )
}

export default StoutsBeerPage;