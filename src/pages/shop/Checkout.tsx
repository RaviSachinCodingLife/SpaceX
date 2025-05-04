import { useState } from "react";
import { Stepper, Button, Group, Box, Image, Grid } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import Cart from "./Timeline/Cart";
import Information from "./Timeline/Information";
import Payment from "./Timeline/Payment";
import Shipping from "./Timeline/Shipping";
import logo from "../../assets/images/space-x-logo.png";
import CartInfo from "./Timeline/CartInfo";
import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

export interface FormData {
    fullName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

const Checkout = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(0);
    const cartItems = useCartStore((state) => state.cart);

    const [form, setForm] = useState<FormData>({
        fullName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });

    const auth = JSON.parse(localStorage.getItem("user_data") || "{}");
    const username = auth?.username;

    const nextStep = () => {
        if (active === 0 && cartItems.length === 0) {
            showNotification({
                title: "Cart is empty",
                message: "Please add items to your cart before continuing.",
                color: "red",
            });
            return;
        }

        if (active === 3) {
            showNotification({
                title: "Order Placed",
                message: "Your order has been successfully placed!",
                color: "green",
            });
            navigate("/shop");

            return;
        }

        setActive((current) => Math.min(current + 1, 3));
    };

    const prevStep = () => setActive((current) => Math.max(current - 1, 0));

    const getNextButtonLabel = () => {
        switch (active) {
            case 0:
                return "Checkout";
            case 1:
                return "Continue to Shipping";
            case 2:
                return "Continue to Payment";
            case 3:
                return "Confirm Order";
            default:
                return "Next";
        }
    };

    const getBacktButtonLabel = () => {
        switch (active) {
            case 0:
                return "Back";
            case 1:
                return "Return to Cart";
            case 2:
                return "Return to Information";
            case 3:
                return "Return to Shipping";
            default:
                return "Back";
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "#000",
                minHeight: "100vh",
                paddingTop: "60px",
                marginTop: "-60px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    backgroundColor: "#fff",
                    minHeight: "100vh",
                }}
            >
                <Box px={50} py={20}>
                    <Image
                        src={logo}
                        alt="SpaceX"
                        width={210}
                        height={26.5}
                        style={{ cursor: "pointer" }}
                    />

                    <Stepper
                        active={active}
                        onStepClick={(step) => {
                            if (step <= active) {
                                setActive(step);
                            }
                        }}
                        breakpoint="sm"
                        mt={"xl"}
                    >
                        <Stepper.Step label="Cart" description="Review Items" />
                        <Stepper.Step label="Information" description="Contact & Email" />
                        <Stepper.Step label="Shipping" description="Delivery Details" />
                        <Stepper.Step label="Payment" description="Complete Order" />
                    </Stepper>

                    <Box style={{ marginTop: 24 }}>
                        {active === 0 && <Cart />}

                        {active === 1 && (
                            <Grid>
                                <Grid.Col span={12} md={6} px={40}>
                                    <Information
                                        form={form}
                                        setForm={setForm}
                                        username={username}
                                    />
                                </Grid.Col>
                                <Grid.Col
                                    span={12}
                                    md={6}
                                    px={40}
                                    sx={{
                                        backgroundColor: "#f5f5f5",
                                        borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    <CartInfo />
                                </Grid.Col>
                            </Grid>
                        )}

                        {active === 2 && (
                            <Grid>
                                <Grid.Col span={12} md={6}>
                                    <Shipping form={form} username={username} />
                                </Grid.Col>
                                <Grid.Col
                                    span={12}
                                    md={6}
                                    sx={{
                                        backgroundColor: "#f5f5f5",
                                        boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <CartInfo />
                                </Grid.Col>
                            </Grid>
                        )}

                        {active === 3 && (
                            <Grid>
                                <Grid.Col span={12} md={6}>
                                    <Payment form={form} username={username} />
                                </Grid.Col>
                                <Grid.Col
                                    span={12}
                                    md={6}
                                    sx={{
                                        backgroundColor: "#f5f5f5",
                                        boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    <CartInfo />
                                </Grid.Col>
                            </Grid>
                        )}
                    </Box>

                    <Group position="apart" mt="xl">
                        <Button
                            variant="outline"
                            color="dark"
                            onClick={prevStep}
                            disabled={active === 0}
                        >
                            {getBacktButtonLabel()}
                        </Button>
                        <Button
                            variant="filled"
                            size="md"
                            mt="md"
                            color={active === 3 ? "teal" : "dark"}
                            sx={{
                                width: 182,
                                height: 44,
                                backgroundColor: "#000",
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
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
