import { Box, Button, TextInput, Title, Text } from "@mantine/core";
import * as style from "./style";
import "../../assets/scss/login.scss";
import SignUp from "./SignUp";
import { useLogin } from "./useAuthHooks";
import generateStars from "../../utils/GenerateStars";

const Login = () => {
  const { form, setForm, error, handleChange, handleLogin, inputFields } =
    useLogin();

  return (
    <Box style={style.containerStyle}>
      <Box style={style.containerOverlayStyle} />
      <Box className="star-field">{generateStars(50)}</Box>

      {!form.flipped ? (
        <Box style={style.overlayStyle}>
          <Title order={2} style={style.titleStyle}>
            Login
          </Title>
          <Text size="sm" style={style.subTitleStyle}>
            Please enter your e-mail and password:
          </Text>

          {inputFields.map((field) => (
            <TextInput
              key={field.name}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
              value={(form as any)[field.name]}
              onChange={handleChange}
              styles={{
                label: { ...style.textFieldLabelStyle },
                input: { ...style.textFieldInputStyle },
              }}
            />
          ))}

          {error && (
            <Text color="red" size="sm" ta="center" mt="xs">
              {error}
            </Text>
          )}

          <Button
            fullWidth
            mt={30}
            className="button-login"
            onClick={handleLogin}
            styles={{
              root: {
                ...style.btnStyle,
              },
            }}
          >
            Login
          </Button>

          <Text size="sm" style={style.botomTitleStyle}>
            Don't have an account?{" "}
            <span
              onClick={() => setForm((prev) => ({ ...prev, flipped: true }))}
              className="create-account"
            >
              Create one
            </span>
          </Text>
        </Box>
      ) : (
        <SignUp
          onFlip={() => setForm((prev) => ({ ...prev, flipped: false }))}
        />
      )}
    </Box>
  );
};

export default Login;
