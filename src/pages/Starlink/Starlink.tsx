import {
    Container,
    Title,
    Text,
    Group,
    Paper,
    Stack,
    Center,
    Button,
    Box,
    Overlay,
    Image,
    Grid,
    ScrollArea,
} from "@mantine/core";
import starLinkBgImg1 from "../../assets/images/StarLink/2.webp";
import starLinkBgImg2 from "../../assets/images/StarLink/3.webp";
import starLinkBgImg3 from "../../assets/images/StarLink/4.webp";
import starLinkBgImg4 from "../../assets/images/StarLink/5.webp";
import { MediaIcon } from "../../assets/svg/SvgIcon";
import GlobalDialog from "../../components/Dialog/GlobalDialog";
import video from "../../assets/video/1.mp4";
import { videoList } from "../../utils/startLinkVideoList";
import { useStartLink } from "./useStartLinkHook";
import * as style from "./style";



const Starlink = () => {
    const { opened, setOpened, planCards, downloadButtons, selectedVideo, setSelectedVideo } = useStartLink();

    return (
        <Box bg="#000">
            {/* Section 1 */}
            <Box style={style.StarLinkSection1BoxStyle}>
                <Overlay
                    gradient="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)"
                    opacity={0.9}
                    zIndex={1}
                />

                <Container size="lg" style={style.Section1ContainerStyle}>
                    <Center style={style.Section1CenterStyle}>
                        <Stack spacing="xl" align="center">
                            <Title
                                order={1}
                                ta="center"
                                fz={{ base: 40, md: 60 }}
                                style={style.Section1TitleStyle}
                            >
                                HIGH-SPEED INTERNET <br /> AROUND THE WORLD
                            </Title>
                            <Text ta="center" fz="25px">
                                Connect at home or on the go
                                <br />
                                See <strong>speeds</strong> in your country
                            </Text>

                            <Button
                                variant="subtle"
                                color="dark"
                                size="md"
                                fw={500}
                                sx={style.Section1ButtonStyle}
                                onClick={() => setOpened(true)}
                            >
                                WATCH NOW
                                <span style={{ paddingLeft: "10px" }}>
                                    <MediaIcon />
                                </span>
                            </Button>

                            <Group mt="xl" grow>
                                {planCards.map((plan) => (
                                    <Paper
                                        withBorder
                                        style={style.Section1PaperStyle}
                                        key={plan.title}
                                    >
                                        <Stack>
                                            <Title order={3} c="#fff" fz="28px" fw={500}>
                                                {plan.title}
                                            </Title>
                                            <Text size="md" c="#fff" fz="16px" fw={500}>
                                                {plan.description}
                                            </Text>
                                            <Group mt="xl">
                                                <Button color="dark" variant="white" fw={500}>
                                                    ORDER NOW
                                                </Button>
                                                <Button
                                                    color="gray"
                                                    variant="outline"
                                                    fw={500}
                                                    style={style.StarLinkButtonStyle}
                                                >
                                                    LEARN MORE
                                                </Button>
                                            </Group>
                                        </Stack>
                                    </Paper>
                                ))}
                            </Group>
                        </Stack>
                    </Center>
                </Container>
            </Box>

            <Container size="xl">
                <Stack spacing="xl" align="center">
                    {/* Section 2 */}
                    <Box w="100vw" pos="relative">
                        <Image
                            src={starLinkBgImg2}
                            alt="Connectivity Where You Least Expect It"
                            style={style.Section2ImageStyle}
                        />
                        <Box style={style.Section2BoxStyle}>
                            <Title order={2} c="#fff" fz="36px" mb="20px">
                                CONNECTIVITY WHERE YOU <br /> LEAST EXPECT IT
                            </Title>
                            <Text c="#fff" fz="18px" lh={1.6}>
                                Streaming, video calls, online gaming, remote working and more
                                are now possible in even the most remote locations thanks to the
                                world’s most advanced internet system.
                            </Text>
                        </Box>
                    </Box>

                    {/* Section 3 */}
                    <Box w="100vw" p={50}>
                        <Grid gutter="xl" align="center">
                            <Grid.Col span={12} md={6} px={50}>
                                <Box
                                    style={style.Section3BoxStyle}
                                    onClick={() => setOpened(true)}
                                >
                                    <Image
                                        src={starLinkBgImg3}
                                        alt="Starlink Setup"
                                        radius="md"
                                        style={style.Section3ImageStyle}
                                    />
                                    <Box style={style.Section3ChildBoxStyle}>
                                        <span style={style.Section3SpanStyle} />
                                    </Box>
                                </Box>
                            </Grid.Col>

                            <Grid.Col
                                span={12}
                                md={6}
                                p="xl"
                                style={style.Section3GridColStyle}
                            >
                                <Title
                                    order={2}
                                    c="#fff"
                                    fw={500}
                                    fz={{ base: 28, md: 40 }}
                                    mb="xl"
                                >
                                    GET ONLINE IN MINUTES
                                </Title>
                                <Text c="#ccc" mb="md" fz="lg">
                                    Set up Starlink with just two steps. Instructions work in
                                    either order:
                                </Text>
                                <ol style={style.Section3OlStyle}>
                                    <li>
                                        <Text c="#fff" fz="md" fw={500} mb="sm">
                                            PLUG IT IN
                                        </Text>
                                    </li>
                                    <li>
                                        <Text c="#fff" fz="md" fw={500}>
                                            POINT AT SKY
                                        </Text>
                                    </li>
                                </ol>
                                <Text c="#ccc" fz="md" mt="xl" mb="xl">
                                    Starlink requires an unobstructed view of the sky. Download
                                    the Starlink app to determine your best install location.
                                </Text>
                                <Group>
                                    {downloadButtons.map((btn) => (
                                        <Button
                                            key={btn.label}
                                            variant="outline"
                                            color="gray"
                                            fz="sm"
                                            fw={500}
                                            style={style.StarLinkButtonStyle}
                                        >
                                            {btn.label}
                                        </Button>
                                    ))}
                                </Group>
                            </Grid.Col>
                        </Grid>
                    </Box>

                    {/* Section 4 */}
                    <Box w="100vw" p={50}>
                        <Grid gutter="xl" align="stretch">
                            <Grid.Col span={12} md={6} display="flex">
                                <Box style={style.Section4BoxStyle}>
                                    <Title order={2} fz={{ base: 28, md: 40 }} mb="xl">
                                        Flexible Service Plans
                                    </Title>
                                    <Text c="#ccc" mb="md" fz="lg">
                                        Starlink offers flexible service plans everywhere. Check
                                        availability by entering your address here.
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col span={12} md={6} p="xl" display="flex">
                                <Image
                                    src={starLinkBgImg1}
                                    alt="Starlink Setup"
                                    radius="md"
                                    style={style.Section3ImageStyle}
                                />
                            </Grid.Col>
                        </Grid>
                    </Box>

                    {/* Section 5 */}
                    <Box style={style.Section5BoxStyle}>
                        <Image
                            src={starLinkBgImg4}
                            alt="Flexible Service Plans"
                            style={style.Section5ImageStyle}
                        />
                        <Box style={style.Section5ChildBoxStyle}>
                            <Title order={2} c="white" fz={{ base: 36, md: 60 }} mb="lg">
                                Flexible Service Plans
                            </Title>
                            <Text c="#ccc" fz="lg" mb="xl" maw={500}>
                                Starlink offers flexible service plans everywhere. Check
                                availability by entering your address here.
                            </Text>
                            <Button
                                variant="outline"
                                color="gray"
                                size="lg"
                                radius="md"
                                fw={500}
                                style={style.Section5ButtonStyle}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Box>

                    {/* Video Guide Section */}
                    <Box bg="black" w="100vw" p={50}>
                        <Title order={1} c="white" ta="center" fz="51px">
                            VIDEO GUIDES
                        </Title>
                        <Text size="lg" c="white" ta="center" mb="xl" fz="25px">
                            Watch the videos to learn more about your Starlink
                        </Text>
                        <Grid gutter="xl" mt={100}>
                            <Grid.Col span={12} md={8}>
                                <Box style={style.VideoSectionBoxStyle}>
                                    <video
                                        src={selectedVideo.videoSrc}
                                        poster={selectedVideo.thumbnail}
                                        controls
                                        autoPlay
                                        style={style.VideoSectionVideoStyle}
                                    />
                                </Box>
                            </Grid.Col>
                            <Grid.Col span={12} md={4}>
                                <ScrollArea h={500}>
                                    <Stack spacing="lg">
                                        {videoList.map((video) => (
                                            <Box
                                                key={video.id}
                                                style={style.VideoSectionChildBoxStyle(
                                                    video,
                                                    selectedVideo
                                                )}
                                                onClick={() => setSelectedVideo(video)}
                                            >
                                                <Image
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    width={120}
                                                    radius="md"
                                                    style={style.VideoSectionThumbnail}
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
                bg="#000"
                radius="lg"
                style={style.GlobalDialogStyle}
            >
                <video
                    src={video}
                    controls
                    autoPlay
                    muted
                    loop
                    style={style.GlobalDialogVideoStyle}
                />
            </GlobalDialog>
        </Box>
    );
};

export default Starlink;
