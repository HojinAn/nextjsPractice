import type { NextPage } from "next";

const WinePage: NextPage = () => {
  return (
    <div>
      <h1>Wines</h1>
      <p>
        <a href="wines/reds">wines/reds</a>
      </p>
      <p>
        <a href="wines/whites">wines/whites</a>
      </p>
      <p>
        <a href="wines/sparkling">wines/sparkling</a>
      </p>
      <p>
        <a href="wines/rose">wines/rose</a>
      </p>
      <p>
        <a href="wines/dessert">wines/dessert</a>
      </p>
      <p>
        <a href="wines/port">wines/port</a>
      </p>
    </div>
  );
};

export default WinePage;
