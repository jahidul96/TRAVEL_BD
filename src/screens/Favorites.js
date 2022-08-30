import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {TopComp} from "../components/Reuse/Reuse";

const Favorites = ({navigation}) => {
	return (
		<ScrollView contentContainerStyle={styles.root}>
			<TopComp text="Favorites" navigation={navigation} />
		</ScrollView>
	);
};

export default Favorites;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});
