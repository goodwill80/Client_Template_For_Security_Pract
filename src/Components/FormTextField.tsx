import { TextField, Box } from "@mui/material";

type FormTextProps = {
  title: string;
  value: string;
  name: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormTextField(props: FormTextProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Typography sx={{ fontWeight: "bold" }}>{props.title}</Typography> */}
      <TextField
        id="outlined-basic"
        label={props.title}
        variant="outlined"
        value={props.value}
        name={props.name}
        onChange={props.onChangeHandler}
      />
    </Box>
  );
}

export default FormTextField;
