import { Box, Group, Text, Badge, Button, Image } from "@mantine/core";
import { DiscountIcon } from "../../../assets/svg/SvgIcon";
import { CouponOfferCardProps } from "./type";
import cashBackImg from "../../../assets/images/Cashback.png"


const CouponOfferCard = ({ onApply, applied }: CouponOfferCardProps) => {
  return (
    <Box
      p="md"
      mt="xl"
      sx={(theme) => ({
        border: `1px solid ${theme.colors.gray[3]}`,
        backgroundColor: theme.white,
        boxShadow: theme.shadows.xs,
        borderRadius: theme.radius.md,
      })}
    >
      <Badge color="blue" variant="light" mb="xs">
        Cashback Offer
      </Badge>

      <Group noWrap display={"flex"} align="center" spacing="lg">
        <Image
          src={cashBackImg}
          alt="cashback"
          width={36}
          height={36}
          style={{ border: "1px solid grey", borderRadius: "50%" }}
        />
        <Box>
          <Text size="sm" fw={400} c={"#000"}>
            Win up to ₹50 Cashback
          </Text>
          <Text size="xs" color="dimmed">
            Apply coupon <b>SpaceX100</b> for $100 off orders over $250
          </Text>
        </Box>

        <Button
          variant={applied ? "outline" : "filled"}
          color={applied ? "green" : "blue"}
          radius="md"
          ml="auto"
          onClick={onApply}
          disabled={applied}
          leftIcon={< DiscountIcon />}
        >
          {applied ? "Applied" : "Apply"}
        </Button>

      </Group>
    </Box>
  );
};

export default CouponOfferCard;
