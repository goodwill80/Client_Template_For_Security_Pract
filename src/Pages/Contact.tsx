import { useState } from "react";
import MainStyle from "../Components/MainStyle";
import { Stack } from "@mui/material";
import FormTextField from "../Components/FormTextField";
import FormButton from "../Components/FormButton";
import { sendContactAPI } from "../Util/API";

function Contact() {
  const [contactDetails, setContactDetails] = useState({
    contactName: "",
    contactEmail: "",
    subject: "",
    message: "",
  });

  const onChangeHandlerForContact = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setContactDetails((prev) => {
      return {
        ...prev,
        [inputName]: value,
      };
    });
  };

  const onClickForSendContactDetails = async () => {
    const response = await sendContactAPI(contactDetails);
    console.log(response);
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
        <h1>Contact Us Page</h1>
        <FormTextField
          title="Name"
          value={contactDetails.contactName}
          name={"contactName"}
          onChangeHandler={onChangeHandlerForContact}
        />
        <FormTextField
          title="Email"
          value={contactDetails.contactEmail}
          name={"contactEmail"}
          onChangeHandler={onChangeHandlerForContact}
        />
        <FormTextField
          title="Subject"
          value={contactDetails.subject}
          name={"subject"}
          onChangeHandler={onChangeHandlerForContact}
        />
        <FormTextField
          title="Message"
          value={contactDetails.message}
          name={"message"}
          onChangeHandler={onChangeHandlerForContact}
        />
        <FormButton
          title={"Submit"}
          variant="contained"
          onClick={onClickForSendContactDetails}
        />
      </Stack>
    </MainStyle>
  );
}

export default Contact;
