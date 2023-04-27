import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [content, setContent] = useState('0');

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.text}>
          {content}
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.buttonRow}>
          <View style={styles.button} >
            <Text style={styles.text}>AC</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>+/-</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>%</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>/</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button} >
            <Text style={styles.text}>7</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>8</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>9</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>X</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>-</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>+</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Text style={styles.text}>{'<-'}</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>0</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>.</Text>
          </View>
          <View style={styles.button} >
            <Text style={styles.text}>=</Text>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex:1
  },
  buttonSection: {
    flexDirection: 'column',
     flex: 6,
    width: '100%',
    gap: 10,
    backgroundColor: '#335'
  },
  buttonRow: {
    flexDirection: 'row',
    backgroundColor: '#335',
    flex: 1,
    gap: 10
  },
  button: {
    flex: 1,
    color: 'white',
    backgroundColor: '#333',
    borderRadius: 25,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600
  },
  display: {
    color: 'white',
    backgroundColor: 'black',
    flex: 4,
    width: '100%'
  }

});
