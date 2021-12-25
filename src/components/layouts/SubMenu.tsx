import Link from "next/link";
import { ROUTE } from "../../types/Route";

interface SubMenuProps {
  subRouteObject: ROUTE;
  mainPath: string;
}

export const SubMenu = (
  { subRouteObject, mainPath }: SubMenuProps,
  
) => {
  const { PATH, LABEL } = subRouteObject;
  return (
    <li>
      <Link href={`${mainPath}${PATH}`}>
        <a>{LABEL}</a>
      </Link>
    </li>
  );
};
