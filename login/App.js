import React,  {useState} from 'react'
import { Button, View, StyleSheet, Text } from 'react-native';

//Components
import TextInput from './containers/TextInput';

const App = () => {
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()

  const onLoginPressed = () => {

    console.log("button pressed")
  }

  return(
    <View style={styles.container}>
      <TextInput placeholder={"First Name"}/>
      <TextInput placeholder={"Last Name"}/>
    <Button
      title={'Login'}
      style={styles.input}
      onPress={() => onLoginPressed()}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
}); 

export default App