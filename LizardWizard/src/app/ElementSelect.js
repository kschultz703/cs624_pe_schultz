import { Component } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import ElementCard from "./ElementCard"

const fire = require("../../assets/images/fire.png");
const water = require("../../assets/images/wave.png");
const light = require("../../assets/images/sun.png");
const shadow = require("../../assets/images/moon.png");
const arcane = require("../../assets/images/magic.png");
const nature = require("../../assets/images/forest.png");

export default class ElementSelect extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.flexContainer}>
                        <ElementCard 
                            image={fire}
                            name={"Fire"}
                            description={"Spends a lot of time reading a cookbook of goblin recipes."}
                        />
                        <ElementCard 
                            image={light}
                            name={"Light"}
                            description={"Elle is an elderly lady who transformed into an ice fairy to cure her dementia. She is the coolest."}
                        />
                        <ElementCard 
                            image={arcane}
                            name={"Arcane"}
                            description={"Katia is a talented shapeshifter who can manually reshape her own mass, including anything she's holding. Formerly an art history professor."}
                        />
                    </View>
                    <View style={styles.flexContainer}>
                        <ElementCard 
                            image={water}
                            name={"Water"}
                            description={"GC, BWR, NW Princess Donut the Queen Anne Chonk is an award-winning Persian cat. She has a pet dinosaur named Mongo."}
                        />
                        <ElementCard 
                            image={shadow}
                            name={"Shadow"}
                            description={"Prepotente is a goat who received a huge intelligence boost after eating a Pet Biscuit. Known to occasionally scream at random."}
                        />
                        <ElementCard 
                            image={nature}
                            name={"Nature"}
                            description={"Imani is a quiet, serious woman who chose to learn magic. She used to be a nurse and prefers to heal, but she also has a giant magic sword."}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    flexContainer: {
        width: 150,
        height: 150,
        margin: 60,
        flexDirection: 'row'
    },
});