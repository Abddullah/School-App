
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function SchoolDetails(props) {
    const { list } = props.route.params;
    const [dbn, setdbn] = useState([])
    const [isLoader, setisLoader] = useState(false)

    useEffect(() => {
        fetchDbnDetails()
    }, []);

    const fetchDbnDetails = () => {
        setisLoader(true)
        var options = {
            method: 'GET',
            url: `https://data.cityofnewyork.us/resource/q52u-2g8j.json?dbn=${list.dbn}`,
            headers: { 'cache-control': 'no-cache', "Allow-Cross-Origin": '*', },
        }
        axios(options)
            .then(result => {
                console.log(result, 'result')
                setdbn(result.data)
                setisLoader(false)
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR',)
            })
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.header_back_button}
                    onPress={() => { props.navigation.goBack() }}
                >
                    <Image source={require('./../assets/ArrowLeft.png')}
                        style={{ height: "35%", width: "36%",marginLeft:20, }}
                    />
                </TouchableOpacity>
                <View style={styles.header_Flex}>
                    <Text style={styles.header_Text}>SCHOOL DETAILS</Text>
                </View>
            </View>
            <View style={styles.details}>
                {
                    (!isLoader) ? (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.text_wraper}>
                                <Text style={[styles.details_Text, { fontSize: 20, color: '#000000', textAlign: 'center' }]}>{list.school_name}</Text>
                            </View>
                            {
                                dbn.length != 0 &&
                                <>
                                    <View style={styles.text_wraper}>
                                        <Text style={styles.heading_Text}>Test Tackers: </Text>
                                        <Text style={styles.details_Text}>{dbn[0].num_of_sat_test_takers}</Text>
                                    </View>
                                    <View style={styles.text_wraper}>
                                        <Text style={styles.heading_Text}>Sat Critical Reading Avg Score: </Text>
                                        <Text style={styles.details_Text}>{dbn[0].sat_critical_reading_avg_score}</Text>
                                    </View>
                                    <View style={styles.text_wraper}>
                                        <Text style={styles.heading_Text}>Sat Math Avg Score: </Text>
                                        <Text style={styles.details_Text}>{dbn[0].sat_math_avg_score}</Text>
                                    </View>
                                    <View style={styles.text_wraper}>
                                        <Text style={styles.heading_Text}>Sat Writing Avg Score: </Text>
                                        <Text style={styles.details_Text}>{dbn[0].sat_writing_avg_score}</Text>
                                    </View>
                                </>
                            }
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Campus: </Text>
                                <Text style={styles.details_Text}>{list.campus_name ? list.campus_name : 'N/a'}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Email: </Text>
                                <Text style={styles.details_Text}>{list.school_email}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Phone: </Text>
                                <Text style={styles.details_Text}>{list.phone_number}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Fax: </Text>
                                <Text style={styles.details_Text}>{list.fax_number}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Subway: </Text>
                                <Text style={styles.details_Text}>{list.subway}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Location: </Text>
                                <Text style={styles.details_Text}>{list.location}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Start Time: </Text>
                                <Text style={styles.details_Text}>{list.start_time}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Total Student: </Text>
                                <Text style={styles.details_Text}>{list.total_students}</Text>
                            </View>
                            <View style={styles.text_wraper}>
                                <Text style={styles.heading_Text}>Description: </Text>
                                <Text style={styles.details_Text}>{list.prgdesc1}</Text>
                            </View>
                        </ScrollView>
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
    header: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomWidth: 3,
        borderBottomColor: 'brown'
    },
    header_back_button: {
        flex: 1.5,
        justifyContent: "center",
        alignItems: "center",
    },
    header_Flex: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    header_Text: {
        fontWeight: 'bold',
        fontSize: 18,
        left: '-8%',
        color: '#000000',
    },
    details: {
        flex: 8,
        padding: 20,
        backgroundColor: 'white'

    },
    text_wraper: {
        padding: 10,
        borderBottomColor: '#E2E0E0',
        borderBottomWidth: 0.5,
    },
    heading_Text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14
    },
    details_Text: {
        fontWeight: 'bold',
        color: '#989494',
        fontSize: 12
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
