import { View, Text, ScrollView, TextInput} from 'react-native';
import { Link } from 'expo-router';
import BuppyComponent from './buppy';
import styles from './styles';


export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BuppyComponent/>
        <Text>What is your favorite course?</Text>
        <TextInput 
          style={styles.input}
          defaultValue="Dinner :)"
          clearTextOnFocus={true}/>
      </View>

      <View style={styles.container}>
        <Text style={styles.header}>
          {"\n"}Core Requirements
        </Text>
        <ul>
          <li>CS 504 Software Engineering</li>
          <li>CS 506 Programming for Computing</li>
          <li>CS 519 Cloud Computing Overview</li>
          <li>AI 520 Natural Language Processing for AI</li>
          <li>CS 547 Secure Systems and Programs</li>
          <li>CS 622 Discrete Math and Algorithms for Computing</li>
          <li>AI 510 Artificial Intelligence in Cloud Computing</li>
          <li>DS 620 Machine Learning & Deep Learning</li>
        </ul>

        <Text style={styles.header}>
          Depth of Study
        </Text>
        <ul>
          <li>CS 624 Full-Stack Development Mobile App</li>
          <li>CS 628 Full-Stack Development Web Application</li>
        </ul>

        <Text style={styles.header}>
          Capstone Course
        </Text>
        <ul>
          <li>CS 687 Computer Science Capstone</li>
        </ul>

        <Text>
          The full list of available courses may be found{' '}
          <Link style={styles.link} 
                href="https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/">here</Link>.
        </Text>
      </View>
    </ScrollView>
  );
}