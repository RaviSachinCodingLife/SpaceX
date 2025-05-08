import { Box, Text, Container, Grid, Loader } from "@mantine/core";
import { ArrowIcon } from "../../assets/svg/SvgIcon";
import { Fragment } from "react";
import { useHomeDetailHook } from "./useHomeHook";
import * as style from "./style";
import * as boxStyle from "../Astronaut/style";

const HomeDetail = () => {
    const { navigate, data, isLoading, gridContent } = useHomeDetailHook();

    return (
        <Fragment>
            {isLoading ? (
                <Box style={style.HomeDetailLoderStyle}>
                    <Loader size={40} />
                </Box>
            ) : (
                <Box style={boxStyle.BoxStyle}>
                    <Box px="xl" py="md" style={style.HomeDetailBoxStyle} onClick={() => navigate("/home")}>
                        <ArrowIcon />
                        <Text size="sm" c="gray.5" sx={boxStyle.AstronautBoxTextStyle}>
                            BACK TO LAUNCHES
                        </Text>
                    </Box>

                    <video
                        src={data?.video}
                        controls
                        autoPlay
                        muted
                        loop
                        style={style.HomeDetailVideoStyle}
                    />

                    <Container size="xl" px="md" py="xl" style={boxStyle.AstronautContainerStyle}>
                        <Text size="sm" c="gray.5" mb={8}>
                            {data?.date || "May 1, 2025"}
                        </Text>
                        <Text size="xl" c="gray.3" fz="30px">
                            {data?.title}
                        </Text>

                        <Grid mt="xl">
                            {gridContent.map((item) => (
                                <Grid.Col key={item.key} span={item.span}>
                                    <Text size="md" c="gray.3" fz="16px">
                                        {item.text}
                                    </Text>
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            )}
        </Fragment>
    );
};

export default HomeDetail;
