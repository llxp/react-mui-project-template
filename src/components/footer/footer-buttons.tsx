import NavItem from "../../nav-item";
import CustomIconButton from "./custom-icon-button";

export interface FooterButtonsProps {
    links: NavItem[];
}

export default function FooterButtons(props: FooterButtonsProps) {
  const { links } = props;
  return (
    <>
      {links.filter((item) => item.showInFooter).map((link) => (
        <CustomIconButton
          label={link.label || ""}
          link={link.link || link.path || ""}
          key={link.label}
          target={link.link ? "_blank" : undefined}
        >
          {link.icon}
        </CustomIconButton>
      ))}
    </>
  );
}