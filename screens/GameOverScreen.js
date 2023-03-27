import { StyleSheet, View } from "react-native";
import InstructionText from "../components/ui/InstructionText";

function GameOverScreen() {
    return <View style={styles.container}>
        <InstructionText>The game is Over!</InstructionText>
    </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});