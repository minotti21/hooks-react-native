import { View, FlatList, StyleSheet, Text } from "react-native";
import Producer from "./Producer";
import useProducers from "../../../hooks/useProducers";
import Button from "../../../components/Button";

const sortListByDistance = (list) => {
    list.sort((a, b) => {
        return a.distance - b.distance
    })

    return list
}

const sortListByName = (list) => {
    list.sort((a, b) => {
        if (a.name < b.name) {
            return -1
        }

        if (a.name < b.name) {
            return 1
        }
        return 0
    })

    return list
}

export default function Producers({ top: Top }) {
    const [title, list, setList] = useProducers()

    const HeaderList = () => {
        return <>
            <Top />
            <Text style={styles.titleButtonArea}>Ordenar por:</Text>
            <View style={styles.buttonArea}>
                <Button
                    onPress={() => {
                        setList((prev) => {
                            const arr = sortListByDistance(prev);
                            return [...arr];
                        })
                    }}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    name={'Distância'}
                />
                <Button
                    onPress={() => {
                        setList((prev) => {
                            const arr = sortListByName(prev);
                            return [...arr]
                        })
                    }}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    name={'Nome'}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
        </>
    }

    return <>
        <FlatList
            data={list}
            renderItem={({ item }) => <Producer {...item} />}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={<HeaderList setList={setList} />}
            ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produtor encontrado...</Text>}
        />
    </>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 12,
        fontWeight: 'bold',
        color: '#464646'
    },

    emptyText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#a3a3a3'
    },

    titleButtonArea: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginVertical: 12,
        fontWeight: 'bold',
        color: '#464646'
    },

    buttonArea: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between'
    },

    button: {
        paddingVertical: 12,
        width: 160,
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 4
    },

    buttonText: {
        fontSize: 18,
        color: '#666',
        fontWeight: 'bold'
    }
})
