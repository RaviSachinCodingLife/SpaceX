import {
    Paper,
    Title,
    TextInput,
    Text,
    Box,
    Button,
    Divider,
    Group,
    Select,
    Stack,
    Alert,
} from '@mantine/core';
import { Dispatch, useEffect, useState } from 'react';
import { InfoIcon } from '../../../assets/svg/SvgIcon';
import { FormData } from '../Checkout';
import * as inputstyle from "../../../components/Auth/style"

const Information = ({ form, setForm, username }: {
    form: FormData;
    setForm: Dispatch<React.SetStateAction<FormData>>;
    username: string
}) => {
    const [isValidForm, setIsValidForm] = useState(false);


    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const validateForm = () => {
        const newErrors: Record<string, boolean> = {};
        Object.entries(form).forEach(([key, value]) => {
            if (typeof value === "string" && !value.trim()) {
                newErrors[key] = true;
            }
        });
        return Object.keys(newErrors).length === 0;
    };


    useEffect(() => {
        const valid = validateForm();
        setIsValidForm(valid);
    }, [form]);

    return (
        <Stack spacing="md">
            <Box>
                <Text color="gray" size="sm">
                    Due to constraints from our carriers because of current events,
                    shipments may be delayed and stock may be limited.
                </Text>
            </Box>

            <Divider />

            <Box>
                <Title order={4} mb="xs">
                    Contact
                </Title>
                <Text size="sm" color="gray" sx={{ textTransform: "capitalize" }}>
                    {username}
                </Text>
            </Box>

            <Divider />

            <Box>
                <Title order={4} mb="xs">
                    Shipping address
                </Title>

                {!isValidForm && (

                    <Alert variant="outline" color="red" title="Alert title" icon={<InfoIcon />}>
                        We are unable to ship to a PO box. Please note that if you enter a PO box, your order will be canceled.
                    </Alert>

                )}

                <TextInput
                    label="Full name"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    mb="sm"
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                />

                <TextInput
                    label="Address"
                    placeholder="123 Main St"
                    value={form.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    mb="sm"
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                />

                <TextInput
                    label="City"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    mb="sm"
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                />

                <Group grow>
                    <TextInput
                        label="State"
                        placeholder="State"
                        value={form.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                        styles={{
                            label: { ...inputstyle.textFieldLabelStyle },
                            input: {
                                ...inputstyle.textFieldInputStyle,
                                borderRadius: "10px !important",
                            },
                        }}
                    />
                    <TextInput
                        label="ZIP Code"
                        placeholder="ZIP"
                        value={form.zip}
                        onChange={(e) => handleChange('zip', e.target.value)}
                        styles={{
                            label: { ...inputstyle.textFieldLabelStyle },
                            input: {
                                ...inputstyle.textFieldInputStyle,
                                borderRadius: "10px !important",
                            },
                        }}
                    />
                </Group>

                <Select
                    label="Country"
                    placeholder="Select"
                    data={['United States', 'Canada', 'India']}
                    value={form.country}
                    onChange={(value) => handleChange('country', value || '')}
                    mt="sm"
                    styles={{
                        label: { ...inputstyle.textFieldLabelStyle },
                        input: {
                            ...inputstyle.textFieldInputStyle,
                            borderRadius: "10px !important",
                        },
                    }}
                />
            </Box>
        </Stack>
    );
};

export default Information;
