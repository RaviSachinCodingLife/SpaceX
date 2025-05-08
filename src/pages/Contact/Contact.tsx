import React, { FC, FormEvent } from "react";
import {
    Container,
    Grid,
    Col,
    TextInput,
    Textarea,
    Button,
    Text,
    Image,
    Box,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { CrossIcon, TickIcon } from "../../assets/svg/SvgIcon";
import contactImg from "../../assets/images/contact-img.svg";
import { EmailFormDetails, sendEmail } from "../../config/Email";
import * as inputStyle from "../Auth/style";
import * as boxStyle from "../Astronaut/style";
import * as style from "./style";
import { useContact } from "./useContactHook";

export const Contact: FC = () => {
    const {
        formDetails,
        setButtonText,
        buttonText,
        phoneValidation,
        onFormUpdate,
        formFields,
        setFormDetails,
        formInitialDetails,
    } = useContact();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText("Sending...");

        if (!phoneValidation(formDetails.phone)) {
            showNotification({
                title: "Invalid phone number",
                message: "Please enter a valid phone number (1–10 digits).",
                color: "red",
                icon: <CrossIcon />,
            });
            setButtonText("Send");
            return;
        }

        const emailDetail: EmailFormDetails = { ...formDetails };

        try {
            await sendEmail(emailDetail);
            console.log("✅ Email sent:", { emailDetail });
            setFormDetails(formInitialDetails);
            showNotification({
                title: "Success",
                message: "Your message has been sent!",
                color: "green",
                icon: <TickIcon />,
            });
        } catch (error) {
            showNotification({
                title: "Error",
                message: "There was an error sending the email. Please try again later.",
                color: "red",
                icon: <CrossIcon />,
            });
        }

        setButtonText("Send");
    };

    const renderInputField = (field: typeof formFields[number]) => {
        const commonProps = {
            required: true,
            value: formDetails[field.name],
            placeholder: field.placeholder,
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                onFormUpdate(field.name, e.target.value),
            styles: {
                label: { ...inputStyle.textFieldLabelStyle },
                input: { ...inputStyle.textFieldInputStyle },
            },
        };

        if (field.type === "textarea") {
            return (
                <Col span={12} key={field.name}>
                    <Textarea {...commonProps} rows={6} mb="md" />
                </Col>
            );
        }

        return (
            <Col span={12} md={6} key={field.name}>
                <TextInput {...commonProps} type={field.type} mb="sm" />
            </Col>
        );
    };

    return (
        <Box style={boxStyle.BoxStyle}>
            <Container size="xl" w="100%" style={style.ContactContainerStyle}>
                <Grid align="center">
                    <Col span={12} md={6}>
                        <Image src={contactImg} alt="Contact Us" radius="md" />
                    </Col>
                    <Col span={12} md={6} display="flex" style={style.ConatctColStyle}>
                        <Text size="xl" weight={700}>
                            Get In Touch
                        </Text>
                        <Text size="sm">
                            If you have any questions or concerns, please don't hesitate to
                            contact me. I am open to any work opportunities that align with my
                            skills and interests.
                        </Text>
                        <form onSubmit={handleSubmit}>
                            <Grid gutter="md">
                                {formFields.map(renderInputField)}
                                <Col span={12}>
                                    <Button
                                        type="submit"
                                        variant="outline"
                                        color="gray"
                                        radius="md"
                                        size="sm"
                                        fullWidth
                                        style={style.ConatctButtonStyle}
                                    >
                                        {buttonText}
                                    </Button>
                                </Col>
                            </Grid>
                        </form>
                    </Col>
                </Grid>
            </Container>
        </Box>
    );
};
