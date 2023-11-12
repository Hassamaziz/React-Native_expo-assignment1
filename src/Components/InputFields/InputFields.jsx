import React from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
const Input = props => {
  return (
    <KeyboardAvoidingView>
    <SafeAreaView style={{marginHorizontal: 15, marginVertical: 10}}>
      {props.lable && <Text style={styles.placeHolder}>{props.lable}</Text>}

      <View style={styles.InputView}>
        <Image style={{marginLeft: 10}} source={props.inputImg} />
        <TextInput
          style={[styles.input, {marginLeft: 3}]}
          placeholder={props.placeHolder}
          inputMode="text"
          value={props.name}
          readOnly={props.readOnly}
        />
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputView: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: 'rgba(233, 233, 233, 1)',
    borderWidth: 1,
  },
  placeHolder: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: 'rgba(173, 173, 173, 1)',
  },
  input: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: 'rgba(39, 39, 39, 1)',
    height:51
  },
});