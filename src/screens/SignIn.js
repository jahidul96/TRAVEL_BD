import {ImageBackground, StatusBar, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ButtonComp} from "../components/Reuse/Reuse";
import {COLORS} from "../COLOR/COLORS";

const imgUrl =
	"https://c0.wallpaperflare.com/preview/552/184/880/travel-road-country-western.jpg";

const fbBtnStyle = {
	backgroundColor: COLORS.darkBlue,
	marginBottom: 8,
};
const googleBtnStyle = {
	backgroundColor: COLORS.darkRed,
};

const SignIn = ({navigation}) => {
	const gotoHome = () => {
		navigation.navigate("home");
	};
	return (
		<View style={styles.root}>
			<ImageBackground style={styles.bgImgStyle} source={{uri: imgUrl}}>
				<View style={styles.contentWrapper}>
					<Text style={styles.titleText}>TRAVELBD.</Text>
					<View>
						<ButtonComp
							text="SignInWithFaceBook"
							extraStyle={fbBtnStyle}
							click={gotoHome}
						/>
						<ButtonComp
							text="SignInWithGoogle"
							extraStyle={googleBtnStyle}
							click={gotoHome}
						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	bgImgStyle: {
		width: "100%",
		height: "100%",
	},
	contentWrapper: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 15,
		justifyContent: "space-around",
	},
	titleText: {
		color: "crimson",
		alignSelf: "center",
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 10,
		letterSpacing: 5,
	},
});
