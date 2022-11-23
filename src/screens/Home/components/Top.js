import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from '../../../assets/logo.png'
import { loadTop } from "../../../services/loadData";

export default function Top() {

const [topData, setTopData] = useState({})

useEffect(() => {
    setTopData(loadTop())
}, [])

    return (
        <View style={styles.top}>
            <Image style={styles.image} source={logo}/>
            <Text style={styles.welcomeText}>{topData.welcomeText}</Text>
            <Text style={styles.subtitle}>{topData.subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    
    image: {
        width: 70,
        height: 28
    },

    welcomeText: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },

    subtitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3',
    }
})

