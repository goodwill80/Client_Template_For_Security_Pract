import MainStyle from "../Components/MainStyle";
import { Stack } from "@mui/material";

function Card() {
  return (
    <MainStyle>
      <Stack
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Card Page</h1>
      </Stack>
    </MainStyle>
  );
}

export default Card;
