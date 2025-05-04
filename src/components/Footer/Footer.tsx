import { Box, Divider, Text } from '@mantine/core';

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px 0",
        backgroundColor: "#000"
      }}
    >
      <Text size="sm" c="gray.5" sx={{ fontSize: "12px" }}>
        SpaceX © 2025
      </Text>
      <Divider orientation="vertical" size="sm" />
      <Text size="sm" c="#fff" sx={{ fontSize: "12px" }}>
        PRIVACY
      </Text>
      <Divider orientation="vertical" size="sm" />
      <Text size="sm" c="#fff" sx={{ fontSize: "12px" }}>
        POLICY SUPPLIERS
      </Text>
    </Box>
  );
};

export default Footer;
