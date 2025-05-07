import { Box, Container, Title, Text, ActionIcon, Button } from '@mantine/core';
import backgroundImage from "../../assets/images/Careers/SpaceX_Careers_BG.png";
import img1 from "../../assets/images/Careers/6.jpg";
import img2 from "../../assets/images/Careers/5.jpg";
import img3 from "../../assets/images/Careers/4.jpg";
import img4 from "../../assets/images/Careers/3.jpg";
import img5 from "../../assets/images/Careers/2.jpg";
import elonBgImg from "../../assets/images/Careers/1.jpg"
import { Carousel } from '@mantine/carousel';

const Careers = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                minHeight: "100vh",
                paddingTop: "60px",
            }}
        >
            {/* Header Banner */}
            <Box
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '20px',
                    marginTop: "-120px"
                }}
            >
                <Container size="md">
                    <Title order={1} sx={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
                        FIND YOUR FUTURE
                    </Title>
                    <Text sx={{ fontSize: '18px', lineHeight: 1.6 }}>
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
                            sx={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '100%',
                                position: 'relative',
                            }}
                        >
                            <Container
                                size="lg"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: "-10%",
                                    transform: 'translate(-50%, -50%)',
                                    color: '#fff',
                                    textAlign: 'left',
                                    maxWidth: '600px',
                                }}
                            >
                                <Text sx={{ fontSize: '14px', letterSpacing: '1px', marginBottom: '10px' }}>
                                    MAKE AN IMPACT
                                </Text>
                                <Title order={2} sx={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px' }}>
                                    GLOBAL BROADBAND INTERNET
                                </Title>
                                <Text sx={{ fontSize: '16px', lineHeight: 1.5 }}>
                                    Drive development of the Starlink constellation to provide fast, reliable internet to populations with little or no connectivity — improving access to information, learning, communication, and commerce.
                                </Text>
                            </Container>
                        </Box>
                    </Carousel.Slide>
                ))}
            </Carousel>

            {/* Life at SpaceX Section */}
            <Box
                sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '80px 20px',
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center"
                }}
            >
                <Title
                    order={2}
                    sx={{
                        fontSize: '42px',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        textTransform: 'uppercase',
                    }}
                >
                    Life at SpaceX
                </Title>
                <Text
                    sx={{
                        maxWidth: '750px',
                        margin: '0 auto 40px',
                        fontSize: '18px',
                        lineHeight: 1.7,
                    }}
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
                    sx={{
                        border: '1px solid #fff',
                        padding: '12px 30px',
                        fontWeight: 600,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'background 0.3s, color 0.3s',
                        alignSelf: "center",
                        color: "#fff",
                        width: "200px",
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#000',
                        },
                    }}
                >
                    Learn More
                </ActionIcon>
            </Box>

            {/* Elon Section */}
            <Box
                sx={{
                    backgroundImage: `url(${elonBgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    padding: '0 40px 80px 40px',
                    color: '#fff',
                }}
            >
                <Box sx={{ maxWidth: '700px', margin: '0 auto', bottom: -50, textAlign: 'center', position: 'relative' }}>
                    <Box sx={{ fontSize: '18px', color: '#fff', opacity: 0.9 }}>
                        <Text>
                            “SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.”
                        </Text>
                        <Text mt={10} sx={{ textAlign: 'center', color: '#fff', opacity: 0.9, fontSize: '18px', }}>
                            – Elon Musk
                        </Text>
                    </Box>

                    <Box
                        sx={{
                            height: '70px',
                            width: '2px',
                            backgroundColor: '#fff',
                            margin: '40px auto 20px auto',
                        }}
                    />

                    <Button
                        variant="outline"
                        size="md"
                        sx={{
                            border: '1px solid #fff',
                            color: '#fff',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            letterSpacing: '1px',
                            padding: '10px 24px',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#000',
                            },
                        }}
                    >
                        Find Your Future
                    </Button>
                </Box>
            </Box>

        </Box>
    );
};

export default Careers;
