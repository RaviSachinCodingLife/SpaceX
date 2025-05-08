import { Box, Divider, Text } from '@mantine/core';
import * as style from "./style"

const Footer = () => {
  return (
    <Box
      style={style.FooterBox}
    >
      <Text size="sm" c="gray.5" fz={"12px"}>
        SpaceX © 2025
      </Text>
      <Divider orientation="vertical" size="sm" />
      <Text size="sm" c="#fff" fz={"12px"}>
        PRIVACY
      </Text>
      <Divider orientation="vertical" size="sm" />
      <Text size="sm" c="#fff" fz={"12px"}>
        POLICY SUPPLIERS
      </Text>
    </Box >
  );
};

export default Footer;
