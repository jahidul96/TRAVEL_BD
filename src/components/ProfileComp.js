import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {COLORS} from "../COLOR/COLORS";
import NotifyIcon from "react-native-vector-icons/Ionicons";

const img =
	"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";

const ProfileComp = () => {
	return (
		<View style={styles.profileContainer}>
			<View style={styles.contentWrapper}>
				<View style={styles.profileWrapper}>
					<TouchableOpacity style={styles.imgWrapper}>
						<Image source={{uri: img}} style={styles.imgStyle} />
					</TouchableOpacity>
					<View>
						<Text style={styles.welcomeText}>Welcome,</Text>
						<Text style={styles.nameText}>Jahidul Islam</Text>
					</View>
				</View>
				<TouchableOpacity>
					<NotifyIcon
						name="notifications"
						size={20}
						color={COLORS.darkBlue}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileComp;

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
});
