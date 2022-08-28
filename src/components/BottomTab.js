import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/COLORS";

const BottomTab = () => {
	return (
		<View style={styles.container}>
			<Text>BottomTab</Text>
		</View>
	);
};

export default BottomTab;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "11%",
		paddingHorizontal: 15,
		justifyContent: "center",
		backgroundColor: COLORS.darkBlue,
	},
});
