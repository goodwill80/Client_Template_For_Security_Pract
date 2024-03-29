import { useState } from "react";
import { Link } from "react-router-dom";
import MainStyle from "../Components/MainStyle";
import { Stack, Box, Typography } from "@mui/material";
import FormTextField from "../Components/FormTextField";
import FormButton from "../Components/FormButton";
import { LoginAPI } from "../Util/API";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    pwd: "",
  });

  // On Change for local State
  const onChangeHandlerForLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const name = e.target.name;
    setCredentials((prev) => {
      return {
        ...prev,
        [name]: input,
      };
    });
  };

  // OnClick for Login
  const loginUser = async () => {
    if (credentials.email !== "" && credentials.pwd !== "") {
      const response = await LoginAPI(credentials);
      console.log(response);
    } else {
      alert("Username and password cannot be blank");
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
        <h1>Login Page</h1>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <FormTextField
            title={"Username"}
            value={credentials.email}
            name={"email"}
            onChangeHandler={onChangeHandlerForLogin}
          />
          <FormTextField
            title={"Password"}
            value={credentials.pwd}
            name={"pwd"}
            onChangeHandler={onChangeHandlerForLogin}
          />
        </Box>
        <FormButton variant="outlined" title={"Login"} onClick={loginUser} />
        <Typography>
          New user? Please click on the following link to sign-up
        </Typography>
        <Link to={"/register"}>Registration</Link>
      </Stack>
    </MainStyle>
  );
}

export default Login;
