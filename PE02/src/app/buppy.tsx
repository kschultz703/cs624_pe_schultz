import {useState} from 'react';
import { View, Text, Image, Button} from 'react-native';
import Buppy1 from "../../assets/images/Buppy1.jpg";
import Buppy2 from "../../assets/images/Buppy2.jpg";
import styles from './styles';


const Buppy = () => {
    const [isPet, setIsPet] = useState(false)

    return(
        <View style={styles.container}>
            <Text>This is Buppy!</Text>
            <Image 
                source={isPet ? Buppy2 : Buppy1}
                style={{width: 200, height: 200}}
            />
            <Text>She'll help you pick out your favorite classes.</Text>
            <Button
                onPress={() => {
                    setIsPet(true);
                }}
                title={isPet ? "Woof!" : "Press the button to pet Buppy"}
            />
        </View>
    );
}

const BuppyComponent = () => {
    return (
        <>
            <Buppy/>
        </>
    )
}

export default BuppyComponent;