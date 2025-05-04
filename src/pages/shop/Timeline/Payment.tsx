import {
    Paper,
    Title,
    Text,
    TextInput,
    Grid,
    Box,
    Group,
    Divider,
    Tooltip,
    Button,
    Alert,
} from '@mantine/core';
import { CreditCardIcon, InfoIcon, InfoQuestionIcon, LockIcon } from '../../../assets/svg/SvgIcon';
import * as inputstyle from "../../../components/Auth/style"
import { FormData } from '../Checkout';
import { useEffect, useState } from 'react';

const Payment = ({ form, username }: { form: FormData, username: string }) => {
    const contactEmail = username;
    const shippingAddress = `${form.address}, ${form.city}, ${form.state}, ${form.country}, ${form.zip}`;
    const shippingMethod = {
        name: 'Shipping - FedEx International Economy',
        price: '$34.02',
    };

    const [isValidForm, setIsValidForm] = useState(false);

    const [formState, setFormState] = useState({
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        cardName: form.fullName,
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        if (field === 'expirationDate') {
            value = value.replace(/\D/g, '');
            if (value.length >= 3) {
                value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
            }
        }

        setFormState(prev => ({ ...prev, [field]: value }));
    };

    const validateForm = () => {
        const newErrors: Record<string, boolean> = {};
        Object.entries(formState).forEach(([key, value]) => {
            if (typeof value === "string" && !value.trim()) {
                newErrors[key] = true;
            }
        });
        return Object.keys(newErrors).length === 0;
    };


    useEffect(() => {
        const valid = validateForm();
        setIsValidForm(valid);
    }, [formState]);

    return (
        <Box>
            <Paper withBorder radius="md" p="md">
                <Group position="apart" mb="xs">
                    <Text weight={500}>Contact</Text>
                    <Button variant="subtle" size="xs" compact>
                        Change
                    </Button>
                </Group>
                <Text size="sm" mb="md" color="dimmed" sx={{ textTransform: "capitalize" }}>
                    {contactEmail}
                </Text>

                <Divider mb="md" />

                <Group position="apart" mt="xs">
                    <Text weight={500}>Ship to</Text>
                    <Button variant="subtle" size="xs" compact>
                        Change
                    </Button>
                </Group>
                <Text size="sm" mt="xs" mb="md" color="dimmed">
                    {shippingAddress}
                </Text>

                <Divider mb="md" />

                <Group position="apart" mt="xs">
                    <Text size="sm" mt="xs" color="dimmed">{shippingMethod.name}</Text>
                    <Text size="sm" mt="xs" weight={600}>{shippingMethod.price}</Text>
                </Group>
            </Paper>

            <Title order={4} mb="xs" mt="xl">Payment</Title>
            <Text size="sm" color="dimmed" mb="md">All transactions are secure and encrypted.</Text>

            <Paper withBorder radius="md" p="md" style={{ border: '1px solid #ccc' }}>
                {!isValidForm && (
                    <Alert variant="outline" color="red" mb={'md'} mt={'md'} title="Alert title" icon={<InfoIcon />}>
                        We are unable to ship to a PO box. Please note that if you enter a PO box, your order will be canceled.
                    </Alert>
                )}

                <Group position="apart">
                    <Text weight={500}>Credit card</Text>
                    <Group spacing="xs">
                        <img src="https://img.icons8.com/color/32/visa.png" alt="visa" />
                        <img src="https://img.icons8.com/color/32/mastercard-logo.png" alt="mc" />
                        <img src="https://img.icons8.com/color/32/amex.png" alt="amex" />
                        <img src="https://img.icons8.com/color/32/discover.png" alt="discover" />
                        <Tooltip
                            label={
                                <Box style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
                                    <img src="https://img.icons8.com/color/32/visa.png" alt="visa" />
                                    <img src="https://img.icons8.com/color/32/mastercard-logo.png" alt="mc" />
                                    <img src="https://img.icons8.com/color/32/amex.png" alt="amex" />
                                    <img src="https://img.icons8.com/color/32/discover.png" alt="discover" />
                                </Box>
                            }
                            withArrow
                            styles={{
                                tooltip: {
                                    fontSize: '12px',
                                    padding: '4px 8px',
                                    whiteSpace: 'normal',
                                    width: '100px',
                                },
                            }}
                        >
                            <Text size="xs" color="dimmed">+4</Text>
                        </Tooltip>
                    </Group>
                </Group>

                <TextInput
                    placeholder="Card number"
                    value={formState.cardNumber}
                    onChange={handleChange('cardNumber')}
                    rightSection={<LockIcon />}
                    mt="lg"
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                />

                <Grid>
                    <Grid.Col span={6}>
                        <TextInput
                            placeholder="Expiration date (MM / YY)"
                            value={formState.expirationDate}
                            onChange={handleChange('expirationDate')}
                            mt="lg"
                            styles={{
                                label: { ...inputstyle.textFieldLabelStyle },
                                input: {
                                    ...inputstyle.textFieldInputStyle,
                                    borderRadius: "10px !important",
                                },
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput
                            placeholder="Security code"
                            value={formState.securityCode}
                            onChange={handleChange('securityCode')}
                            mt="lg"
                            rightSection={
                                <Tooltip
                                    label="3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front."
                                    withArrow
                                    styles={{
                                        tooltip: {
                                            fontSize: '12px',
                                            padding: '4px 8px',
                                            whiteSpace: 'normal',
                                            width: '150px',
                                        },
                                    }}
                                >
                                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        <InfoQuestionIcon />
                                    </span>
                                </Tooltip>
                            }
                            styles={{
                                label: { ...inputstyle.textFieldLabelStyle },
                                input: {
                                    ...inputstyle.textFieldInputStyle,
                                    borderRadius: "10px !important",
                                },
                            }}
                        />
                    </Grid.Col>
                </Grid>

                <TextInput
                    label="Name on card"
                    value={formState.cardName}
                    onChange={handleChange('cardName')}
                    mt="sm"
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                />
            </Paper>
        </Box>
    );
};

export default Payment;
