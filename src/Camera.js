import React from 'react';
import WebCam from 'react-webcam';
import { Button, Card, CardBody, CardFooter } from 'reactstrap';

function Camera() {
  const ref = React.createRef();
  const capture = () => {
    const imageSrc = ref.current.getScreenshot();
  };
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
  };
  return (
    <Card>
      <CardBody>
        <WebCam
          ref={ref}
          width={500}
          height={500}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      </CardBody>
      <CardFooter>
        <Button color="success" onClick={capture}>
          Capture
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Camera;
