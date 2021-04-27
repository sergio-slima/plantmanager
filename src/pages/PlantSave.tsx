import React from 'react';
import { 
    StyleSheet,
    Alert,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import waterdrop from '../assets/waterdrop.png';

export function PlantSave() {
    return (
        <>
        <View style={styles.container}>
            <SvgFromUri 
                uri=''
                height={150}
                width={150}
            />
            <Text style={styles.plantName}>
                Nome da Planta
            </Text>
            <Text style={styles.plantAbout}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Placeat repellendus ab et voluptate voluptatum ipsum suscipit eum.
            </Text>
        </View>

        <View style={styles.controller}>
            <View style={styles.tipContainer}>
                <Image 
                    source={waterdrop}
                    style={styles.tipName}
                />
                <Text style={styles.tipText}>
                    
                </Text>
            </View>
        </View>
        </>
    )
}