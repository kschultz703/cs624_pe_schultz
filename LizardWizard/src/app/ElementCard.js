import PropTypes from 'prop-types'; 
import { Platform, Image, StyleSheet, Text, View, Button } from 'react-native'; 

const ElementCard = (props) => {

    let image = props.image;
    let name = props.name;
    let description = props.description;

    function selectElement() {
        // TODO: This function should:
        // 1. Confirm the user's element choice.
        // 2. Make some change to the user's custom character. 
        // 3. Redirect to the main home page.
        // 4. AMBITIOUS. Add an equippable wizard hat that matches the element color to the user inventory.
    }

    // TODO: Replace the Button with a TouchableHighlight to improve customization.
    return (
        <View style={styles.cardWrapper}> 
            <View style={styles.cardContainer}>
                <View style={styles.cardImageContainer}>
                    <Image 
                        style={styles.cardImage} 
                        source={image}
                    />
                </View>
                <View style={styles.cardNameContainer}>
                    <Text style={styles.cardName}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>{description}</Text>
                </View>
                <Button 
                    title="Select"
                    onPress={selectElement}
                    color="#7c5aa6"
                />
            </View>
        </View>
    )
};

ElementCard.propTypes = {
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    cardWrapper: {
        flexBasis: "50%",
        maxWidth: "50%",
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: '#d4d1c9',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: "#f5f3ed",
        width: 300,
        height: 400,
    },
    cardImageContainer: {
        alignItems: 'center',
        width: 120,
        height: 120,
        marginTop: 10,
        paddingTop: 10,
    },
    cardImage: {
        width: 150,
        height: 150,
    },
    cardName: {
        color: '#222222',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 50,
        marginBottom: 5,
    },
    cardNameContainer: {
        borderColor: '#222222',
        borderBottomWidth: 1,
        alignItems: 'center',
        width: 100,
    },
    cardDescription: {
        fontStyle: 'italic', 
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        height: 100,
    },
    button: {
        color: "#7c5aa6",
    },
});

export default ElementCard;