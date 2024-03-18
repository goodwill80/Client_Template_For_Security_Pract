import { useEffect, useState } from "react";
import axios from "axios";
import MainStyle from "../Components/MainStyle";
import { Stack } from "@mui/material";

function Notices() {
  const [notices, setNotices] = useState<string>("");
  const getNotices = async () => {
    try {
      const response = await axios.get("http://localhost:8080/notices");
      console.log(response.data);
      setNotices(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNotices();
  }, []);

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
        <h1>Notices Page</h1>
        <p>{notices}</p>
      </Stack>
    </MainStyle>
  );
}

export default Notices;
