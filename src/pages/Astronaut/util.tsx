import { Box, Skeleton } from '@mantine/core';
import { SkeletonCardGridProps } from './type';


const SkeletonCardGrid = ({ count = 6, cardHeight = 350 }: SkeletonCardGridProps) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <Box key={index}>
                    <Skeleton height={cardHeight} radius="md" mb="sm" />
                    <Skeleton height={20} width="60%" radius="sm" mb="xs" />
                    <Skeleton height={14} width="80%" radius="sm" />
                </Box>
            ))}
        </>
    );
};

export default SkeletonCardGrid;
