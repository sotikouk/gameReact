import { View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.mainYellow,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberText: {
        color: Colors.mainYellow,
        fontSize: 36,
        //fontWeight: 'bold'
        fontFamily: 'open-sans-bold'
    }
});