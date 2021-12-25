import Link from "next/link";
import { ROUTE } from "../../types/Route";
import { SubMenu } from ".";

interface MainMenuProps {
  routeObject: ROUTE;
}

export const MainMenu = ({ routeObject }: MainMenuProps) => {
  const { PATH, LABEL, SUBS } = routeObject;
  return (
    <li>
      <Link href={PATH}>
        <a>{LABEL}</a>
      </Link>
      <ul>
        {SUBS &&
          SUBS.map((subRouteObject: ROUTE) => {
            return (
              <SubMenu
                key={`sub-menu-${subRouteObject.ID}`}
                subRouteObject={subRouteObject}
                mainPath={PATH}
              />
            );
          })}
      </ul>
    </li>
  );
};
