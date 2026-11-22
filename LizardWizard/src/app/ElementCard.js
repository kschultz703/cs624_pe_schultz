import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'; 

const ElementCard = (props) => {
    const [showThumbnail, setShowThumbnail] = useState(true)

    let image = props.image;
    let name = props.name;
    let occupation = props.occupation;
    let description = props.description;
    let containerStyles = [styles.cardContainer];

    if (showThumbnail) {  
        containerStyles.push(styles.cardThumbnail);
    }

    return (
        <TouchableHighlight style={styles.cardWrapper} onPress={() => {setShowThumbnail(!showThumbnail)}}> 
            <View style={[containerStyles]}>
                <View style={styles.cardImageContainer}>
                    <Image 
                        style={styles.cardImage} 
                        source={image}
                    />
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardName}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>{description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

ElementCard.propTypes = {
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const profileCardColor = 'gray';

const styles = StyleSheet.create({
    cardWrapper: {
        flexBasis: "50%",
        maxWidth: "50%",
        marginRight: 150,
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 10
            },
            shadowOpacity: 1
          },
          android: {
            elevation: 15
          }
        })
    },
    cardImageContainer: {
        alignItems: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 10,
        paddingTop: 10,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 10,
            },
            shadowOpacity: 1
          },
          android: {
            borderWidth: 3,
            borderColor: 'black',
            elevation: 15
          }
        })
    },
    cardImage: {
        width: 150,
        height: 150,
    },
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 50,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 5,
            width: 5
        },
        textShadowRadius: 3 
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle: 'italic', 
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    },
    cardThumbnail: {
        transform: [{scale: 0.2}]
    },
});

export default ElementCard;