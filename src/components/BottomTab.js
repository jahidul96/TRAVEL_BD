import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {COLORS} from "../COLOR/COLORS";
import HomeIcon from "react-native-vector-icons/Entypo";
import SearchIcon from "react-native-vector-icons/FontAwesome";
import FvrtIcon from "react-native-vector-icons/FontAwesome";
import PersonIcon from "react-native-vector-icons/Ionicons";

const data = [
	{
		id: 1,
		icon: <HomeIcon name="home" size={25} />,
		title: "home",
	},
	{
		id: 2,
		icon: <SearchIcon name="search" size={25} />,
		title: "search",
	},
	{
		id: 3,
		icon: <FvrtIcon name="bookmark" size={25} />,
		title: "bookmark",
	},
	{
		id: 4,
		icon: <PersonIcon name="md-person-circle-outline" size={25} />,
		title: "person",
	},
];

const BottomTab = () => {
	const [selectedPage, setSelectedPage] = useState("home");

	const goToPage = (t) => {
		setSelectedPage(t);
	};
	return (
		<View style={styles.container}>
			{data.map((value) => (
				<TouchableOpacity
					activeOpacity={0.7}
					style={
						selectedPage == value.title
							? [styles.iconWrapperExtraStyle, styles.iconWrapper]
							: styles.iconWrapper
					}
					key={value.id}
					onPress={() => goToPage(value.title)}
				>
					<Text
						style={
							selectedPage == value.title
								? {color: COLORS.white}
								: {color: COLORS.darkBlue}
						}
					>
						{value.icon}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default BottomTab;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "10%",
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderTopColor: COLORS.darkBlue,
		borderTopWidth: 1,
	},
	iconWrapper: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	iconWrapperExtraStyle: {
		backgroundColor: "red",
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100 / 2,
	},
});
