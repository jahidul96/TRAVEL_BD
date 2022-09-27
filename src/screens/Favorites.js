import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {TopComp} from "../components/Reuse/Reuse";
import {divisionData} from "../data/divisiondata";
import {Places} from "../components/TabContent";
import {COLORS} from "../COLOR/COLORS";

const Favorites = ({navigation}) => {
	const seeDeatils = (item) => {
		navigation.navigate("details", item);
	};
	return (
		<View style={styles.root}>
			<TopComp text="Favorites" navigation={navigation} />
			<ScrollView
				contentContainerStyle={styles.mainContainer}
				showsVerticalScrollIndicator={false}
			>
				{divisionData.map((data) => (
					<Places
						value={data}
						key={data.id}
						extraWrapper={styles.itemWrapper}
						seeDeatils={seeDeatils}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Favorites;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	mainContainer: {
		paddingHorizontal: 15,
		paddingVertical: 10,
	},

	itemWrapper: {
		width: "100%",
		height: 220,
		marginBottom: 12,
	},
});
