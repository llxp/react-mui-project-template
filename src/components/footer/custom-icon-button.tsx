import IconButton from "@mui/material/IconButton";

export interface CustomIconButtonProps {
  children: React.ReactNode;
  link: string;
}

export default function CustomIconButton(props: CustomIconButtonProps) {
return <IconButton aria-label="privacy" sx={{
    // filled
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    '&:hover': {
    backgroundColor: "primary.dark",
    },
}} href={props.link} component="a"
>
    {props.children}
</IconButton>
}