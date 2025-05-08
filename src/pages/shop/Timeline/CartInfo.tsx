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
import * as inputstyle from "../../Auth/style";
import * as style from "./style";
import { useCartInfo } from "./useTimelineHook";
import CouponOfferCard from "./CouponOfferCard";

const CartInfo = () => {
    const {
        coupon,
        discountApplied,
        error,
        setCoupon,
        total,
        cartItem,
        handleApplyCoupon,
        charges,
        discount,
    } = useCartInfo();



    return (
        <Box w={600}>
            {cartItem && (
                <Group align="center" mb="lg">
                    <Box pos={"relative"}>
                        <Image
                            src={cartItem.image}
                            alt={cartItem.title}
                            width={64}
                            height={64}
                            fit="contain"
                        />
                        <Badge
                            pos={"absolute"}
                            top={-8}
                            right={-8}
                            radius={"50%"}
                            size="lg"
                            color="dark"
                        >
                            {cartItem.quantity}
                        </Badge>
                    </Box>
                    <Box>
                        <Text size="sm" fw={500} c={"#000"}>
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
                    name="coupon"
                    placeholder="Discount code or gift card"
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                    sx={style.CartTextInputStyle}
                    error={error || undefined}
                />
                <Button
                    variant="default"
                    onClick={() => handleApplyCoupon()}
                    disabled={discountApplied || coupon.trim() === ""}
                >
                    {discountApplied ? "Applied" : "Apply"}
                </Button>
            </Group>

            <CouponOfferCard
                onApply={() => {
                    setCoupon("SpaceX100");
                    handleApplyCoupon("SpaceX100");
                }}
                applied={discountApplied}
            />

            <Divider mt="xl" mb="xl" />

            <Stack spacing={6}>
                {charges.map((item, index) => (
                    <Group position="apart" key={index}>
                        <Text size="sm" c={"#000"}>
                            {item.label}
                        </Text>
                        <Text size="sm" color="dimmed">
                            ${item.value.toFixed(2)}
                        </Text>
                    </Group>
                ))}

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
                <Text size="md" fw={500} c={"#000"}>
                    Total
                </Text>
                <Text fw={500} size="lg" color="dimmed">
                    <span style={{ fontSize: "12px", color: "grey" }}>USD</span> ${total.toFixed(2)}
                </Text>
            </Group>
        </Box>
    );
};

export default CartInfo;
