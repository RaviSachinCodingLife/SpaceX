import { useNavigate, useParams } from "react-router-dom";
import { Box, Text, Container, Anchor, Grid } from "@mantine/core";
import { useHomeDetail } from "../../hooks/useHomeDetail";
import { ArrowIcon } from "../../assets/svg/SvgIcon";

const HomeDetail = () => {
    const { id } = useParams();
    const { data } = useHomeDetail(id as string);
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                minHeight: "100vh",
                paddingTop: "60px",
                marginTop: '-60px'
            }}
        >

            <Box px={"xl"} py={"md"} sx={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
            }} onClick={() => navigate("/home")}>
                <ArrowIcon />
                <Text size="sm" c="gray.5" sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "rotateZ(2deg) translateX(3px)",
                    },
                }}>
                    BACK TO LAUNCHES
                </Text>
            </Box>

            <video
                src={data?.video}
                controls
                autoPlay
                muted
                loop
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "40px",
                    paddingTop: "10px"
                }}
            />


            <Container size="xl" px="md" py="xl" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Text size="sm" c="gray.5" mb={8}>
                    {data?.date || "May 1, 2025"}
                </Text>

                <Text size="xl" c="gray.3" style={{ fontSize: "30px" }}>
                    {data?.title}
                </Text>

                <Grid mt={"xl"}>
                    <Grid.Col span={6}>
                        <Text size="xl" c="gray.3" style={{ fontSize: "16px" }}>
                            {data?.desc}
                        </Text>

                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="md" c="gray.3" style={{ fontSize: "16px" }}>
                            {data?.subDesc}
                        </Text></Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeDetail;
