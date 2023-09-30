import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export interface CustomIconButtonProps {
  children: React.ReactNode;
  link: string;
  label: string;
}

export default function CustomIconButton(props: CustomIconButtonProps) {
  const { label, link, children } = props;
  return <Tooltip title={label}>
    <IconButton
      aria-label={props.label}
      sx={{
        // filled
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        '&:hover': {
          backgroundColor: "primary.dark",
        },
      }}
      href={link}
      component="a"
    >
      {children}
    </IconButton>
  </Tooltip>
}