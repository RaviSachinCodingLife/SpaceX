import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../hooks/usePrductDetail';
import {
    Grid,
    Image,
    Text,
    Title,
    Select,
    Button,
    NumberInput,
    Group,
    Box,
    ColorSwatch,
    Stack,
    Divider,
    List,
    Center,
} from '@mantine/core';
import "../../assets/scss/App.scss";
import { CartItems } from '../../utils/cartItems';
import { useCartStore } from '../../store/useCartStore';
import { Notifications, showNotification } from '@mantine/notifications';
import { CrossIcon } from '../../assets/svg/SvgIcon';

const ProductDetail = () => {
    const { slug } = useParams();
    const { addToCart, cart } = useCartStore();
    const [isAdded, setIsAdded] = useState(false);

    const product = CartItems.find((item) => item.title === slug);

    if (!product) return null;
    const { data } = useProductDetail(product.id);

    const [productState, setProductState] = useState({
        quantity: 1,
        selectedColor: null as string | null,
        selectedSize: null as string | null,
    });

    console.log({ data });

    if (!data) return null;

    const handleAddToCart = () => {
        const { selectedColor, selectedSize, quantity } = productState;

        if (!selectedColor || !selectedSize) {
            showNotification({
                title: 'Selection Missing',
                message: 'Please select a color and size before adding to cart.',
                color: 'red',
                icon: <CrossIcon />,
            });
            return;
        }

        addToCart({
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.image,
            color: selectedColor,
            size: selectedSize,
            quantity,
        });

        setIsAdded(true);
    };

    console.log("Current Cart:", cart);

    return (
        <Box sx={{
            backgroundColor: "#000",
            minHeight: "100vh",
            paddingTop: "70px",
            marginTop: '-60px'
        }}>
            <Grid gutter="xl" sx={{ backgroundColor: "#fff", padding: "10px" }}>
                <Grid.Col span={12} md={6}>
                    <Image
                        radius="md"
                        src={data.image}
                        alt={data.title}
                        fit="contain"
                        styles={{ imageWrapper: { background: '#f9f9f9', padding: '24px' } }}
                    />
                </Grid.Col>

                <Grid.Col span={12} md={4}>
                    <Stack spacing="lg" sx={{ paddingTop: "18px" }}>
                        <Title order={2} fw={500} sx={{ fontSize: '24px' }}>{data.title}</Title>
                        <Text size="lg" fw={500}>{data.price}</Text>

                        <Divider />

                        <Box>
                            <List spacing="xs">
                                <Text fw={500} mb="xs" size="md">Fabric Content:</Text>
                                <List.Item c={"grey"}>
                                    <Text color="grey" size="sm">{data.fabricContent}</Text>
                                </List.Item>
                            </List>
                        </Box>

                        <Box>
                            <Text size={'sm'} c={"grey"} mb="xs">Color: <span style={{ color: "#000" }}>{productState.selectedColor}</span> </Text>
                            <Group spacing="xs">
                                {data.color?.map((color: string, idx: number) => (
                                    <ColorSwatch
                                        key={idx}
                                        color={color}
                                        size={28}
                                        onClick={() =>
                                            setProductState((prev) => ({ ...prev, selectedColor: color }))}
                                        style={{
                                            cursor: 'pointer',
                                            border: productState.selectedColor === color ? '2px solid #000' : 'none',
                                        }}
                                    />
                                ))}
                            </Group>
                        </Box>

                        <Box>
                            <Text size={'sm'} c={"grey"} mb="xs">Size:</Text>
                            <Select
                                placeholder="Select size"
                                data={data.size}
                                value={productState.selectedSize || data.size?.[0]}
                                onChange={(value) =>
                                    setProductState((prev) => ({ ...prev, selectedSize: value }))
                                }
                                size="md"
                                styles={{
                                    input: {
                                        borderRadius: "10px !important", padding: '10px 14px', height: "50px"
                                    },
                                }}

                            />
                        </Box>

                        <Box>
                            <Text fw={600} mb="xs">Quantity:</Text>
                            <NumberInput
                                value={productState.quantity}
                                onChange={(value) =>
                                    setProductState((prev) => ({
                                        ...prev,
                                        quantity: value || 1,
                                    }))
                                }
                                min={1}
                                max={10}
                                size="md"
                                w={120}
                                styles={{
                                    input: { borderRadius: '6px', padding: '10px 14px' },
                                }}
                            />
                        </Box>

                        <Button
                            onClick={handleAddToCart}
                        >
                            {isAdded ? "Go to Cart" : "Add to Cart"}
                        </Button>
                    </Stack>
                </Grid.Col>
            </Grid>
            
        </Box>
    );
};

export default ProductDetail;
