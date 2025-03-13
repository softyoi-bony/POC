import React from 'react';
import {
  Alert,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {Route} from '../Constants';
import useCustomNavigation from '../hooks/useCustomNavigation';

const Home = () => {
  const navigation = useCustomNavigation();

  const requestCameraPermission = async () => {
    const permission =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;

    let result = await check(permission);

    if (result === RESULTS.GRANTED) return true;

    if (result === RESULTS.BLOCKED) {
      Alert.alert(
        'Permission Required',
        'Camera access is required to continue. Please enable it in settings.',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Open Settings', onPress: Linking.openSettings},
        ],
      );
      return false;
    }

    // Request permission if not granted
    result = await request(permission);

    if (result === RESULTS.GRANTED) return true;

    if (result === RESULTS.BLOCKED) {
      Alert.alert(
        'Permission Required',
        'Camera access is required to continue. Please enable it in settings.',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Open Settings', onPress: Linking.openSettings},
        ],
      );
    }

    return false;
  };

  const handleNavigation = async screen => {
    if (await requestCameraPermission()) {
      navigation.push(screen);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Home</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation(Route.RegisterScreen)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation(Route.VerifyScreen)}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    width:300
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
