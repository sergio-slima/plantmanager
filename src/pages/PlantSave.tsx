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
import { Button } from '../components/Button';
import waterdrop from '../assets/waterdrop.png';
import colors from '../styles/colors';

export function PlantSave() {
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
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

            <View style={StyleSheet.controller}>
                <View style={styles.tipContainer}>
                    <Image 
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </View>
                <Text style={styles.alertLabel}>
                    Escolha um horário:
                </Text>
                <Button
                    title= "Cadastrar planta"
                    onPress={() => {}}
                />                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    }
});