
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function Card({ list, nav }) {
    return (
        <View style={styles.card}>
            <View style={styles.text_wraper}>
                <Text style={[styles.details_Text, { fontSize: 20, color: '#000000', textAlign: 'center' }]}>{list.school_name}</Text>
            </View>
            <View style={styles.text_wraper}>
                <Text style={styles.heading_Text}>Campus:</Text>
                <Text style={styles.details_Text}>{list.campus_name ? list.campus_name : 'N/a'}</Text>
            </View>
            <View style={styles.text_wraper}>
                <Text style={styles.heading_Text}>Phone:</Text>
                <Text style={styles.details_Text}>{list.phone_number ? list.phone_number : 'N/a'}</Text>
            </View>
            <View style={styles.text_wraper}>
                <Text style={styles.heading_Text}>Location:</Text>
                <Text style={styles.details_Text}>{list.location ? list.location : 'N/a'}</Text>
            </View>
            <TouchableOpacity
                style={styles.view_Details}
                onPress={() => { nav.navigate('SchoolDetails', { list: list }) }}
            >
                <Text style={{ fontWeight: 'bold', color: 'white' }}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        marginVertical: 10,
        marginHorizontal: '2.5%',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#F1EBEB',
        borderRadius: 5,
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
    view_Details: {
        marginTop: 10,
        marginBottom: 10,
        width: '95%',
        height: 35,
        marginHorizontal: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'brown'
    }
});
