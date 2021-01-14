import React from 'react';
import { Button } from 'react-native';
import { firebase } from '../firebase';


interface Props {
  navigation: any;
  user: any;
};

const SignInButton: React.FC<Props> = ({ navigation, user }) => (
  user && user.uid
  ? <Button title="Logout" color="#448aff"
      onPress={() => firebase.auth().signOut()}
    />
  : <Button title="SignIn" color="#448aff"
      onPress={() => navigation.navigate('RegisterScreen')}
    />
);

export default SignInButton;
