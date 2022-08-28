import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, {useState} from "react";
import {COLORS} from "../COLOR/COLORS";

const Tab = ({data}) => {
	const [selectedTab, setSelectedTab] = useState("All");
	const selectTab = (t) => {
		setSelectedTab(t);
	};
	return (
		<ScrollView
			horizontal
			contentContainerStyle={styles.root}
			showsHorizontalScrollIndicator={false}
		>
			{data.map((val) => (
				<TouchableOpacity
					key={val.id}
					style={[
						styles.tabContainer,
						selectedTab == val.title &&
							styles.tabContainerExtraStyle,
					]}
					onPress={() => selectTab(val.title)}
				>
					<Text style={styles.title}>{val.title}</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
};

export default Tab;

const styles = StyleSheet.create({
	root: {
		paddingVertical: 10,
	},
	tabContainer: {
		marginRight: 30,
		height: 35,
	},
	title: {
		fontWeight: "bold",
		letterSpacing: 1,
		marginBottom: 5,
	},
	tabContainerExtraStyle: {
		borderBottomColor: COLORS.darkBlue,
		borderBottomWidth: 5,
	},
});
