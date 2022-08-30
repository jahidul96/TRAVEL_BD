import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {COLORS} from "../COLOR/COLORS";
import HomeIcon from "react-native-vector-icons/Entypo";
import SearchIcon from "react-native-vector-icons/FontAwesome";
import FvrtIcon from "react-native-vector-icons/FontAwesome";
import PersonIcon from "react-native-vector-icons/Ionicons";
import PlusIcon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";

const data = [
	{
		id: 1,
		icon: <HomeIcon name="home" size={25} />,
		screenName: "home",
	},
	{
		id: 2,
		icon: <SearchIcon name="search" size={25} />,
		screenName: "yourSearch",
	},
	{
		id: 3,
		icon: <PlusIcon name="plus" size={20} />,
		screenName: "post",
	},
	{
		id: 4,
		icon: <FvrtIcon name="bookmark" size={25} />,
		screenName: "favorite",
	},
	{
		id: 5,
		icon: <PersonIcon name="md-person-circle-outline" size={25} />,
		screenName: "profile",
	},
];

const BottomTab = ({selectedPage, setSelectedPage}) => {
	// const [selectedPage, setSelectedPage] = useState("");
	const navigation = useNavigation();

	const goToPage = (val) => {
		navigation.navigate(val);
	};

	return (
		<View style={styles.container}>
			{data.map((value) => (
				<TouchableOpacity
					activeOpacity={0.7}
					style={[
						selectedPage == value.screenName
							? styles.iconWrapperExtraStyle
							: value.screenName == "post"
							? [styles.iconWrapper, styles.postScreenStyle]
							: styles.iconWrapper,
					]}
					key={value.id}
					onPress={() => {
						goToPage(value.screenName);
						setSelectedPage(value.screenName);
					}}
				>
					<Text
						style={[
							selectedPage == value.screenName
								? {color: COLORS.white}
								: {
										color: COLORS.darkBlue,
								  },
						]}
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
		backgroundColor: COLORS.darkBlue,
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100 / 2,
	},
	postScreenStyle: {
		backgroundColor: COLORS.white,
		elevation: 2,
		borderRadius: 100 / 2,
	},
});
