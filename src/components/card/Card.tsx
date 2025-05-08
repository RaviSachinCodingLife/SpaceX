import { Card, Image, Text } from "@mantine/core";
import { GlobalCardProps } from "./type";
import * as style from "./style"


const GlobalCard = ({ image, title, price, link }: GlobalCardProps) => {
    return (
        <Card
            shadow="sm"
            padding="xl"
            component="a"
            href={link}
            sx={style.GlobalCardStyle}
        >
            <Card.Section>
                <Image src={image} alt={title} style={style.CardImgStyle} />
            </Card.Section>

            <Text fw={500} size="lg" mt="md" c={"#000"}>
                {title}
            </Text>

            <Text mt="xs" c="grey.5" size="sm">
                {price}
            </Text>
        </Card>
    );
};

export default GlobalCard;
