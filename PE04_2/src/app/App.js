import { Component } from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import ProfileCard from "./ProfileCard"

const userImage = require("../../assets/images/user.png");

export default class App extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.flexContainer}>
                        <ProfileCard 
                            image={userImage}
                            name={"Carl"}
                            occupation={"Compensated Anarchist"}
                            description={"Spends a lot of time reading a cookbook of goblin recipes."}
                        />
                        <ProfileCard 
                            image={userImage}
                            name={"Elle McGibbons"}
                            occupation={"Hailstorm Queen"}
                            description={"Elle is an elderly lady who transformed into an ice fairy to cure her dementia. She is the coolest."}
                        />
                    </View>
                    <View style={styles.flexContainer}>
                        <ProfileCard 
                            image={userImage}
                            name={"Princess Donut"}
                            occupation={"Former Child Actor"}
                            description={"GC, BWR, NW Princess Donut the Queen Anne Chonk is an award-winning Persian cat. She has a pet dinosaur named Mongo."}
                        />
                        <ProfileCard 
                            image={userImage}
                            name={"Prepotente"}
                            occupation={"Profane Vitiate"}
                            description={"Prepotente is a goat who received a huge intelligence boost after eating a Pet Biscuit. Known to occasionally scream at random."}
                        />
                    </View>
                    <View style={styles.flexContainer}>
                        <ProfileCard 
                            image={userImage}
                            name={"Katia Grimmsdottir"}
                            occupation={"Monster Truck Driver"}
                            description={"Katia is a talented shapeshifter who can manually reshape her own mass, including anything she's holding. Formerly an art history professor."}
                        />
                        <ProfileCard 
                            image={userImage}
                            name={"Imani C"}
                            occupation={"Fire Spiritualist"}
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