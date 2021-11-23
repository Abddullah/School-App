
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Card from '../Component/card'
import axios from 'axios';

export default function SchoolList(props) {
    const [schoolList, setschoolList] = useState([])

    useEffect(() => {
        fetchSchoolList()
    }, []);

    const fetchSchoolList = () => {
        var options = {
            method: 'GET',
            url: `https://data.cityofnewyork.us/resource/23z9-6uk9.json`,
            headers: { 'cache-control': 'no-cache', "Allow-Cross-Origin": '*', },
        }
        axios(options)
            .then(result => {
                setschoolList(result.data)
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR',)
            })
    }

    return (
        <>
            <View style={styles.tab}>
                <View style={styles.tab_Bars}>
                    <Text style={styles.header_Text}>SCHOOL LISTS</Text>
                </View>
            </View>
            <View style={styles.container}>
                {
                    (schoolList.length) ? (
                        <FlatList
                            data={schoolList}
                            renderItem={(list) => {
                                return (
                                    <Card list={list.item} nav={props.navigation} />
                                )
                            }}
                        />
                    ) :
                        <View style={styles.loader}>
                            <ActivityIndicator size="large" color="brown" />
                            <Text>Loading...</Text>
                        </View>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tab: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff"
    },
    tab_Bars: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: 'brown'
    },
    container: {
        flex: 9,
    },
    header_Text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
