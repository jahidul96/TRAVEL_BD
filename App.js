import SignIn from "./src/screens/SignIn";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="auth" component={SignIn} />
				<Stack.Screen name="home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
