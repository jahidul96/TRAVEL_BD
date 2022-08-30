import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {reuseableStyle} from "./ReuseStyle";
import SeachIcon from "react-native-vector-icons/Feather";
import {COLORS} from "../../COLOR/COLORS";
import PlusIcon from "react-native-vector-icons/FontAwesome";
import BackIcon from "react-native-vector-icons/Ionicons";

export const ButtonComp = ({text, extraStyle, click}) => (
	<TouchableOpacity
		style={[reuseableStyle.buttonWrapper, extraStyle]}
		onPress={click}
		activeOpacity={0.7}
	>
		<Text style={reuseableStyle.btnTextStyle}>{text}</Text>
	</TouchableOpacity>
);

export const Input = ({placeholder, focus, setValue, extraStyle, multi}) => (
	<TextInput
		placeholder={placeholder}
		style={[reuseableStyle.inputStyle, extraStyle]}
		autoFocus={focus}
		onChangeText={(t) => setValue(t)}
		multiline={multi}
	/>
);

export const BackBtn = ({text, navigation, btnStyle}) => (
	<TouchableOpacity
		style={[reuseableStyle.topbackcompWrapper, btnStyle]}
		activeOpacity={0.7}
		onPress={() => navigation.goBack()}
	>
		<BackIcon name="arrow-back" size={20} color={COLORS.darkBlue} />
		<Text style={reuseableStyle.btnText}>{text}</Text>
	</TouchableOpacity>
);

export const TopComp = ({text, navigation}) => (
	<View style={reuseableStyle.topcompStyle}>
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => navigation.goBack()}
		>
			<BackIcon name="arrow-back" size={20} color={COLORS.white} />
		</TouchableOpacity>
		<Text style={reuseableStyle.topCompTextStyle}>{text}</Text>
		<View></View>
	</View>
);

export const Search = ({gotoPage}) => (
	<TouchableOpacity
		style={reuseableStyle.searchWrapper}
		onPress={gotoPage}
		activeOpacity={0.7}
	>
		<Text style={reuseableStyle.searchText}>Search...</Text>
		<View style={reuseableStyle.iconWrapper}>
			<SeachIcon name="search" size={20} color={COLORS.white} />
		</View>
	</TouchableOpacity>
);

export const MoreBtnComp = ({extraStyle, change}) => (
	<View style={[reuseableStyle.moreViewWrapper, change && extraStyle]}>
		<TouchableOpacity
			style={[
				reuseableStyle.SingleDivisionWrapper,
				reuseableStyle.moreViewStyles,
			]}
		>
			<PlusIcon name="plus" color={COLORS.white} size={20} />
		</TouchableOpacity>
	</View>
);
