import { Box, Button, Image, Text, Title } from "@mantine/core";
import { FC } from "react";
import { LaunchCardProps } from "./type";
import * as inputstyle from "./style"

const LaunchCard: FC<LaunchCardProps> = ({ id, name, date, image, link, style, imageFit }) => {
    return (
        <Box key={id} style={inputstyle.LaunchCardBox}>
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

            <Box style={inputstyle.LaunchCardChildBox}>
                <Text mt="md" c="gray" size="sm" fz={"20px"}>
                    {date}
                </Text>

                <Title order={3} mt={5} fz={"32px"} style={inputstyle.LaunchCardTitle}>
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
                    style={inputstyle.LaunchCardButton}
                >
                    LEARN MORE
                </Button>
            </Box>
        </Box>
    );
};

export default LaunchCard;
