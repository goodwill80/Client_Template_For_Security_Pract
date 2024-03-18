import Button from "@mui/material/Button";

type ButtonProps = {
  title: string;
  variant: "contained" | "text" | "outlined";
  onClick: () => void;
};

function FormButton(props: ButtonProps) {
  return (
    <>
      <Button variant={props.variant} onClick={props.onClick}>
        {props.title}
      </Button>
    </>
  );
}

export default FormButton;
