import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Input from 'bootstrap'
import './StartStory.css';

const StartStory = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="card" style={{ width: 225 }}>
      <div className="card-body">
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default StartStory;