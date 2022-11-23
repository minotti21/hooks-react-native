import { useMemo, useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stars from "../../../components/Stars";

const distanceInMeters = (distance) => {
    return `${distance}m`
}

export default function Producer({ name, image, distance, stars }) {

    const [selected, toggleSelected] = useReducer(
        (selected) => !selected,
        false
    )

    const distanceText = useMemo(() => distanceInMeters(distance),[distance]) 

    return (
        <TouchableOpacity
            onPress={toggleSelected}
            style={styles.card}
        >
            <Image
                style={styles.image}
                source={image}
                accessibilityLabel={name}
            />
            <View style={styles.info}>
                <View>
                    <Text style={styles.name}>{name} </Text>
                    <Stars
                        editable={selected}
                        big={selected}
                        quantity={stars}
                    />
                </View>

                <Text style={styles.distance}>{distanceText}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4
    },

    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },

    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },

    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },

    distance: {
        fontSize: 12,
        lineHeight: 19,
    }
})
