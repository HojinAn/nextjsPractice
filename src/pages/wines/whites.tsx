import type { NextPage } from "next";
import { WineContainer } from "../../components/WineContainer";

const WhitesWinePage: NextPage = () => {
    const name = 'whites';


    return (
        <div>
            <h1>{name} Wine</h1>
            <WineContainer name={name} />
        </div>
    )
}

export default WhitesWinePage;