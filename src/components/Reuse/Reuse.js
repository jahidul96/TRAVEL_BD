import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {reuseableStyle} from "./ReuseStyle";
import SeachIcon from "react-native-vector-icons/Feather";
import {COLORS} from "../../COLOR/COLORS";

export const ButtonComp = ({text, extraStyle, click}) => (
	<TouchableOpacity
		style={[reuseableStyle.buttonWrapper, extraStyle]}
		onPress={click}
		activeOpacity={0.7}
	>
		<Text style={reuseableStyle.btnTextStyle}>{text}</Text>
	</TouchableOpacity>
);

export const Input = () => (
	<TextInput placeholder="search.." style={reuseableStyle.inputStyle} />
);

export const SearchBar = () => (
	<TouchableOpacity style={reuseableStyle.searchWrapper}>
		<Text style={reuseableStyle.searchText}>Search...</Text>
		<View style={reuseableStyle.iconWrapper}>
			<SeachIcon name="search" size={20} color={COLORS.white} />
		</View>
	</TouchableOpacity>
);
