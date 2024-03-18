import { useState } from "react";
import { Link } from "react-router-dom";
import MainStyle from "../Components/MainStyle";
import { Stack, Box, Typography } from "@mui/material";
import FormTextField from "../Components/FormTextField";
import FormButton from "../Components/FormButton";
import { RegisterAPI } from "../Util/API";

function Register() {
  const [credentials, setCredentials] = useState({
    email: "",
    pwd: "",
  });

  // On Change for local State
  const onChangeHandlerForRegistration = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target.value;
    const name = e.target.name;
    setCredentials((prev) => {
      return {
        ...prev,
        [name]: input,
      };
    });
  };

  // OnClick for Register
  const registerUser = async () => {
    if (credentials.email !== "" && credentials.pwd !== "") {
      const response = await RegisterAPI(credentials);
      console.log(response);
    } else {
      alert("email and password cannot be blank");
    }
  };

  return (
    <MainStyle>
      <Stack
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "1rem",
        }}
      >
        <h1>Registration Page</h1>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <FormTextField
            title={"Username"}
            value={credentials.email}
            name={"email"}
            onChangeHandler={onChangeHandlerForRegistration}
          />
          <FormTextField
            title={"Password"}
            value={credentials.pwd}
            name={"pwd"}
            onChangeHandler={onChangeHandlerForRegistration}
          />
        </Box>
        <FormButton
          variant="outlined"
          title={"Register"}
          onClick={registerUser}
        />
        <Typography>
          Already an existing user. Please click on the following link to login.
        </Typography>
        <Link to={"/login"}>Login</Link>
      </Stack>
    </MainStyle>
  );
}

export default Register;
