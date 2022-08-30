import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Height, Width} from "../dimension/dimension";
import {BackBtn} from "../components/Reuse/Reuse";
import {COLORS} from "../COLOR/COLORS";
import {User} from "../components/ProfileComp";
import HeartIcon from "react-native-vector-icons/AntDesign";
import LocationIcon from "react-native-vector-icons/Entypo";
import SeenIcon from "react-native-vector-icons/AntDesign";
import {divisionData} from "../data/divisiondata";
import TabContent from "../components/TabContent";

const extraTextStyle = {
	color: COLORS.white,
	fontSize: 12,
};
const extraWrapperStyle = {
	width: 35,
	height: 35,
};

const btnStyle = {
	backgroundColor: COLORS.white,
};

const Details = ({route, navigation}) => {
	const item = route.params;
	const [favorite, setFavorite] = useState(false);

	return (
		<ScrollView
			contentContainerStyle={styles.root}
			showsVerticalScrollIndicator={false}
		>
			<ImageBackground source={{uri: item.img}} style={styles.imgStyle}>
				<PostDetails
					favorite={favorite}
					setFavorite={setFavorite}
					navigation={navigation}
					item={item}
				/>
			</ImageBackground>
			<View style={styles.middlecontentWrapper}>
				<View style={[styles.flexStyle, styles.postcounterWrapper]}>
					<View style={styles.flexStyle}>
						<LocationIcon
							name="location-pin"
							size={18}
							color={COLORS.darkBlue}
							style={styles.iconStyle}
						/>
						<Text style={styles.postCountTextStyle}>
							{item.text}
						</Text>
					</View>
					<View style={styles.flexStyle}>
						<HeartIcon
							name="heart"
							size={16}
							color={COLORS.darkBlue}
							style={styles.iconStyle}
						/>
						<Text style={styles.postCountTextStyle}>
							1220 Likes
						</Text>
					</View>
					<View style={styles.flexStyle}>
						<SeenIcon
							name="eye"
							size={16}
							color={COLORS.darkBlue}
							style={styles.iconStyle}
						/>
						<Text style={styles.postCountTextStyle}>
							1220 Views
						</Text>
					</View>
				</View>

				<View style={styles.moreContentWrapper}>
					<Text style={styles.moreTextStyle}>More Post's</Text>
					<TabContent data={divisionData} />
					<TabContent data={divisionData} />
					<TabContent data={divisionData} />
					<TabContent data={divisionData} />
					<TabContent data={divisionData} />
					<TabContent data={divisionData} />
				</View>
			</View>
		</ScrollView>
	);
};

export default Details;

const PostDetails = ({favorite, setFavorite, navigation, item}) => (
	<View style={styles.imgContentWrapper}>
		<BackBtn text="Back" btnStyle={btnStyle} navigation={navigation} />
		<View style={styles.detailsWrapper}>
			<View>
				<Text style={styles.titleText}>{item.text}</Text>
				<Text style={styles.descText}>
					This trip details will be here. we had a great time and
					every thing was good.loved he journey.
				</Text>
				<View style={styles.ProfileWrapper}>
					<User
						extraTextStyle={extraTextStyle}
						extraWrapperStyle={extraWrapperStyle}
						textStyle={true}
					/>
				</View>
			</View>
			<TouchableOpacity
				style={styles.fvrtWrapper}
				onPress={() => setFavorite(!favorite)}
				activeOpacity={0.7}
			>
				<HeartIcon
					name="heart"
					size={20}
					color={favorite ? "red" : COLORS.darkBlue}
				/>
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	imgStyle: {
		width: "100%",
		height: Height / 2.4,
	},
	imgContentWrapper: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 15,
		paddingTop: 45,
		paddingBottom: 15,
		flexDirection: "column",
		justifyContent: "space-between",
	},

	detailsWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	titleText: {
		color: COLORS.white,
		fontWeight: "bold",
		fontSize: 18,
		letterSpacing: 2,
		marginBottom: 2,
	},
	descText: {
		color: COLORS.white,
		fontWeight: "bold",
		fontSize: 12,
		maxWidth: "80%",
	},
	ProfileWrapper: {
		marginTop: 6,
	},

	fvrtWrapper: {
		backgroundColor: COLORS.white,
		elevation: 2,
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100 / 2,
	},
	middlecontentWrapper: {
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	postcounterWrapper: {
		maxWidth: "95%",
		justifyContent: "space-between",
	},
	flexStyle: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconStyle: {
		marginRight: 3,
	},
	postCountTextStyle: {
		color: COLORS.gray,
	},
	moreContentWrapper: {
		paddingVertical: 15,
	},
	moreTextStyle: {
		color: COLORS.darkBlue,
		letterSpacing: 1,
		fontWeight: "bold",
		fontSize: 16,
	},
});
