import { useParams } from "react-router-dom";
import { Box, Text, Image } from "@mantine/core";
import { useHomeDetail } from "../../hooks/useHomeDetail";

const HomeDetail = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useHomeDetail(id as string);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading detail</div>;

    return (
        <Box p="xl">
            <Image src={data.image} alt={data.title} />
            <Text size="lg" fw={700} mt="md">
                {data.title}
            </Text>
            <Text>{data.subtitle}</Text>
        </Box>
    );
};

export default HomeDetail;
