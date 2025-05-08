import {
    TextInput,
    Text,
    Box,
    Divider,
    Group,
    Select,
    Stack,
    Alert,
    Title,
} from '@mantine/core';
import { InfoIcon } from '../../../assets/svg/SvgIcon';
import * as inputstyle from '../../Auth/style';
import { FormData } from '../type';
import { InformationProps } from './type';
import { useInformation } from './useTimelineHook';

const Information = ({ form, setForm, username }: InformationProps) => {

    const { isValidForm, handleChange } = useInformation(form, setForm)
    const textInputFields = [
        { label: 'Full name', placeholder: 'Enter full name', key: 'fullName' },
        { label: 'Address', placeholder: 'Enter address', key: 'address' },
        { label: 'City', placeholder: 'Enter city', key: 'city' },
    ];

    const sideBySideFields = [
        { label: 'State', placeholder: 'State', key: 'state' },
        { label: 'ZIP Code', placeholder: 'ZIP', key: 'zip' },
    ];

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
                <Text size="sm" color="gray" tt="capitalize">
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

                {textInputFields.map(({ label, placeholder, key }) => (
                    <TextInput
                        key={key}
                        label={label}
                        placeholder={placeholder}
                        value={form[key as keyof FormData]}
                        onChange={(e) => handleChange(key, e.target.value)}
                        mb="sm"
                        styles={{
                            label: { ...inputstyle.textFieldLabelStyle },
                            input: {
                                ...inputstyle.textFieldInputStyle,
                                borderRadius: '10px !important',
                            },
                        }}
                    />
                ))}

                <Group grow>
                    {sideBySideFields.map(({ label, placeholder, key }) => (
                        <TextInput
                            key={key}
                            label={label}
                            placeholder={placeholder}
                            value={form[key as keyof FormData]}
                            onChange={(e) => handleChange(key, e.target.value)}
                            styles={{
                                label: { ...inputstyle.textFieldLabelStyle },
                                input: {
                                    ...inputstyle.textFieldInputStyle,
                                    borderRadius: '10px !important',
                                },
                            }}
                        />
                    ))}
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
                            borderRadius: '10px !important',
                        },
                    }}
                />
            </Box>
        </Stack>
    );
};

export default Information;
