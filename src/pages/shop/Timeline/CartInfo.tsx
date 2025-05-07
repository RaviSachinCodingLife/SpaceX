import {
    Box,
    Group,
    Text,
    Image,
    TextInput,
    Button,
    Divider,
    Stack,
    Badge,
} from "@mantine/core";
import { useState } from "react";
import { useCartStore } from "../../../store/useCartStore";
import * as inputstyle from "../../Auth/style"

const CartInfo = () => {
    const { cart, getTotal } = useCartStore();
    const [coupon, setCoupon] = useState("");
    const [error, setError] = useState("");
    const [discountApplied, setDiscountApplied] = useState(false);

    const subtotal = getTotal();
    const shipping = 34.02;
    const duties = 24.8;
    const taxes = 13.39;

    const discount = discountApplied ? 100 : 0;
    const total = subtotal + shipping + duties + taxes - discount;

    const cartItem = cart[0];

    const handleApplyCoupon = () => {
        if (coupon !== "SpaceX100") {
            setError("Invalid coupon code.");
            setDiscountApplied(false);
        } else if (subtotal + shipping + duties + taxes < 250) {
            setError("Coupon can only be applied to orders of $250 or more.");
            setDiscountApplied(false);
        } else {
            setError("");
            setDiscountApplied(true);
        }
    };

    return (
        <Box
            sx={{
                width: 600,
            }}
        >
            {cartItem && (
                <Group align="center" mb="lg">
                    <Box sx={{ position: "relative" }}>
                        <Image
                            src={cartItem.image}
                            alt={cartItem.title}
                            width={64}
                            height={64}
                            fit="contain"
                        />
                        <Badge
                            sx={{
                                position: "absolute",
                                top: -8,
                                right: -8,
                                borderRadius: "50%",
                            }}
                            size="lg"
                            color="gray"
                        >
                            {cartItem.quantity}
                        </Badge>
                    </Box>
                    <Box>
                        <Text size="sm" fw={500}>
                            {cartItem.title}
                        </Text>
                        <Text size="xs" color="dimmed">
                            {cartItem.color?.toUpperCase()} / {cartItem.size?.toUpperCase()}
                        </Text>
                    </Box>
                    <Text size={"sm"} fw={500} ml="auto">
                        $
                        {(
                            parseFloat(cartItem.price.replace(/[^0-9.]/g, "")) *
                            cartItem.quantity
                        ).toFixed(2)}
                    </Text>
                </Group>
            )}

            <Group mb={4} noWrap>
                <TextInput
                    name={"coupon"}
                    placeholder={"Discount code or gift card"}
                    type={"text"}
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                    sx={{ alignSelf: "flex-end", paddingRight: "10px", flex: 1 }}
                    error={error || undefined}
                />
                <Button
                    variant="default"
                    onClick={handleApplyCoupon}
                    disabled={discountApplied}
                >
                    {discountApplied ? "Applied" : "Apply"}
                </Button>
            </Group>

            <Divider mt="xl" mb="xl" />

            <Stack spacing={6}>
                <Group position="apart">
                    <Text size="sm">Subtotal</Text>
                    <Text size="sm">${subtotal.toFixed(2)}</Text>
                </Group>
                <Group position="apart">
                    <Text size="sm">Shipping + Handling</Text>
                    <Text size="sm">${shipping.toFixed(2)}</Text>
                </Group>
                <Group position="apart">
                    <Text size="sm">Duties</Text>
                    <Text size="sm">${duties.toFixed(2)}</Text>
                </Group>
                <Group position="apart">
                    <Text size="sm">Taxes</Text>
                    <Text size="sm">${taxes.toFixed(2)}</Text>
                </Group>
                {discountApplied && (
                    <Group position="apart">
                        <Text size="sm" color="green">
                            Discount (SpaceX100)
                        </Text>
                        <Text size="sm" color="green">
                            -${discount.toFixed(2)}
                        </Text>
                    </Group>
                )}
            </Stack>

            <Divider mt="xl" mb="xl" />

            <Group position="apart" mt="sm">
                <Text size={"md"} fw={500}>Total</Text>
                <Text fw={500} size="lg">
                    <span style={{ fontSize: "12px", color: "grey" }}>USD</span>   ${total.toFixed(2)}
                </Text>
            </Group>
        </Box>
    );
};

export default CartInfo;
