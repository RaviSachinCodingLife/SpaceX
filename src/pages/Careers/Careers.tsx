import { Box, Container, Title, Text, ActionIcon, Button } from '@mantine/core';
import img1 from "../../assets/images/Careers/6.jpg";
import img2 from "../../assets/images/Careers/5.jpg";
import img3 from "../../assets/images/Careers/4.jpg";
import img4 from "../../assets/images/Careers/3.jpg";
import img5 from "../../assets/images/Careers/2.jpg";
import elonBgImg from "../../assets/images/Careers/1.jpg";
import { Carousel } from '@mantine/carousel';
import * as inputType from "../Astronaut/style";
import * as style from "./style";

const Careers = () => {
    return (
        <Box
            style={inputType.BoxStyle}
        >
            {/* Header Banner */}
            <Box
                style={style.CareersHeaderStyle}
            >
                <Container size="md">
                    <Title order={1} fz={"48px"} fw={"bold"} mb={"20px"}>
                        FIND YOUR FUTURE
                    </Title>
                    <Text size={"md"} fz={"18px"} lh={1.6}>
                        SpaceX is looking for world-class talent ready to tackle challenging projects that will ultimately enable life on other planets.
                        We are an equal opportunity employer offering competitive salaries, comprehensive health benefits and equity packages.
                    </Text>
                </Container>
            </Box>

            {/* Carousel Section */}
            <Carousel
                withIndicators
                loop
                height={700}
                styles={{
                    indicator: {
                        backgroundColor: 'white',
                    },
                }}
            >
                {[img1, img2, img3, img4, img5].map((image, index) => (
                    <Carousel.Slide key={index}>
                        <Box
                            style={style.CareersCarouselStyle(image)}
                        >
                            <Container
                                size="lg"
                                style={style.CareersCarouselContainerStyle}
                            >
                                <Text size={'md'} fz={"14px"} mb={"10px"}>
                                    MAKE AN IMPACT
                                </Text>
                                <Title order={2} fz={"36px"} fw={"bold"} mb={"12px"}>
                                    GLOBAL BROADBAND INTERNET
                                </Title>
                                <Text size={'sm'} fz={"16px"} lh={1.5}>
                                    Drive development of the Starlink constellation to provide fast, reliable internet to populations with little or no connectivity — improving access to information, learning, communication, and commerce.
                                </Text>
                            </Container>
                        </Box>
                    </Carousel.Slide>
                ))}
            </Carousel>

            {/* Life at SpaceX Section */}
            <Box
                style={style.CareersSpacXStyle}
            >
                <Title
                    order={2}
                    fz={"42px"}
                    fw={'bold'}
                    mb={"30px"}
                    tt={"uppercase"}
                >
                    Life at SpaceX
                </Title>
                <Text
                    mx={"750px"}
                    m={"0 auto 40px"}
                    fz={"18px"}
                    lh={1.7}
                >
                    At SpaceX, we are actively developing technologies with the potential to change the
                    course of life on Earth and beyond. We believe that hard work and innovative solutions
                    result in big gains, so we prioritize hiring top talent and cultivating a culture based
                    on merit. From building our interplanetary transport system to working with astronauts
                    and deploying our Starlink broadband internet system, all SpaceX employees directly
                    contribute to making our mission of making humanity multiplanetary a reality.
                </Text>
                <ActionIcon
                    component="button"
                    variant="outline"
                    color="dark"
                    size="xl"
                    radius="sm"
                    sx={style.CareersSpacXActionIconStyle}
                >
                    Learn More
                </ActionIcon>
            </Box>

            {/* Elon Section */}
            <Box
                style={style.ElonBoxStyle(elonBgImg)}
            >
                <Box mx={"700px"} m={'0 auto'} bottom={-50} ta={"center"} pos={"relative"}>
                    <Box fz={"18px"} c={"#fff"} opacity={0.9}>
                        <Text>
                            “SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.”
                        </Text>
                        <Text mt={10} fz={"18px"} ta={"center"} c={"#fff"} opacity={0.9}>
                            – Elon Musk
                        </Text>
                    </Box>

                    <Box
                        style={style.ElonButtonBoxStyle}
                    />

                    <Button
                        variant="outline"
                        size="md"
                        sx={style.ElonBUttonStyle}
                    >
                        Find Your Future
                    </Button>
                </Box>
            </Box>

        </Box >
    );
};

export default Careers;
