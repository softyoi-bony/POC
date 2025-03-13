import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Loader from '../common/Components/Loadr';
import VisionCamera from '../common/Components/VisionCamera';

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [camera, setCamera] = useState(false);

  const handlePhotoTaken = photoPath => {
    console.log('Photo taken in RegisterScreen:', photoPath);
    setPhoto(photoPath);
  };

  useEffect(() => {
    setTimeout(() => {
      setCamera(true);
    }, 500);
    return setCamera(false);
  }, []);

  const handleRegister = async () => {
    if (!photo) {
      Alert.alert('Error', 'Please take a photo first.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({image: photo}),
        },
      );

      if (response.ok) {
        Alert.alert('Success', 'Photo registered successfully!');
      } else {
        Alert.alert('Error', 'Failed to upload photo.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while uploading.');
    }

    setLoading(false);
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : camera ? (
        <VisionCamera onPhotoTaken={handlePhotoTaken} />
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {textAlign: 'center', fontSize: 16, marginBottom: 10},
  permissionContainer: {alignItems: 'center', padding: 20},
});

export default RegisterScreen;
