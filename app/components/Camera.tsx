"use client"

import React, { useState } from 'react';
import Camera, { FACING_MODES, ImageType } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const CameraComponent: React.FC = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleTakePhoto = async (dataUri: string) => {
    // Do stuff with the photo...
    console.log('Photo taken:', dataUri);
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ photoData: dataUri }),
      });
      console.log(response)
    } catch (e) {
      console.error(e);
    }
    setIsCameraActive(false); // Optionally, deactivate the camera after taking a photo
  };

  const handleStartCamera = () => {
    setIsCameraActive(true);
  };

  return (
    <div>
      {isCameraActive ? (
        <Camera
          onTakePhoto={(dataUri: string) => handleTakePhoto(dataUri)}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          isImageMirror={false}
          isMaxResolution={true}
          imageCompression={0.97}
          isDisplayStartCameraError={true}
          sizeFactor={1}
        />
      ) : (
        <button onClick={handleStartCamera}>Start Camera</button>
      )}
    </div>
  );
};

export default CameraComponent;
