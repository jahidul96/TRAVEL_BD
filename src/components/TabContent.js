import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/COLORS";
import LocationIcon from "react-native-vector-icons/Entypo";
import StarIcon from "react-native-vector-icons/AntDesign";
import {MoreBtnComp} from "./Reuse/Reuse";
import {useNavigation} from "@react-navigation/native";

const TabContent = ({data, more}) => {
	const navigation = useNavigation();
	const seeDeatils = (item) => {
		navigation.navigate("details", item);
	};
	return (
		<ScrollView
			contentContainerStyle={styles.root}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{data.map((val) => (
				<Places key={val.id} value={val} seeDeatils={seeDeatils} />
			))}

			{more && (
				<MoreBtnComp
					extraStyle={styles.moreBtnExtraStyle}
					change={true}
				/>
			)}
		</ScrollView>
	);
};

export default TabContent;

const Places = ({value, seeDeatils}) => (
	<TouchableOpacity
		style={[styles.itemWrapper, value.id == 1 && {marginLeft: 2}]}
		onPress={() => seeDeatils(value)}
	>
		<View style={styles.imgWrapper}>
			<Image source={{uri: value.img}} style={styles.imgStyle} />
		</View>

		<View style={styles.detailsWrapper}>
			<Text style={[styles.text, styles.title]}>{value.title}</Text>
			<View style={styles.footerWrapper}>
				<LocationIcon
					name="location-pin"
					size={16}
					color={COLORS.darkBlue}
				/>
				<Text style={styles.text}>{value.text}</Text>
				<View style={styles.ratingWrapper}>
					<StarIcon name="star" size={12} color="orange" />
					<Text style={[styles.text, {marginLeft: 5}]}>
						{value.rating}
					</Text>
				</View>
			</View>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	root: {
		paddingVertical: 10,
	},
	itemWrapper: {
		width: 160,
		height: 180,
		backgroundColor: COLORS.white,
		elevation: 2,
		borderRadius: 8,
		marginRight: 10,
		padding: 8,
	},
	imgWrapper: {
		width: "100%",
		height: "70%",
		alignItems: "center",
	},
	imgStyle: {
		width: "100%",
		height: "100%",
		borderRadius: 8,
	},
	detailsWrapper: {
		marginTop: 3,
	},
	footerWrapper: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: -5,
		marginTop: 4,
	},
	ratingWrapper: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
	},
	title: {
		color: "#000",
		fontSize: 14,
		letterSpacing: 1,
		marginBottom: 2,
	},
	text: {
		fontWeight: "bold",
		letterSpacing: 0.7,
		color: COLORS.gray,
		fontSize: 11,
	},

	moreBtnExtraStyle: {
		height: 180,
	},
});
