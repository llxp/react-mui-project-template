import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface CopyrightProps {
  copyright: string;
  link: string;
}

export default function Copyright(props: CopyrightProps) {
  const { link, copyright } = props;
  const currentFQDN = window.location.hostname;
  const getTarget = () => {
    if (link.includes(currentFQDN)) {
      return "_self";
    }
    return "_blank";
  };
  return (
    <Typography variant="body2" color="text.secondary">
      <Link color="inherit" href={link} target={getTarget()}>
        {copyright}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}