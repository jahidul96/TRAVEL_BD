import {StyleSheet} from "react-native";
import {COLORS} from "../../COLOR/COLORS";

export const reuseableStyle = StyleSheet.create({
	buttonWrapper: {
		width: "100%",
		height: 45,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	btnTextStyle: {
		color: "#fff",
		fontWeight: "bold",
		letterSpacing: 0.8,
	},
	searchWrapper: {
		width: "100%",
		height: 45,
		backgroundColor: COLORS.white,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 15,
	},
	searchText: {
		color: COLORS.gray,
	},
	iconWrapper: {
		width: 40,
		height: 35,
		backgroundColor: COLORS.darkBlue,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	inputStyle: {
		width: "80%",
		backgroundColor: "red",
		height: "90%",
	},
});
