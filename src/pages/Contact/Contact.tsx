import React, { Fragment, useState } from 'react';
import { Container, Grid, Col, TextInput, Textarea, Button, Text, Image } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { CrossIcon, TickIcon } from '../../assets/svg/SvgIcon';
import contactImg from '../../assets/images/contact-img.svg';
import { EmailFormDetails, sendEmail } from '../../config/Email';

type FormField = 'firstName' | 'lastName' | 'email' | 'phone' | 'message';

const formInitialDetails: Record<FormField, string> = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
};

export const Contact: React.FC = () => {
    const [formDetails, setFormDetails] = useState<typeof formInitialDetails>(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');

    const formFields: { name: FormField; type: string; placeholder: string }[] = [
        { name: 'firstName', type: 'text', placeholder: 'First Name' },
        { name: 'lastName', type: 'text', placeholder: 'Last Name' },
        { name: 'email', type: 'email', placeholder: 'Email Address' },
        { name: 'phone', type: 'tel', placeholder: 'Phone No.' },
        { name: 'message', type: 'textarea', placeholder: 'Message' },
    ];

    const onFormUpdate = (category: FormField, value: string) => {
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [category]: value,
        }));
    };

    const phoneValidation = (phone: string) => /^[0-9]{1,10}$/.test(phone);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText('Sending...');

        if (!phoneValidation(formDetails.phone)) {
            showNotification({
                title: 'Invalid phone number',
                message: 'Please enter a valid phone number (1-10 digits).',
                color: 'red',
                icon: <CrossIcon />,
            });
            setButtonText('Send');
            return;
        }

        const emailDetail: EmailFormDetails = {
            firstName: formDetails.firstName,
            lastName: formDetails.lastName,
            phone: formDetails.phone,
            message: formDetails.message,
            email: formDetails.email
        };


        try {
            const result = await sendEmail(emailDetail);
            console.log('✅ Email send result:', { emailDetail });
            setFormDetails(formInitialDetails);
            showNotification({
                title: 'Success',
                message: 'Your message has been sent!',
                color: 'green',
                icon: <TickIcon />,
            });
        } catch (error) {
            showNotification({
                title: 'Error',
                message: 'There was an error sending the email. Please try again later.',
                color: 'red',
                icon: <CrossIcon />,
            });
        }

        setButtonText('Send');
    };

    return (
        <section id="connect" style={{ padding: '60px 0' }}>
            <Container>
                <Grid align="center">
                    <Col span={12} md={6}>
                        <Image src={contactImg} alt="Contact Us" radius="md" />
                    </Col>
                    <Col span={12} md={6}>
                        <Text size="xl" weight={700} mb="sm">
                            Get In Touch
                        </Text>
                        <Text size="sm" mb="md">
                            If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
                        </Text>
                        <form onSubmit={handleSubmit}>
                            <Grid gutter="md">
                                {formFields.map((field) => (
                                    <Fragment key={field.name}>
                                        {field.type === 'textarea' ? (
                                            <Col span={12}>
                                                <Textarea
                                                    required
                                                    rows={6}
                                                    value={formDetails[field.name]}
                                                    placeholder={field.placeholder}
                                                    onChange={(e) => onFormUpdate(field.name, e.target.value)}
                                                />
                                            </Col>
                                        ) : (
                                            <Col span={12} md={6}>
                                                <TextInput
                                                    required
                                                    type={field.type}
                                                    value={formDetails[field.name]}
                                                    placeholder={field.placeholder}
                                                    onChange={(e) => onFormUpdate(field.name, e.target.value)}
                                                />
                                            </Col>
                                        )}
                                    </Fragment>
                                ))}
                                <Col span={12}>
                                    <Button type="submit" fullWidth>
                                        {buttonText}
                                    </Button>
                                </Col>
                            </Grid>
                        </form>
                    </Col>
                </Grid>
            </Container>
        </section>
    );
};
