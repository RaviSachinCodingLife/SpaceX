import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useSignUpStore } from "../../store/signUpStore";
import { inputFields } from "./type";

const useLogin = () => {
  const navigate = useNavigate();
  const { login, error } = useAuthStore();

  const [form, setForm] = useState({
    username: "",
    password: "",
    flipped: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const storeToken = () => {
    const token = `token-${Math.random().toString(36).substr(2)}`;
    const userData = {
      username: form.username,
      password: form.password,
      token,
    };
    localStorage.setItem("user_data", JSON.stringify(userData));
  };

  const handleLogin = () => {
    login(form.username, form.password);
    const isValid = form.username !== "" && form.password !== "";
    if (isValid) storeToken();
    navigate("/home");
  };

  const inputFields: inputFields[] = [
    {
      name: "username",
      label: "Username",
      placeholder: "Enter username",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter password",
      type: "password",
    },
  ];

  return { form, setForm, error, handleChange, handleLogin, inputFields };
};

const useSignUp = () => {
  const navigate = useNavigate();
  const { error, signUp } = useSignUpStore();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const storeToken = () => {
    const token = `token-${Math.random().toString(36).substr(2)}`;
    const username = `${form.firstName}${form.lastName}`.toLowerCase();
    const userData = {
      username,
      password: form.password,
      token,
    };
    localStorage.setItem("user_data", JSON.stringify(userData));
  };

  const handleSignUp = () => {
    signUp(form.firstName, form.lastName, form.email, form.password);
    const isValid =
      form.firstName !== "" &&
      form.password !== "" &&
      form.lastName !== "" &&
      form.email !== "";
    if (isValid) storeToken();
    navigate("/home");
  };

  const inputFields: inputFields[] = [
    {
      name: "firstName",
      label: "First name",
      placeholder: "Enter First name",
      type: "text",
    },
    {
      name: "lastName",
      label: "Last name",
      placeholder: "Enter Last name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter password",
      type: "password",
    },
  ];

  return { form, error, handleChange, handleSignUp, inputFields };
};

export { useLogin, useSignUp };
