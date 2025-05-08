import { Stepper, Button, Group, Box, Image, Grid } from "@mantine/core";
import Cart from "./Timeline/Cart";
import Information from "./Timeline/Information";
import Payment from "./Timeline/Payment";
import Shipping from "./Timeline/Shipping";
import logo from "../../assets/images/space-x-logo.png";
import CartInfo from "./Timeline/CartInfo";
import * as boxStyle from "../Astronaut/style";
import * as style from "./style";
import { useCheckout } from "./useShopHook";

const Checkout = () => {
    const {
        active,
        setActive,
        form,
        setForm,
        username,
        prevStep,
        nextStep,
        getBackButtonLabel,
        getNextButtonLabel,
    } = useCheckout();

    const stepsContent = [
        <Cart key="cart" />,
        <Grid key="info">
            <Grid.Col span={12} md={6} px={40}>
                <Information form={form} setForm={setForm} username={username} />
            </Grid.Col>
            <Grid.Col span={12} md={6} px={40} style={style.CheckoutGridColStyle}>
                <CartInfo />
            </Grid.Col>
        </Grid>,
        <Grid key="shipping">
            <Grid.Col span={12} md={6}>
                <Shipping form={form} username={username} />
            </Grid.Col>
            <Grid.Col span={12} md={6} style={style.CheckoutGridColStyle}>
                <CartInfo />
            </Grid.Col>
        </Grid>,
        <Grid key="payment">
            <Grid.Col span={12} md={6}>
                <Payment form={form} username={username} />
            </Grid.Col>
            <Grid.Col span={12} md={6} style={style.CheckoutGridColStyle}>
                <CartInfo />
            </Grid.Col>
        </Grid>,
    ];

    return (
        <Box style={boxStyle.BoxStyle}>
            <Box style={style.CheckoutBoxStyle}>
                <Box px={50} py={20}>
                    <Image
                        src={logo}
                        alt="SpaceX"
                        width={210}
                        height={26.5}
                        style={style.CheckoutImageStyle}
                    />

                    <Stepper
                        active={active}
                        onStepClick={(step) => step <= active && setActive(step)}
                        breakpoint="sm"
                        mt="xl"
                    >
                        <Stepper.Step label="Cart" description="Review Items" />
                        <Stepper.Step label="Information" description="Contact & Email" />
                        <Stepper.Step label="Shipping" description="Delivery Details" />
                        <Stepper.Step label="Payment" description="Complete Order" />
                    </Stepper>

                    <Box mt={24}>{stepsContent[active]}</Box>

                    <Group position="apart" mt="xl">
                        <Button
                            variant="outline"
                            color="dark"
                            onClick={prevStep}
                            disabled={active === 0}
                        >
                            {getBackButtonLabel()}
                        </Button>
                        <Button
                            variant="filled"
                            size="md"
                            mt="md"
                            color={active === 3 ? "teal" : "dark"}
                            style={style.CheckoutButtonStyle}
                            onClick={nextStep}
                        >
                            {getNextButtonLabel()}
                        </Button>
                    </Group>
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;
