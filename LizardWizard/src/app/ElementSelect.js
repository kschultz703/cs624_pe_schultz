import { Component } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import ElementCard from "./ElementCard";
import Heading from "./Heading";

const fireIcon = require("../../assets/images/fire.png");
const waterIcon = require("../../assets/images/wave.png");
const lightIcon = require("../../assets/images/sun.png");
const shadowIcon = require("../../assets/images/moon.png");
const arcaneIcon = require("../../assets/images/magic.png");
const natureIcon = require("../../assets/images/forest.png");

const fireDescription = "Fire Wizards specialize in combat. They took \"don't fight fire with fire\" as a personal challenge.";
const waterDescription = "Water Wizards are extremely versatile. They can attack with ice spells, and heal themselves or their allies with cleansing water.";
const lightDescription = "Light Wizards are able to bend the light to create illusions, or even become invisible.";
const shadowDescription = "Shadow Mages are an elusive bunch, able to summon a variety of demons to help them. Some may read the future in the stars.";
const arcaneDescription = "Arcane Wizards are incredible scholars, constantly pushing the boundaries of known magic. They excel at teleportation and conjuration.";
const natureDescription = "Nature Wizards can control the earth, the air, and plant life. Exceptionally talented individuals are able to shapeshift.";

// TODO: Figure out why flexContainer is offcenter.
export default class ElementSelect extends Component {
    render() {
        return (
            <ScrollView>
                <Heading headerText="What type of magic would you like to study?"/>
                <View style={styles.container}>
                    <View style={styles.flexContainer}>
                        <ElementCard 
                            image={fireIcon}
                            name={"Fire"}
                            description={fireDescription}
                        />
                        <ElementCard 
                            image={lightIcon}
                            name={"Light"}
                            description={lightDescription}
                        />
                        <ElementCard 
                            image={arcaneIcon}
                            name={"Arcane"}
                            description={arcaneDescription}
                        />
                    </View>
                    <View style={styles.flexContainer}>
                        <ElementCard 
                            image={waterIcon}
                            name={"Water"}
                            description={waterDescription}
                        />
                        <ElementCard 
                            image={shadowIcon}
                            name={"Shadow"}
                            description={shadowDescription}
                        />
                        <ElementCard 
                            image={natureIcon}
                            name={"Nature"}
                            description={natureDescription}
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
        width: 700,
        height: 350,
        margin: 50,
        flexDirection: 'row'
    },
});