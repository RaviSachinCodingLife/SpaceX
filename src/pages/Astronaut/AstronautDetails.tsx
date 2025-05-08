import { Box, Image, Text, Loader, Title, Container, Grid } from "@mantine/core";
import { ArrowIcon } from "../../assets/svg/SvgIcon";
import { useAstronautDetailhook } from "./useAstronautHook";
import * as style from "./style";

const AstronautDetails = () => {
    const { data, isLoading, navigate, infoItems } = useAstronautDetailhook();

    return (
        <Box style={style.BoxStyle}>
            <Box
                px="xl"
                py="md"
                style={style.AstronautBoxStyle}
                onClick={() => navigate("/astronaut")}
            >
                <ArrowIcon />
                <Text size="sm" c="gray.5" sx={style.AstronautBoxTextStyle}>
                    BACK TO ASTRONAUT
                </Text>
            </Box>

            {isLoading ? (
                <Box style={style.AstronautLoaderStyle}>
                    <Loader size={40} />
                </Box>
            ) : (
                data && (
                    <Box>
                        <Image
                            src={data.urls?.regular}
                            alt={data.alt_description}
                            width="100%"
                            height="700px"
                            radius="md"
                            style={style.AstronautImageStyle}
                        />

                        <Container size="xl" px="md" py="xl" style={style.AstronautContainerStyle}>
                            <Text mt="md" c="gray" size="sm" fz="20px">
                                {new Date(data.created_at).toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </Text>

                            <Title order={3} mt={5} fz="32px">
                                {data.user?.name}
                            </Title>

                            <Grid mt="xl">
                                {infoItems.map((item, idx) => (
                                    <Grid.Col span={6} key={idx}>
                                        <Text
                                            size={item.size}
                                            c="gray.3"
                                            fz="16px"
                                            tt="capitalize"
                                        >
                                            {item.prefix + item.label}
                                        </Text>
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </Container>
                    </Box>
                )
            )}
        </Box>
    );
};

export default AstronautDetails;
