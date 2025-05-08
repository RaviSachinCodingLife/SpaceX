import {
    Paper,
    Title,
    Text,
    TextInput,
    Grid,
    Box,
    Group,
    Divider,
    Tooltip,
    Button,
    Alert,
} from "@mantine/core";
import {
    InfoIcon,
    InfoQuestionIcon,
    LockIcon,
} from "../../../assets/svg/SvgIcon";
import * as inputstyle from "../../Auth/style";
import { FormData } from "../type";
import { usePayment } from "./useTimelineHook";
import { Fragment } from "react";
import * as style from "./style";

const Payment = ({ form, username }: { form: FormData; username: string }) => {
  const {
    formState,
    handleChange,
    contactEmail,
    shippingAddress,
    shippingMethod,
    isValidForm,
  } = usePayment(form, username);

  const paymentInputs = [
    {
      placeholder: "Card number",
      value: formState.cardNumber,
      onChange: handleChange("cardNumber"),
      rightSection: <LockIcon />,
      mt: "lg",
    },
    {
      placeholder: "Name on card",
      value: formState.cardName,
      onChange: handleChange("cardName"),
      label: "Name on card",
      mt: "sm",
    },
  ];

  return (
    <Fragment>
      <Paper withBorder radius="md" p="md">
        <Group position="apart" mb="xs">
          <Text weight={500} c={"#000"}>
            Contact
          </Text>
          <Button variant="subtle" size="xs" compact>
            Change
          </Button>
        </Group>
        <Text size="sm" mb="md" color="dimmed" tt={"capitalize"}>
          {contactEmail}
        </Text>

        <Divider mb="md" />

        <Group position="apart" mt="xs">
          <Text weight={500} c={"#000"}>
            Ship to
          </Text>
          <Button variant="subtle" size="xs" compact>
            Change
          </Button>
        </Group>
        <Text size="sm" mt="xs" mb="md" color="dimmed">
          {shippingAddress}
        </Text>

        <Divider mb="md" />

        <Group position="apart" mt="xs">
          <Text size="sm" mt="xs" color="dimmed">
            {shippingMethod.name}
          </Text>
          <Text size="sm" mt="xs" color="dimmed" fw={600}>
            {shippingMethod.price}
          </Text>
        </Group>
      </Paper>

      <Title order={4} mb="xs" mt="xl" c={"#000"}>
        Payment
      </Title>
      <Text size="sm" color="dimmed" mb="md" c={"#000"}>
        All transactions are secure and encrypted.
      </Text>

      <Paper withBorder radius="md" p="md" style={{ border: "1px solid #ccc" }}>
        {!isValidForm && (
          <Alert
            variant="outline"
            color="red"
            mb={"md"}
            mt={"md"}
            title="Alert title"
            icon={<InfoIcon />}
          >
            We are unable to ship to a PO box. Please note that if you enter a
            PO box, your order will be canceled.
          </Alert>
        )}

        <Group position="apart">
          <Text weight={500}>Credit card</Text>
          <Group spacing="xs">
            {["visa", "mastercard-logo", "amex", "discover"].map((name) => (
              <img
                key={name}
                src={`https://img.icons8.com/color/32/${name}.png`}
                alt={name}
              />
            ))}
            <Tooltip
              label={
                <Box
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  {["visa", "mastercard-logo", "amex", "discover"].map(
                    (name) => (
                      <img
                        key={name}
                        src={`https://img.icons8.com/color/32/${name}.png`}
                        alt={name}
                      />
                    )
                  )}
                </Box>
              }
              withArrow
              styles={{ tooltip: style.PaymentTooltipStyle }}
            >
              <Text size="xs" color="dimmed">
                +4
              </Text>
            </Tooltip>
          </Group>
        </Group>

        {paymentInputs.map((inputProps, idx) => (
          <TextInput
            key={idx}
            {...inputProps}
            styles={{
              label: { ...inputstyle.textFieldLabelStyle },
              input: {
                ...inputstyle.textFieldInputStyle,
                borderRadius: "10px !important",
              },
            }}
          />
        ))}

        <Grid>
          <Grid.Col span={6}>
            <TextInput
              placeholder="Expiration date (MM / YY)"
              value={formState.expirationDate}
              onChange={handleChange("expirationDate")}
              mt="lg"
              styles={{
                label: { ...inputstyle.textFieldLabelStyle },
                input: {
                  ...inputstyle.textFieldInputStyle,
                  borderRadius: "10px !important",
                },
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              placeholder="Security code"
              value={formState.securityCode}
              onChange={handleChange("securityCode")}
              mt="lg"
              rightSection={
                <Tooltip
                  label="3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front."
                  withArrow
                  styles={{ tooltip: style.PaymentTooltipStyle }}
                >
                  <span style={style.PaymentIconStyle}>
                    <InfoQuestionIcon />
                  </span>
                </Tooltip>
              }
              styles={{
                label: { ...inputstyle.textFieldLabelStyle },
                input: {
                  ...inputstyle.textFieldInputStyle,
                  borderRadius: "10px !important",
                },
              }}
            />
          </Grid.Col>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Payment;
