import { Container, Title, Text, Group, Paper, Stack, Center, Button, Box, Overlay, Image, Grid, ScrollArea } from '@mantine/core';
import starLinkBgImg from "../../assets/images/StarLink/1.webp";
import starLinkBgImg1 from "../../assets/images/StarLink/2.webp";
import starLinkBgImg2 from "../../assets/images/StarLink/3.webp";
import starLinkBgImg3 from "../../assets/images/StarLink/4.webp";
import starLinkBgImg4 from "../../assets/images/StarLink/5.webp";
import starLinkBgImg5 from "../../assets/images/StarLink/6.webp";
import { ArrowIcon, MediaIcon } from '../../assets/svg/SvgIcon';
import { Fragment, useState } from 'react';
import GlobalDialog from '../../components/Dialog/GlobalDialog';
import video from "../../assets/video/1.mp4";
import video1 from "../../assets/video/2.mp4";
import video2 from "../../assets/video/3.mp4";
import video3 from "../../assets/video/4.mp4";
import video4 from "../../assets/video/SpaceX Starlink 253 launch and Falcon 9 first stage landing, 2 May 2025.mp4";
import thumbnail from "../../assets/images/StarLink/video_thumbnail.webp"
import thumbnail1 from "../../assets/images/StarLink/video_thumbnail_1.webp"
import thumbnail2 from "../../assets/images/StarLink/video_thumbnail_2.webp"
import thumbnail3 from "../../assets/images/StarLink/video_thumbnail_3.webp"
import thumbnail4 from "../../assets/images/StarLink/video_thumbnail_4.webp"

const videoList = [
    {
        id: 1,
        title: 'WHAT IS STARLINK?',
        description: 'High-speed internet, available almost anywhere on Earth.',
        thumbnail: thumbnail,
        videoSrc: video,
    },
    {
        id: 2,
        title: 'OBSTRUCTIONS',
        description: 'Set up Starlink with a clear view of sky.',
        thumbnail: thumbnail1,
        videoSrc: video1,
    },
    {
        id: 3,
        title: 'QUICK START FOR MINI',
        description: 'Get online in minutes.',
        thumbnail: thumbnail2,
        videoSrc: video2,
    },
    {
        id: 4,
        title: 'PERMANENT INSTALLATION FOR STANDARD',
        description: 'Learn how to install Starlink for best performance.',
        thumbnail: thumbnail3,
        videoSrc: video3,
    },
    {
        id: 2,
        title: 'OBSTRUCTIONS',
        description: 'Set up Starlink with a clear view of sky.',
        thumbnail: thumbnail4,
        videoSrc: video4,
    },
];

const Starlink = () => {
    const [opened, setOpened] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(videoList[0]);


    return (
        <Box bg={"#000"}>
            {/* image 1 */}
            <Box
                style={{
                    backgroundImage: `url(${starLinkBgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    position: 'relative',
                    color: '#fff',
                    paddingTop: '60px',
                    marginTop: '-60px'
                }}
            >

                <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)"
                    opacity={0.9}
                    zIndex={1}
                />

                <Container size="lg" style={{ height: '100%', position: 'relative', zIndex: 2 }}>
                    <Center style={{ minHeight: '100vh' }}>
                        <Stack spacing="xl" align="center">
                            <Title order={1} ta="center" fz={{ base: 40, md: 60 }} sx={{ fontSize: "75px" }}>
                                HIGH-SPEED INTERNET <br />
                                AROUND THE WORLD
                            </Title>
                            <Text ta="center" fz="lg" sx={{ fontSize: "25px" }}>
                                Connect at home or on the go<br />
                                See <strong>speeds</strong> in your country
                            </Text>

                            <Button
                                variant="subtle"
                                color="dark"
                                size="md"
                                fw={500}
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    color: '#fff',
                                    fontSize: '16px',
                                    '&:hover': {
                                        color: '#000',
                                    },
                                }}
                                onClick={() => setOpened(true)}
                            >
                                WATCH NOW
                                <span style={{ paddingLeft: '10px' }}>
                                    <MediaIcon />
                                </span>
                            </Button>

                            <Group mt="xl" grow>

                                <Paper
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        borderRadius: '8px',
                                        border: '1px solid hsla(0, 0%, 100%, 0.12)',
                                        WebkitBackdropFilter: 'blur(4px)',
                                        backdropFilter: 'blur(4px)',
                                        padding: '24px',
                                        width: '100%',
                                        minHeight: '200px'
                                    }}
                                    withBorder
                                >
                                    <Stack>
                                        <Title order={3} c={"#fff"} sx={{ fontSize: '28px', fontWeight: 500 }}>RESIDENTIAL</Title>
                                        <Text size="md" c={"#fff"} sx={{ fontSize: '16px', fontWeight: 500 }}>Connect at home</Text>
                                        <Group mt={'xl'}>
                                            <Button color="dark" variant="white" fw={500}>ORDER NOW</Button>
                                            <Button color="gray" variant="outline" fw={500} sx={{ color: '#fff' }}>LEARN MORE</Button>
                                        </Group>
                                    </Stack>
                                </Paper>


                                <Paper
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        borderRadius: '8px',
                                        border: '1px solid hsla(0, 0%, 100%, 0.12)',
                                        WebkitBackdropFilter: 'blur(4px)',
                                        backdropFilter: 'blur(4px)',
                                        padding: '24px',
                                        width: '100%',
                                        minHeight: '200px',
                                    }}
                                    withBorder
                                >
                                    <Stack>
                                        <Title order={3} c={"#fff"} sx={{ fontSize: '28px', fontWeight: 500 }}>ROAM</Title>
                                        <Text size="md" c={"#fff"} sx={{ fontSize: '16px', fontWeight: 500 }}>
                                            Connect while traveling anywhere in over 100 markets
                                        </Text>
                                        <Group>
                                            <Button color="dark" variant="white" fw={500}>ORDER NOW</Button>
                                            <Button color="gray" variant="outline" fw={500} sx={{ color: '#fff' }}>LEARN MORE</Button>
                                        </Group>
                                    </Stack>
                                </Paper>
                            </Group>
                        </Stack>
                    </Center>
                </Container>
            </Box>
            <Container size="xl">
                <Stack spacing="xl" align="center">

                    {/* Image 2 */}

                    <Box w="100vw" style={{ position: 'relative' }}>
                        <Image
                            src={starLinkBgImg2}
                            alt="Connectivity Where You Least Expect It"
                            style={{
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                        <Box
                            style={{
                                position: 'absolute',
                                top: '30%',
                                left: '5%',
                                transform: 'translateY(-50%)',
                                color: '#fff',
                                maxWidth: '550px',
                                padding: '20px'
                            }}
                        >
                            <Title order={2} style={{ color: '#fff', fontSize: '36px', marginBottom: '20px' }}>
                                CONNECTIVITY WHERE YOU <br /> LEAST EXPECT IT
                            </Title>
                            <Text style={{ color: '#fff', fontSize: '18px', lineHeight: 1.6 }}>
                                Streaming, video calls, online gaming, remote working and more are now possible in even the most remote
                                locations thanks to the world’s most advanced internet system.
                            </Text>
                        </Box>
                    </Box>

                    {/* image3 */}

                    <Box w="100vw" p={50}>
                        <Grid gutter="xl" align="center">
                            <Grid.Col span={12} md={6} px={50}>
                                <Box style={{ position: 'relative', cursor: "pointer" }} onClick={() => setOpened(true)}>
                                    <Image
                                        src={starLinkBgImg3}
                                        alt="Starlink Setup"
                                        radius="md"
                                        style={{
                                            width: '100%',
                                            borderRadius: '16px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                                        }}
                                    />

                                    <Box
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '2px solid #fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <span style={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: '20px solid #fff',
                                            borderTop: '12px solid transparent',
                                            borderBottom: '12px solid transparent',
                                            marginLeft: '5px'
                                        }} />
                                    </Box>
                                </Box>
                            </Grid.Col>

                            <Grid.Col span={12} md={6} p={'xl'} style={{
                                flex: 1,
                                position: 'relative',
                                cursor: 'pointer',
                                backgroundImage: `url(${starLinkBgImg5})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '16px',
                                padding: '50px',
                                color: '#fff',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: "100vh"
                            }}>
                                <Title order={2} c="#fff" fw={500} fz={{ base: 28, md: 40 }} mb="xl">
                                    GET ONLINE IN MINUTES
                                </Title>
                                <Text c="#ccc" mb="md" fz="lg">
                                    Set up Starlink with just two steps. Instructions work in either order:
                                </Text>

                                <ol style={{ marginTop: "8px", paddingLeft: "50px" }}>
                                    <li><Text c="#fff" fz="md" fw={500} mb="sm">
                                        PLUG IT IN
                                    </Text></li>
                                    <li><Text c="#fff" fz="md" fw={500}>
                                        POINT AT SKY
                                    </Text></li>
                                </ol>

                                <Text c="#ccc" fz="md" mt={'xl'} mb="xl">
                                    Starlink requires an unobstructed view of the sky. Download the Starlink app to determine your best install location.
                                </Text>

                                <Group>
                                    <Button variant="outline" color="gray" fz="sm" fw={500} style={{ color: '#fff' }}>
                                        DOWNLOAD FOR ANDROID
                                    </Button>
                                    <Button variant="outline" color="gray" fz="sm" fw={500} style={{ color: '#fff' }}>
                                        DOWNLOAD FOR IOS
                                    </Button>
                                </Group>
                            </Grid.Col>
                        </Grid>
                    </Box>

                    {/* image4 */}

                    <Box w="100vw" p={50}>
                        <Grid gutter="xl" align="stretch">
                            <Grid.Col span={12} md={6} style={{ display: 'flex' }}>
                                <Box
                                    style={{
                                        flex: 1,
                                        position: 'relative',
                                        cursor: 'pointer',
                                        backgroundImage: `url(${starLinkBgImg5})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        borderRadius: '16px',
                                        padding: '50px',
                                        color: '#fff',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Title order={2} fz={{ base: 28, md: 40 }} mb="xl">
                                        Flexible Service Plans
                                    </Title>
                                    <Text c="#ccc" mb="md" fz="lg">
                                        Starlink offers flexible service plans everywhere. Check availability by entering your address here.
                                    </Text>
                                </Box>
                            </Grid.Col>

                            <Grid.Col span={12} md={6} p="xl" style={{ display: 'flex' }}>
                                <Image
                                    src={starLinkBgImg1}
                                    alt="Starlink Setup"
                                    radius="md"
                                    style={{
                                        flex: 1,
                                        width: '100%',
                                        borderRadius: '16px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Grid.Col>
                        </Grid>
                    </Box>

                    {/* image5 */}

                    <Box
                        w="100vw"
                        style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        }}
                    >
                        <Image
                            src={starLinkBgImg4}
                            alt="Flexible Service Plans"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />

                        <Box
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                padding: '60px',
                                height: '100%',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                            }}
                        >
                            <Title order={2} c="white" fz={{ base: 36, md: 60 }} mb="lg">
                                Flexible Service Plans
                            </Title>

                            <Text c="#ccc" fz="lg" mb="xl" maw={500}>
                                Starlink offers flexible service plans everywhere. Check availability by entering your address here.
                            </Text>

                            <Button
                                variant="outline"
                                color="gray"
                                size="lg"
                                radius="md"
                                fw={500}
                                style={{ maxWidth: '200px', fontSize: "18px", color: "#fff" }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Box>

                    {/* Vido Guid */}

                    <Box bg="black" w="100vw" p={50}>
                        <Title order={1} c="white" ta="center" fz={"51px"}>
                            VIDEO GUIDES
                        </Title>
                        <Text size={'lg'} c="white" ta="center" mb="xl" fz={"25px"}>
                            Watch the videos to learn more about your Starlink
                        </Text>

                        <Grid gutter="xl" sx={{ marginTop: "100px" }}>
                            <Grid.Col span={12} md={8}>
                                <Box
                                    style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    <video
                                        src={selectedVideo.videoSrc}
                                        poster={selectedVideo.thumbnail}
                                        controls
                                        autoPlay
                                        style={{ width: '100%', borderRadius: '12px', height: "100%", maxHeight: "480px" }}
                                    />
                                </Box>
                            </Grid.Col>

                            <Grid.Col span={12} md={4}>
                                <ScrollArea h={500}>
                                    <Stack spacing="lg">
                                        {videoList.map((video) => (
                                            <Box
                                                key={video.id}
                                                style={{
                                                    display: 'flex',
                                                    gap: '16px',
                                                    padding: '12px',
                                                    borderRadius: '8px',
                                                    backgroundColor: video.id === selectedVideo.id ? '#333' : 'transparent',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() => setSelectedVideo(video)}
                                            >
                                                <Image
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    width={120}
                                                    radius="md"
                                                    style={{ flexShrink: 0 }}
                                                />
                                                <Box>
                                                    <Text c="white" fw={700}>
                                                        {video.title}
                                                    </Text>
                                                    <Text c="gray" fz="sm">
                                                        {video.description}
                                                    </Text>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>
                                </ScrollArea>
                            </Grid.Col>
                        </Grid>
                    </Box>

                </Stack>
            </Container>

            <GlobalDialog
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton
                size="100%"
                bg={"#000"}
                radius="lg"
                sx={{ height: "85vh", width: "100vw" }}
            >
                <video
                    src={video}
                    controls
                    autoPlay
                    muted
                    loop
                    style={{
                        width: "100%",
                        height: "100%",
                        paddingTop: "20px"
                    }}
                />
            </GlobalDialog>
        </Box >
    );
};

export default Starlink;
