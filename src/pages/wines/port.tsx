import type { NextPage } from "next";
import { WineContainer } from "../../components/WineContainer";

const PortWinePage: NextPage = () => {
    const name = 'port';


    return (
        <div>
            <h1>{name} Wine</h1>
            <WineContainer name={name} />
        </div>
    )
}

export default PortWinePage;