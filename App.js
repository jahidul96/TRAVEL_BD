import SignIn from "./src/screens/SignIn";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Details from "./src/screens/Details";
import Favorites from "./src/screens/Favorites";
import Profile from "./src/screens/Profile";
import Post from "./src/screens/Post";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="auth" component={SignIn} />
				<Stack.Screen name="home" component={Home} />
				<Stack.Screen name="yourSearch" component={Search} />
				<Stack.Screen name="details" component={Details} />
				<Stack.Screen name="favorite" component={Favorites} />
				<Stack.Screen name="profile" component={Profile} />
				<Stack.Screen name="post" component={Post} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
