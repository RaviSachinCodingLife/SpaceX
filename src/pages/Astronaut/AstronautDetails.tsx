import { useNavigate, useParams } from "react-router-dom";
import { Box, Image, Text, Loader, Title, Container, Grid } from "@mantine/core";
import { useAstronautDetails } from "../../hooks/useAstronautDetails";
import { ArrowIcon } from "../../assets/svg/SvgIcon";

const AstronautDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useAstronautDetails(id);
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                minHeight: "100vh",
                paddingTop: "60px",
                marginTop: '-60px',
            }}
        >
            <Box
                px={"xl"}
                py={"md"}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                }}
                onClick={() => navigate("/astronaut")}
            >
                <ArrowIcon />
                <Text
                    size="sm"
                    c="gray.5"
                    sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "rotateZ(2deg) translateX(3px)",
                        },
                    }}
                >
                    BACK TO ASTRONAUT
                </Text>
            </Box>

            {isLoading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 'calc(100vh - 60px)',
                    }}
                >
                    <Loader size={40} />
                </Box>
            ) : (
                <Box>
                    <Image src={data.urls?.regular} alt={data.alt_description} width="100%"
                        height="700px" radius="md" style={{ padding: "40px", paddingTop: "10px", border: 0 }} />

                    <Container
                        size="xl"
                        px="md"
                        py="xl"
                        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                    >
                        <Text mt="md" c="gray" size="sm" fz={"20px"}>
                            {new Date(data.created_at).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </Text>
                        <Title order={3} mt={5} fz={"32px"}>
                            {data.user?.name}
                        </Title>

                        <Grid mt={"xl"}>
                            <Grid.Col span={6}>
                                <Text size="xl" c="gray.3" style={{ fontSize: "16px", textTransform: "capitalize" }}>
                                    {data.description || "No Description"}.
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Text size="md" c="gray.3" style={{ fontSize: "16px", textTransform: "capitalize" }}>
                                    Likes: {data.likes}.
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Box>
            )}
        </Box>
    );
};

export default AstronautDetails;
