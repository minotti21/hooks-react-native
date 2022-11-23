import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from "./Star";

export default function Stars({
    quantity: oldQuantity,
    editable,
    big
}) {

    const [quantity, setQuantity] = useState(oldQuantity)

    const RenderStars = () => {
        const starList = []
        for (let i = 0; i < 5; i++) {

            starList.push(
                <Star
                    onPress={() => setQuantity(i + 1)}
                    disabled={!editable}
                    big={big}
                    isFilled={i < quantity}
                    key={i}
                />
            )
        }

        return starList
    }

    return (
        <View style={styles.stars}>
            <RenderStars />
        </View>

    )
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row',
    }
})
