import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import ProfileComp from "../components/ProfileComp";
import BottomTab from "../components/BottomTab";
import {COLORS} from "../COLOR/COLORS";
import Division from "../components/Division";
import {divisionData} from "../data/divisiondata";
import {SearchBar} from "../components/Reuse/Reuse";
import Tab from "../components/Tab";
import {scroolTabData} from "../data/TabData";
import TabItemComp from "../components/TabItemComp";

const Home = () => {
	return (
		<SafeAreaView style={styles.root}>
			<ProfileComp />
			<ScrollView contentContainerStyle={styles.mainContainer}>
				<Text style={styles.divisionText}>Division</Text>
				<View>
					<Division data={divisionData} />
				</View>
				<View style={{marginVertical: 8, marginBottom: 12}}>
					<SearchBar />
				</View>
				<Text style={[styles.divisionText, {marginVertical: 5}]}>
					Explore Cities
				</Text>
				<View>
					<Tab data={scroolTabData} />
					<TabItemComp data={divisionData} />
				</View>
			</ScrollView>
			{/* footer */}
			<BottomTab />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	mainContainer: {
		backgroundColor: COLORS.deepGray,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	divisionText: {
		fontSize: 17,
		fontWeight: "700",
		letterSpacing: 0.7,
		color: COLORS.darkBlue,
	},
});
