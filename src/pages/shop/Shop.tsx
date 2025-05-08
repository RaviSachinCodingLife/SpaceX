import { Box, Image, Text, TextInput } from '@mantine/core';
import shopImg from "../../assets/images/Shop/shop.png";
import * as inputstyle from "../Auth/style";
import { SearchIcon } from '../../assets/svg/SvgIcon';
import GlobalCard from '../../components/card/Card';
import * as boxStyle from "../Astronaut/style";
import * as style from "./style";
import { useShop } from './useShopHook';
import { useMemo } from 'react';

const Shop = () => {
	const { searchTerm, setSearchTerm, cardProps } = useShop();

	return (
		<Box style={boxStyle.BoxStyle}>
			<Image
				src={shopImg}
				alt="ShopImg"
				height="80vh"
				width="100%"
				fit="cover"
			/>

			<Box style={style.ShopBoxStyle}>
				<Text size="lg" style={style.ShopTitleTextStyle}>
					TRENDING
				</Text>

				<TextInput
					name="search"
					placeholder="Search Items"
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.currentTarget.value)}
					rightSection={<SearchIcon />}
					styles={{
						label: { ...inputstyle.textFieldLabelStyle },
						input: {
							...inputstyle.textFieldInputStyle,
							borderRadius: "10px !important",
						},
					}}
					sx={style.ShopTextInputStyle}
				/>

				<Box style={style.ShopGlobalCardBox}>
					{cardProps?.length > 0 ? (
						cardProps.map((props) => <GlobalCard {...props} />)
					) : (
						<Text>No items found</Text>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default Shop;
