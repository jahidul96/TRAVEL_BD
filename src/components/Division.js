import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/COLORS";
import PlusIcon from "react-native-vector-icons/FontAwesome";

const Division = ({data}) => {
	return (
		<ScrollView
			contentContainerStyle={styles.root}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{data.map((val) => (
				<SingleDivision value={val} key={val.id} />
			))}

			<View style={styles.moreViewWrapper}>
				<TouchableOpacity
					style={[
						styles.SingleDivisionWrapper,
						styles.moreViewStyles,
					]}
				>
					<PlusIcon name="plus" color={COLORS.white} size={20} />
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Division;

const SingleDivision = ({value}) => (
	<TouchableOpacity style={styles.SingleDivisionWrapper}>
		<ImageBackground
			source={{uri: value.img}}
			style={styles.imgStyle}
			blurRadius={1}
		>
			<View style={styles.wrapper}>
				<Text style={styles.text}>{value.text}</Text>
			</View>
		</ImageBackground>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	root: {
		paddingVertical: 6,
	},
	SingleDivisionWrapper: {
		width: 120,
		height: 120,
		marginRight: 8,
	},
	imgStyle: {
		width: "100%",
		height: "100%",
		borderRadius: 10,
		overflow: "hidden",
		justifyContent: "flex-end",
	},
	wrapper: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		width: "100%",
	},
	text: {
		color: COLORS.white,
		fontSize: 14,
		fontWeight: "bold",
		maxWidth: "90%",
		letterSpacing: 0.7,
	},
	moreViewWrapper: {
		width: 60,
		height: 120,
		justifyContent: "center",
		marginLeft: 15,
	},
	moreViewStyles: {
		width: 45,
		height: 45,
		backgroundColor: COLORS.darkBlue,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100 / 2,
	},
	plusText: {
		fontSize: 30,
		fontWeight: "bold",
		marginLeft: 1,
		color: COLORS.white,
	},
});
