import { useState } from "react";
import { FormField } from "./type";

const useContact = () => {
  const formInitialDetails: Record<FormField, string> = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] =
    useState<typeof formInitialDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const phoneValidation = (phone: string) => /^[0-9]{1,10}$/.test(phone);

  const onFormUpdate = (category: FormField, value: string) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [category]: value,
    }));
  };

  const formFields: { name: FormField; type: string; placeholder: string }[] = [
    { name: "firstName", type: "text", placeholder: "First Name" },
    { name: "lastName", type: "text", placeholder: "Last Name" },
    { name: "email", type: "email", placeholder: "Email Address" },
    { name: "phone", type: "tel", placeholder: "Phone No." },
    { name: "message", type: "textarea", placeholder: "Message" },
  ];

  return {
    formDetails,
    setButtonText,
    buttonText,
    phoneValidation,
    onFormUpdate,
    formFields,
    setFormDetails,
    formInitialDetails
  };
};

export { useContact };
