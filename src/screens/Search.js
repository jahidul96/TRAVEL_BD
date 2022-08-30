import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Input} from "../components/Reuse/Reuse";
import {COLORS} from "../COLOR/COLORS";
import {reuseableStyle} from "../components/Reuse/ReuseStyle";
import SeachIcon from "react-native-vector-icons/Feather";
import BackIcon from "react-native-vector-icons/Ionicons";

const searchPlaces = [
	{
		id: 1,
		placeName: "HatirZil, Dhaka",
	},
	{
		id: 2,
		placeName: "Potenga Beach, Chittagong",
	},
	{
		id: 3,
		placeName: "Chawkbazar, Rangpur",
	},
	{
		id: 4,
		placeName: "Jaflong, Shylet",
	},
	{
		id: 5,
		placeName: "Hill Top, Rangamati",
	},
];

const Search = ({navigation}) => {
	const [searchText, setSearchText] = useState("");
	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.searchWrapper}>
				<SearchBar
					navigation={navigation}
					setSearchText={setSearchText}
				/>
			</View>

			<ScrollView>
				{searchText ? (
					<View style={styles.searchItemWrapper}>
						{searchPlaces.map((data) => (
							<SearchData value={data} key={data.id} />
						))}
					</View>
				) : (
					<View style={styles.emptyWrapper}>
						<Text
							style={[
								styles.placeName,
								{maxWidth: "100%", fontSize: 14},
							]}
						>
							Type Something to See Suggetions!.
						</Text>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Search;

export const SearchBar = ({navigation, setSearchText}) => (
	<View style={styles.InputWrapper}>
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<BackIcon name="arrow-back" size={20} color={COLORS.darkBlue} />
		</TouchableOpacity>
		<Input
			placeholder={"search..."}
			focus={true}
			setValue={setSearchText}
			extraStyle={styles.inputStyle}
			multi={true}
		/>
		<TouchableOpacity style={reuseableStyle.iconWrapper}>
			<SeachIcon name="search" size={20} color={COLORS.white} />
		</TouchableOpacity>
	</View>
);

const SearchData = ({value}) => (
	<TouchableOpacity
		style={[styles.searchItem, value.id == 1 && {marginTop: 5}]}
	>
		<Text style={styles.placeName}>{value.placeName}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},

	searchWrapper: {
		marginTop: 20,
		width: "100%",
		paddingHorizontal: 10,
	},
	InputWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: 45,
		padding: 10,
		borderTopLeftRadius: 15,
		backgroundColor: COLORS.white,
		elevation: 2,
	},
	inputStyle: {
		width: "73%",
		height: 45,
		fontSize: 15,
	},

	searchItemWrapper: {
		backgroundColor: COLORS.white,
		marginHorizontal: 10,
		marginTop: 2,
	},
	searchItem: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: COLORS.deepGray,
		marginBottom: 8,
	},
	placeName: {
		fontWeight: "700",
		fontSize: 13,
		letterSpacing: 1,
		maxWidth: "55%",
	},
	emptyWrapper: {
		marginTop: 30,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.white,
		elevation: 1,
		padding: 10,
		paddingVertical: 20,
		marginHorizontal: 10,
		borderBottomLeftRadius: 15,
		borderTopRightRadius: 30,
	},
});
