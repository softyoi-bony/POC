import {useIsFocused} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

interface VisionCameraProps {
  onPhotoTaken: () => void;
}

const VisionCamera = ({onPhotoTaken}: VisionCameraProps) => {
  const cameraRef = useRef<Camera>(null);
  const [hasPermission, setHasPermission] = useState(true);
  const isFocused = useIsFocused();
  const [cameraPosition, setCameraPosition] = useState<'back' | 'front'>(
    'back',
  );
  const device = useCameraDevice(cameraPosition);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      onPhotoTaken(photo.path);
    }
  };

  if (!device || !hasPermission)
    return (
      <View style={styles.container}>
        <Text>No Camera Access</Text>
      </View>
    );
    const toggleCamera = () => {
      setCameraPosition(prev => (prev === 'back' ? 'front' : 'back'));
    };
  return (
    <View style={styles.container}>
      {isFocused && (
        <View style={styles.backGround}>
          <View style={styles.backGround1}>
            <Camera
              ref={cameraRef}
              style={{
                height: 300,
                width: 300,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: 'white',
              }}
              device={device}
              isActive={true}
              photo={true}
            />
          </View>
        </View>
      )}
      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <Text style={styles.text}>📸</Text>
      </TouchableOpacity>
      {/* Toggle Camera Button */}
      <TouchableOpacity style={styles.switchButton} onPress={toggleCamera}>
        <Text style={styles.text}>🔄</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'black', height: '100%'},
  captureButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 50,
  },
  text: {fontSize: 24, textAlign: 'center', textAlignVertical: 'top'},
  switchButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 50,
    elevation: 5,
  },
  backGround: {
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    top: '20%',
  },
  backGround1: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 200,
    overflow: 'hidden',
  },
});

export default VisionCamera;
