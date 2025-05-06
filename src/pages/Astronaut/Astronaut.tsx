import { Box, Loader, SimpleGrid, Text, Skeleton } from '@mantine/core';
import React from 'react';
import { useAstronaut } from '../../hooks/useAstronaut';
import { useNavigate } from 'react-router-dom';
import LaunchCard from '../../components/card/LaunchCard';

const Astronaut = () => {
    const { data, isLoading } = useAstronaut();
    const { data: imagesData, isLoading: isImagesLoading, error: imagesError } = useAstronaut("astronaut");

    const getShortDescription = (text: string, wordLimit: number = 10) => {
        if (!text) return "No description available.";
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    const getShortDescription1 = (text: string, wordLimit: number = 2) => {
        if (!text) return "No description available.";
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") : text;
    };

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
            <Text align="center" size="xl" weight={700} mb="xl">
                Astronauts in Star Wars
            </Text>

            <SimpleGrid
                cols={3}
                spacing="15px"
                breakpoints={[
                    { maxWidth: 'lg', cols: 3 },
                    { maxWidth: 'md', cols: 2 },
                    { maxWidth: 'sm', cols: 1 },
                ]}
            >
                {(isLoading || isImagesLoading)
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <Box key={index}>
                            <Skeleton height={350} radius="md" mb="sm" />
                            <Skeleton height={20} width="60%" radius="sm" mb="xs" />
                            <Skeleton height={14} width="80%" radius="sm" />
                        </Box>
                    ))
                    : data?.results.map((person: any, index: number) => {
                        const astronautImage = imagesData?.results[index]?.urls?.regular
                            || `https://placehold.co/250x350?text=${encodeURIComponent(person.name)}`;

                        return (
                            <LaunchCard
                                key={index}
                                id={person.id}
                                name={getShortDescription1(person.alt_description)}
                                date={getShortDescription(person.description)}
                                image={astronautImage}
                                imageFit='cover'
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                link={`/astronaut/${person.id}`}
                            />
                        );
                    })}
            </SimpleGrid>
        </Box>
    );
};

export default Astronaut;
