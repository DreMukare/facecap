import React from 'react';
import WebCam from 'react-webcam';
import { Button, Card, CardBody, CardFooter } from 'reactstrap';
import { CameraIcon } from './Icons';
import CaptureModal from './CaptureModal';

function Camera({ toggleClicked }) {
  const [state, set] = React.useState({
    isOpen: false,
    imageSrc: ''
  });

  const setState = next => set(Object.assign({}, state, next));
  const toggle = () => setState({ isOpen: !state.isOpen });
  const ref = React.createRef();
  const capture = () => {
    const imageSrc = ref.current.getScreenshot();
    setState({ imageSrc, isOpen: true });
  };
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
  };
  return (
    <React.Fragment>
      <CaptureModal
        isOpen={state.isOpen}
        toggle={toggle}
        imageSrc={state.imageSrc}
        toggleClicked={toggleClicked}
      />
      <Card>
        <CardBody>
          <WebCam
            ref={ref}
            width={500}
            height={300}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </CardBody>
        <CardFooter>
          <Button color="success" onClick={capture}>
            <CameraIcon /> Capture
          </Button>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}

export default Camera;
