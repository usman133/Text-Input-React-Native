import React, {useState} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'


const MyTextInput = (props) => {
    console.log("props", props)
    const {
        placeholder = ""
    } = props

    const [value, setValue] = useState()

    return(
        <TextInput
        value={value}
        onChangeText={(value) => setValue(value)}
        placeholder={placeholder}
        style={styles.input}
      />
    )

}

const styles = StyleSheet.create({
       input: {
      width: 200,
      height: 44,
      padding: 10,j,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  }); 

export default MyTextInput