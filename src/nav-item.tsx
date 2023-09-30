import { PathRouteProps } from "react-router-dom";

export default interface NavItem extends PathRouteProps {
    title: string;
    showInHeader?: boolean;
    showInDrawer?: boolean;
}