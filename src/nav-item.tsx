import { PathRouteProps } from "react-router-dom";

export default interface NavItem extends PathRouteProps {
    title: string;
    showInHeader?: boolean;
    showInDrawer?: boolean;
    showInFooter?: boolean;
    icon?: React.ReactNode;
    label?: string;
    // the difference between link and path is that link is an external link and opened in a new tab by setting target="_blank"
    link?: string;
}