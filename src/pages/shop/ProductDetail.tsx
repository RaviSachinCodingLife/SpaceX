import {
    Grid, Image, Text, Title, Select, Button,
    NumberInput, Group, Box, ColorSwatch, Stack, Divider, List
} from '@mantine/core';
import "../../assets/scss/App.scss";
import { showNotification } from '@mantine/notifications';
import { CrossIcon } from '../../assets/svg/SvgIcon';
import * as boxStyle from "../Astronaut/style";
import * as style from "./style";
import { useProductHook } from './useShopHook';

const ProductDetail = () => {
    const hookResult = useProductHook();
    if (!hookResult || !hookResult.data) return null;

    const {
        data,
        setProductState,
        productState,
        isAdded,
        addToCart,
        setIsAdded,
    } = hookResult;

    const handleAddToCart = () => {
        const { selectedColor, selectedSize, quantity } = productState;

        if (!selectedColor || !selectedSize) {
            showNotification({
                title: "Selection Missing",
                message: "Please select a color and size before adding to cart.",
                color: "red",
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

    const productAttributes = [
        {
            label: 'Color',
            value: productState.selectedColor,
            render: (
                <Group spacing="xs">
                    {data.color?.map((color: string, idx: number) => (
                        <ColorSwatch
                            key={idx}
                            color={color}
                            size={28}
                            onClick={() =>
                                setProductState((prev) => ({ ...prev, selectedColor: color }))
                            }
                            style={style.ProductDetailColorSwatchStyle(productState, color)}
                        />
                    ))}
                </Group>
            ),
        },
        {
            label: 'Size',
            render: (
                <Select
                    placeholder="Select size"
                    data={data.size}
                    value={productState.selectedSize}
                    onChange={(value) =>
                        setProductState((prev) => ({ ...prev, selectedSize: value }))
                    }
                    size="md"
                    styles={{ input: style.ProductDetailSelectStyle }}
                />
            ),
        },
        {
            label: 'Quantity',
            render: (
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
                    styles={{ input: style.ProductDetailNumberInputStyle }}
                />
            ),
        },
    ];

    return (
        <Box style={boxStyle.BoxStyle}>
            <Grid gutter="xl" style={style.ProductDetailGridStyle}>
                <Grid.Col span={12} md={6}>
                    <Image
                        radius="md"
                        src={data.image}
                        alt={data.title}
                        fit="contain"
                        styles={{ imageWrapper: { ...style.ProductDetailImageStyle } }}
                    />
                </Grid.Col>

                <Grid.Col span={12} md={4}>
                    <Stack spacing="lg" pt="18px">
                        <Title order={2} fw={500} fz="24px" c="#000">{data.title}</Title>
                        <Text size="lg" fw={500} c="grey">{data.price}</Text>

                        <Divider />

                        <Box>
                            <List spacing="xs">
                                <Text fw={500} mb="xs" size="md" c="#000">Fabric Content:</Text>
                                <List.Item c="grey">
                                    <Text color="grey" size="sm">{data.fabricContent}</Text>
                                </List.Item>
                            </List>
                        </Box>

                        {productAttributes.map(({ label, value, render }, index) => (
                            <Box key={index}>
                                {label && (
                                    <Text size="sm" c="grey" mb="xs">
                                        {label}:{value !== undefined && typeof value === 'string' && (
                                            <span style={{ color: "#000" }}> {value}</span>
                                        )}
                                    </Text>
                                )}
                                {render}
                            </Box>
                        ))}

                        <Button
                            variant="filled"
                            color="dark"
                            size="md"
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
