import { Box, Image, Text, TextInput } from '@mantine/core'
import shopImg from "../../assets/images/Shop/shop.png"
import * as inputstyle from "../../components/Auth/style"
import { SearchIcon } from '../../assets/svg/SvgIcon'
import GlobalCard from '../../components/card/Card'
import { useProductList } from '../../hooks/useProductlist'

const Shop = () => {
	const { data } = useProductList();
	return (
		<Box
			sx={{
				backgroundColor: "#000",
				color: "#fff",
				minHeight: "100vh",
				paddingTop: "60px",
				marginTop: '-60px'
			}}
		>
			<Image
				src={shopImg}
				alt={"ShopImg"}
				height="80vh"
				width="100%"
				fit="cover"
			/>

			<Box sx={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#fff", color: "#000" }}>
				<Text size="lg" style={{ flexWrap: "wrap", fontSize: "42px", textAlign: "center", marginTop: "20px" }}>
					TRENDING
				</Text>

				<TextInput
					name={"search"}
					placeholder={"Search Items"}
					type={"text"}
					value={"gysg"}
					onChange={() => { }}
					rightSection={<SearchIcon />}
					styles={{
						label: { ...inputstyle.textFieldLabelStyle },
						input: {
							...inputstyle.textFieldInputStyle,
							borderRadius: "10px !important",
						},
					}}
					sx={{ alignSelf: "flex-end", paddingRight: "10px" }}
				/>

				<Box
					sx={{
						margin: "20px",
						display: "flex",
						flexWrap: "wrap",
						gap: "20px",
						justifyContent: "center",
					}}
				>
					{data?.map((item) => (
						<GlobalCard
							key={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
							link={item.link}
						/>
					))}
				</Box>

			</Box>

		</Box >
	)
}

export default Shop
