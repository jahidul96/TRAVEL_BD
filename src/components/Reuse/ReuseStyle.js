import {StyleSheet} from "react-native";
import {COLORS} from "../../COLOR/COLORS";

export const reuseableStyle = StyleSheet.create({
	// BtnComp styles
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

	// search Styles
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
	// inputStyle
	inputStyle: {},

	// TopBackComp styles
	topbackcompWrapper: {
		width: 80,
		height: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
	btnText: {
		color: COLORS.darkBlue,
		letterSpacing: 1,
		marginLeft: 3,
		fontWeight: "bold",
		fontSize: 13,
	},
	// MoreBtnComp styles
	moreViewWrapper: {
		width: 80,
		height: 100,
		justifyContent: "center",
		alignItems: "center",
	},

	SingleDivisionWrapper: {
		width: 100,
		height: 100,
		marginRight: 8,
	},

	moreViewStyles: {
		width: 45,
		height: 45,
		backgroundColor: COLORS.darkBlue,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100 / 2,
	},

	// topcompStyle
	topcompStyle: {
		width: "100%",
		height: "11%",
		backgroundColor: COLORS.darkBlue,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		paddingBottom: 10,
		paddingHorizontal: 15,
	},
	topCompTextStyle: {
		color: COLORS.white,
		fontWeight: "bold",
		fontSize: 17,
		letterSpacing: 1,
	},
});
