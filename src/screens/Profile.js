import {ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {TopComp} from "../components/Reuse/Reuse";
import BottomTab from "../components/BottomTab";
import {User} from "../components/ProfileComp";
import {Height, Width} from "../dimension/dimension";
import {COLORS} from "../COLOR/COLORS";
import HeartIcon from "react-native-vector-icons/AntDesign";
import MessageIcon from "react-native-vector-icons/AntDesign";
import ShareIcon from "react-native-vector-icons/FontAwesome";

const userProfileExtraStyle = {
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
};

const extraWrapperStyle = {
	width: 65,
	height: 65,
	borderRadius: 100 / 2,
	marginBottom: 10,
};
const postUserStyle = {
	width: 35,
	height: 35,
	borderRadius: 100 / 2,
};

const extraTextStyle = {
	fontSize: 17,
};

const Profile = ({navigation}) => {
	const [selectedPage, setSelectedPage] = useState("");

	useEffect(() => {
		setSelectedPage("profile");
	}, [selectedPage]);

	const post = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<View style={styles.root}>
			<TopComp text="Profile" navigation={navigation} />
			<ScrollView
				contentContainerStyle={styles.mainwrapper}
				showsVerticalScrollIndicator={false}
			>
				<User
					userProfileExtraStyle={userProfileExtraStyle}
					extraWrapperStyle={extraWrapperStyle}
					extraTextStyle={extraTextStyle}
				/>

				<View style={styles.postContainer}>
					<Counter total={20} text="Post's" first={true} />
					<Counter total={2000} text="Follower's" />
					<Counter total={3000} text="Likes" />
				</View>
				<Text style={[styles.text, styles.postText]}>Post's</Text>
				{post.map((d, i) => (
					<Myposts key={i} />
				))}
			</ScrollView>
			<BottomTab
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
		</View>
	);
};

const Counter = ({total, text, first, likes}) => (
	<View
		style={[
			styles.counterWrapper,
			first && {backgroundColor: COLORS.darkBlue},
		]}
	>
		<Text style={[styles.total, first && {color: COLORS.white}]}>
			{total}
		</Text>
		<Text style={[styles.text, first && {color: COLORS.white}]}>
			{text}
		</Text>
	</View>
);

const Myposts = () => {
	return (
		<View style={styles.mypostContainer}>
			<User extraWrapperStyle={postUserStyle} time="5m ago" />
			<View style={styles.postContentWrapper}>
				<Text style={styles.total}>This is my first post</Text>
			</View>

			<View style={styles.iconContainer}>
				<View style={styles.flexStyle}>
					<HeartIcon
						name="heart"
						size={16}
						color={COLORS.darkBlue}
						style={styles.iconStyle}
					/>
					<Text>45</Text>
				</View>
				<View style={styles.flexStyle}>
					<MessageIcon
						name="message1"
						size={16}
						color={COLORS.darkBlue}
						style={styles.iconStyle}
					/>
					<Text>23</Text>
				</View>
				<ShareIcon name="share" size={16} color={COLORS.darkBlue} />
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	mainwrapper: {
		padding: 15,
	},
	postContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
	},
	counterWrapper: {
		width: Width / 3.5,
		height: Height / 12,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.lightGary,
		elevation: 2,
		borderRadius: 10,
		marginRight: 5,
	},
	total: {
		fontWeight: "bold",
		letterSpacing: 1,
	},
	text: {
		fontWeight: "bold",
		letterSpacing: 2,
		marginTop: 2,
	},
	postText: {
		marginTop: 15,
		marginBottom: 5,
		fontSize: 17,
		textAlign: "center",
	},
	mypostContainer: {
		marginTop: 10,
		backgroundColor: COLORS.white,
		elevation: 2,
		padding: 10,
		borderRadius: 10,
		marginBottom: 8,
	},
	postContentWrapper: {
		marginVertical: 12,
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		alignSelf: "flex-end",
		width: "50%",
		marginVertical: 5,
	},
	flexStyle: {
		flexDirection: "row",
		alignItems: "center",
	},
	iconStyle: {
		marginRight: 7,
	},
});
