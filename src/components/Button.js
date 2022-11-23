import { Text, TouchableOpacity, View } from "react-native";


export default function SortList({ name, onPress, buttonStyle, textStyle }) {
    return (
        <View>
            <TouchableOpacity  onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}
