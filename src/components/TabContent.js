import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, {useState} from "react";
import {COLORS} from "../COLOR/COLORS";
import LocationIcon from "react-native-vector-icons/Entypo";
import StarIcon from "react-native-vector-icons/AntDesign";
import {MoreBtnComp} from "./Reuse/Reuse";
import {useNavigation} from "@react-navigation/native";
import HeartIcon from "react-native-vector-icons/AntDesign";

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

export const Places = ({value, seeDeatils, extraWrapper}) => {
	const [exits, setExits] = useState([]);

	const addToFvrt = (id) => {
		let fav = [];
		let alreadyExists = exits.includes(id);
		fav = alreadyExists
			? exits.filter((edata) => edata != id)
			: [...exits, id];
		setExits(fav);
	};
	return (
		<View
			style={[
				styles.itemWrapper,
				extraWrapper,
				value.id == 1 && {marginLeft: 2},
			]}
		>
			<View style={styles.imgWrapper}>
				<Image source={{uri: value.img}} style={styles.imgStyle} />

				{exits.includes(value.id) ? (
					<TouchableOpacity
						style={styles.fvrtIconWrapper}
						activeOpacity={0.7}
						onPress={() => addToFvrt(value.id)}
					>
						<HeartIcon name="heart" size={16} color={"red"} />
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={styles.fvrtIconWrapper}
						activeOpacity={0.7}
						onPress={() => addToFvrt(value.id)}
					>
						<HeartIcon
							name="heart"
							size={16}
							color={COLORS.darkBlue}
						/>
					</TouchableOpacity>
				)}
			</View>

			<TouchableOpacity
				style={styles.detailsWrapper}
				onPress={() => seeDeatils(value)}
				activeOpacity={0.7}
			>
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
			</TouchableOpacity>
		</View>
	);
};

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

	fvrtIconWrapper: {
		position: "absolute",
		top: 10,
		right: 10,
		width: 30,
		height: 30,
		backgroundColor: COLORS.white,
		elevation: 2,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100 / 2,
	},
});
