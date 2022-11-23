import { TouchableOpacity, Image, StyleSheet } from "react-native"
import grayStar from '../assets/estrelaCinza.png'
import star from '../assets/estrela.png'

export default function Star({ onPress, disabled, isFilled, big }) {

    const styles = stylesFunction(big)

    const getImage = () => {
        if (isFilled) {
            return star
        }
        return grayStar
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
        >
            <Image
                style={styles.star}
                source={getImage()}
            />
        </TouchableOpacity>
    )
}

const stylesFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2,
    },

})
