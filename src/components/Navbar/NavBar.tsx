import { AppShell, Burger, Box, Group, Anchor, Image, rem, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/space-x-logo-white.png';

function Navbar() {
    const navigate = useNavigate()
    const [opened, { toggle, close }] = useDisclosure();
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const navLinks = [
        'Launches',
        'STARLINK',
    ];

    const headerHeight = rem(60);

    return (
        <AppShell
            padding="md"
            style={{
                height: "100vh", overflowY: "auto",
                overflowX: "hidden"
            }}
            header={
                <Box
                    px="lg"
                    h={headerHeight}
                    style={{
                        position: "sticky",
                        top: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(8px)",
                        zIndex: 1000,
                    }}
                >
                    <Group>
                        {!isDesktop && (
                            <Burger opened={opened} onClick={toggle} size="sm" color="white" />
                        )}
                        {isDesktop && (
                            <Group style={{ gap: rem(16) }}>
                                <Image
                                    src={logo}
                                    alt="SpaceX"
                                    width={210}
                                    height={26.5}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate("/home")}
                                />
                                {navLinks.map((link) => (
                                    <Anchor
                                        key={link}
                                        component={Link}
                                        to={`/${link.toLowerCase().replace(/\s/g, '-')}`}
                                        c="white"
                                        fz="sm"
                                        fw={700}
                                        tt="uppercase"
                                        underline={false}
                                        style={{ textDecoration: 'none' }}
                                        onMouseOver={(e) => (e.currentTarget.style.color = '#999')}
                                        onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}
                                    >
                                        {link}
                                    </Anchor>
                                ))}
                            </Group>
                        )}
                    </Group>

                    <Group>
                        <Anchor
                            component={Link}
                            to="/shop"
                            c="white"
                            fz="sm"
                            fw={700}
                            tt="uppercase"
                            underline={false}
                            style={{ textDecoration: 'none' }}
                            onMouseOver={(e) => (e.currentTarget.style.color = '#999')}
                            onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}
                        >
                            SHOP
                        </Anchor>
                    </Group>

                    <Drawer
                        opened={opened}
                        onClose={close}
                        padding="md"
                        size="75%"
                        overlayProps={{ opacity: 0.55, blur: 3 }}
                    >
                        <ScrollArea>
                            <Box py="md">
                                {navLinks.map((link) => (
                                    <Box key={link} mb="md">
                                        <Anchor
                                            component={Link}
                                            to={`/${link.toLowerCase().replace(/\s/g, '-')}`}
                                            c="black"
                                            fz="lg"
                                            fw={700}
                                            onClick={close}
                                        >
                                            {link}
                                        </Anchor>
                                    </Box>
                                ))}
                            </Box>
                        </ScrollArea>
                    </Drawer>
                </Box>
            }
        >
            <Outlet />
        </AppShell>
    );
}

export default Navbar;
