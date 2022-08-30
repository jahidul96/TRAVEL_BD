import {ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import ProfileComp from "../components/ProfileComp";
import BottomTab from "../components/BottomTab";
import {COLORS} from "../COLOR/COLORS";
import Division from "../components/Division";
import {divisionData} from "../data/divisiondata";
import {Search} from "../components/Reuse/Reuse";
import Tab from "../components/Tab";
import {scroolTabData} from "../data/TabData";
import TabContent from "../components/TabContent";

const Home = ({navigation}) => {
	const [selectedPage, setSelectedPage] = useState("");

	const gotoSearch = (v) => {
		navigation.navigate("yourSearch");
	};

	useEffect(() => {
		setSelectedPage("home");
	}, [selectedPage]);

	return (
		<SafeAreaView style={styles.root}>
			<ProfileComp />
			<ScrollView
				contentContainerStyle={styles.mainContainer}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.divisionText}>Division</Text>
				<View>
					<Division data={divisionData} />
				</View>
				<View style={{marginVertical: 8, marginBottom: 12}}>
					<Search gotoPage={gotoSearch} />
				</View>
				<Text style={[styles.divisionText, {marginVertical: 5}]}>
					Explore Cities
				</Text>
				<View>
					<Tab data={scroolTabData} />
					<TabContent data={divisionData} />
				</View>
				<Text style={[styles.divisionText, {marginTop: 8}]}>
					Top Hotel's
				</Text>
				<TabContent data={divisionData} more={true} />
			</ScrollView>
			<BottomTab
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
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
