import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'; 


const ProfileCard = (props) => {
    const { image, name, occupation, description, onPress, showThumbnail } = props;
    let containerStyles = [styles.cardContainer];

    if (showThumbnail) {  
        containerStyles.push(styles.cardThumbnail);
    }

    return (
        <TouchableHighlight style={styles.cardWrapper} onPress={onPress}> 
            <View style={[containerStyles]}>
                <View style={styles.cardImageContainer}>
                    <Image 
                        style={styles.cardImage} 
                        source={image}
                    />
                </View>
                <View>
                    <Text style={styles.cardName}>{name}</Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>{occupation}</Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>{description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

ProfileCard.propTypes = {
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showThumbnail: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
};

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer: {
        width: 150,
        height: 150,
        margin: 10,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
    },
    cardWrapper: {
        flexBasis: "50%",
        maxWidth: "50%",
        padding: 8,
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
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
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
        width: 80,
        height: 80
    },
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
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

export default ProfileCard;