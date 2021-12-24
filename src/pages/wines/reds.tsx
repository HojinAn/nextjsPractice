import type { NextPage } from "next";
import { WineContainer } from "../../components/WineContainer";

const RedsWinePage: NextPage = () => {
    const name = 'reds';


    return (
        <div>
            <h1>{name} Wine</h1>
            <WineContainer name={name} />
        </div>
    )
}

export default RedsWinePage;