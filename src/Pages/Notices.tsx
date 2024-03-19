import { useEffect, useState } from "react";
import MainStyle from "../Components/MainStyle";
import { Stack } from "@mui/material";
import { getNoticesAPI } from "../Util/API";

type NoticesStateType = {
  createDt: string;
  noticBegDt: string;
  noticEndDt: string;
  noticeDetails: string;
  noticeId: string;
  noticeSummary: string;
  updateDt: null;
};

function Notices() {
  const [notices, setNotices] = useState<NoticesStateType[]>([]);
  const getNotices = async () => {
    const data = await getNoticesAPI();
    setNotices(data);
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
        <ol>
          {notices.map((notice, i) => {
            return (
              <>
                <li>{notice.noticeDetails}</li>
              </>
            );
          })}
        </ol>
      </Stack>
    </MainStyle>
  );
}

export default Notices;
