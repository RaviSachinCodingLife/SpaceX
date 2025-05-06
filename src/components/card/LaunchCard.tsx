import { Box, Button, Image, Text, Title } from "@mantine/core";
import React, { CSSProperties } from "react";

interface LaunchCardProps {
    id: string;
    name: string;
    date: string;
    image: string;
    link: string;
    style?: CSSProperties
    imageFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
}

const LaunchCard: React.FC<LaunchCardProps> = ({ id, name, date, image, link, style, imageFit }) => {
    return (
        <Box key={id} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "50px" }}>
            <Image
                src={image}
                alt={name}
                height={400}
                width="100%"
                radius="md"
                fit={imageFit}
                style={{
                    objectPosition: 'center',
                    ...style,
                }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "5px" }}>
                <Text mt="md" c="gray" size="sm" fz={"20px"}>
                    {date}
                </Text>

                <Title order={3} mt={5} fz={"32px"} sx={{ textTransform: "capitalize" }}>
                    {name}
                </Title>

                <Button
                    component="a"
                    href={link}
                    mt="md"
                    variant="outline"
                    color="gray"
                    radius="md"
                    size="sm"
                    style={{ color: "#fff", alignSelf: "flex-start", width: "140px", height: "50px" }}
                >
                    LEARN MORE
                </Button>
            </Box>
        </Box>
    );
};

export default LaunchCard;
