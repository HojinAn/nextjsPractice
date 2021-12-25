import { ROUTES } from "../../constants";
import { MainMenu } from ".";
import { ROUTE } from "../../types/Route";
import styled from "@emotion/styled";

export const Navigation = () => {
  return (
    <header>
      <PageTitle>Wine and Beers</PageTitle>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <MainMenu
                key={`main-menu-${routeObject.ID}`}
                routeObject={routeObject}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const PageTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;
