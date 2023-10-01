import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export interface CustomIconButtonProps {
  children: React.ReactNode;
  link: string;
  label: string;
  target?: string;
}

export default function CustomIconButton(props: CustomIconButtonProps) {
  const { label, link, children, target } = props;
  return (
    <Tooltip title={label}>
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
        target={target}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
}