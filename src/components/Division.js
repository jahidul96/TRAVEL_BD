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
import {reuseableStyle} from "./Reuse/ReuseStyle";
import {MoreBtnComp} from "./Reuse/Reuse";

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

			<MoreBtnComp />
		</ScrollView>
	);
};

export default Division;

const SingleDivision = ({value}) => (
	<TouchableOpacity
		style={[
			reuseableStyle.SingleDivisionWrapper,
			value.id == 1 && {marginLeft: 2},
		]}
		activeOpacity={0.7}
	>
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
		paddingVertical: 10,
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
		fontSize: 12,
		fontWeight: "bold",
		maxWidth: "90%",
		letterSpacing: 0.7,
	},
});
