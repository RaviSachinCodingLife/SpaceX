import { Card, Image, Text } from "@mantine/core";

interface GlobalCardProps {
    image: string;
    title: string;
    price: string;
    link: string;
}

const GlobalCard = ({ image, title, price, link }: GlobalCardProps) => {
    return (
        <Card
            shadow="sm"
            padding="xl"
            component="a"
            href={link}
            sx={{
                width: 450,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.02)" },
            }}
        >
            <Card.Section>
                <Image src={image} width={"100%"} height={"100%"} alt={title} />
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
