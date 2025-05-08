import { Anchor, FileButton, Box, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import {
    ProfileUploadIcon,
    PhoneIcon,
    CareerIcon,
    LogoutIcon,
} from "../../assets/svg/SvgIcon";
import * as style from "./style";

const renderNavAnchor = (item: { label: string; path: string; isActive: boolean }) => (
    <Anchor
        key={item.label}
        component={Link}
        to={item.path}
        c="white"
        fz="sm"
        fw={600}
        tt="uppercase"
        underline={false}
        style={style.AppShellAnchorStyle(item.isActive)}
        onMouseOver={(e) => (e.currentTarget.style.color = "#999")}
        onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
    >
        {item.label}
    </Anchor>
);

const getMenuItems = ({
    setFile,
    navigate,
    logout,
}: {
    setFile: (file: File | null) => void;
    navigate: (path: string) => void;
    logout: () => void;
}) => [
        {
            key: "upload",
            icon: <ProfileUploadIcon />,
            customComponent: (
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => (
                        <Box component="span" {...props} style={style.AppShellAvtarStyle}>
                            <Text fz="sm" c="#000">
                                Upload Image
                            </Text>
                        </Box>
                    )}
                </FileButton>
            ),
            closeMenuOnClick: false,
        },
        {
            key: "contact",
            icon: <PhoneIcon />,
            label: "Contact Us",
            onClick: () => navigate("/contact"),
        },
        {
            key: "logout",
            icon: <LogoutIcon />,
            label: "Logout",
            onClick: () => {
                logout();
                navigate("/");
            },
        },
    ];

export { renderNavAnchor, getMenuItems };
