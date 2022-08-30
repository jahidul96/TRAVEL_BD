import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/COLORS";
import NotifyIcon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const img =
	"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";

const ProfileComp = () => {
	const navigation = useNavigation();

	const gotoProfile = () => {
		navigation.navigate("profile");
	};
	return (
		<View style={styles.profileContainer}>
			<View style={styles.contentWrapper}>
				<User show={true} click={gotoProfile} />
				<TouchableOpacity>
					<NotifyIcon
						name="notifications"
						size={22}
						color={COLORS.darkBlue}
					/>

					<View style={styles.notifyView}>
						<Text style={styles.notifyText}>2</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileComp;

export const User = ({
	show,
	extraTextStyle,
	extraWrapperStyle,
	click,
	userProfileExtraStyle,
	time,
}) => (
	<TouchableOpacity
		style={[styles.profileWrapper, userProfileExtraStyle]}
		activeOpacity={0.7}
		onPress={click}
	>
		<View style={[styles.imgWrapper, extraWrapperStyle]}>
			<Image source={{uri: img}} style={styles.imgStyle} />
		</View>
		<View>
			{show && <Text style={styles.welcomeText}>Welcome,</Text>}

			<Text style={[styles.nameText, extraTextStyle]}>Jahidul Islam</Text>
			{time && <Text style={styles.timeText}>{time}</Text>}
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	profileContainer: {
		width: "100%",
		height: "11%",
		paddingHorizontal: 15,
		borderBottomColor: "#bbb",
		borderBottomWidth: 1,
		justifyContent: "center",
		backgroundColor: COLORS.white,
	},
	contentWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	profileWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	imgWrapper: {
		width: 45,
		height: 45,
		marginRight: 10,
	},
	imgStyle: {
		width: "100%",
		height: "100%",
		borderRadius: 100 / 2,
		borderWidth: 2,
		borderColor: COLORS.darkBlue,
	},
	welcomeText: {
		color: COLORS.gray,
		fontWeight: "600",
		fontSize: 12,
	},
	nameText: {
		fontWeight: "900",
		marginTop: 2,
		color: COLORS.darkBlue,
	},

	notifyView: {
		position: "absolute",
		width: 17,
		height: 17,
		borderRadius: 100 / 2,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		top: -5,
		right: -5,
	},
	notifyText: {
		fontSize: 10,
		color: COLORS.white,
		fontWeight: "bold",
	},
	timeText: {
		color: COLORS.gray,
		fontSize: 11,
	},
});
