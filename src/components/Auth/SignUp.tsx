import { Box, Title, TextInput, Button, Text } from "@mantine/core";
import * as style from "./style";
import "../assets/scss/login.scss";
import { useSignUp } from "./useAuthHooks";

const SignUp = ({ onFlip }: { onFlip: (flip: boolean) => void }) => {
  const { form, error, handleChange, handleSignUp, inputFields } = useSignUp();

  return (
    <Box style={style.overlayStyle}>
      <Title order={2} style={style.titleStyle}>
        Register
      </Title>

      <Text size="sm" style={style.subTitleStyle}>
        Please fill in the information below:
      </Text>

      {inputFields.map(({ name, label, placeholder, type }) => (
        <TextInput
          key={name}
          name={name}
          label={label}
          placeholder={placeholder}
          type={type}
          value={(form as any)[name]}
          onChange={handleChange}
          styles={{
            label: { ...style.textFieldLabelStyle },
            input: { ...style.textFieldInputStyle },
          }}
        />
      ))}

      {error && (
        <Text color="red" size="sm" ta="center">
          {error}
        </Text>
      )}

      <Button
        fullWidth
        className="button-login"
        mt="30px"
        onClick={handleSignUp}
        styles={{ root: { ...style.btnStyle } }}
      >
        Create my account
      </Button>

      <Text size="sm" style={style.botomTitleStyle}>
        Have an account?{" "}
        <span onClick={() => onFlip(false)} className="create-account">
          Log in now
        </span>
      </Text>
    </Box>
  );
};

export default SignUp;
