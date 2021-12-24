import type { NextPage } from "next";
import { WineContainer } from "../../components/WineContainer";

const DessertWinePage: NextPage = () => {
    const name = 'dessert';


    return (
        <div>
            <h1>{name} Wine</h1>
            <WineContainer name={name} />
        </div>
    )
}

export default DessertWinePage;