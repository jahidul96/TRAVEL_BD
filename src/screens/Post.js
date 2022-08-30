import {Button, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {TopComp} from "../components/Reuse/Reuse";
import BottomTab from "../components/BottomTab";

const Post = ({navigation}) => {
	const [selectedPage, setSelectedPage] = useState("");
	useEffect(() => {
		setSelectedPage("post");
	}, [selectedPage]);
	return (
		<View style={styles.root}>
			<TopComp text="Post" navigation={navigation} />
			<View style={styles.root}></View>
			<BottomTab
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
		</View>
	);
};

export default Post;

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});
