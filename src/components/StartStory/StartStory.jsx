import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './StartStory.css';

const StartStory = () => {
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
    } = useSpeechRecognition();
const startListening = () => SpeechRecognition.startListening({ continuous: true });

useEffect(() => {
  if (finalTranscript !== '') {
    console.log('Got the final result:', finalTranscript);
  }
}, [interimTranscript, finalTranscript]);


if (!browserSupportsSpeechRecognition) {
  return <span>Browser doesn't support speech recognition.</span>;
}

  return (
    <div className="card" style={{ padding: 10 }}>
      <div className="card-header">
        <h1>Record a story</h1>
      </div>
      <div className="card-body">
        <ul style={{ padding: 10 }}>
          <li>Press Start to begin recording and the microphone will record continuously.</li>
          <li>Press Stop and the recording will pause until it is reset.</li>
          <li>Press Reset to clear the transcript.</li>
          <li>Make sure to copy the text from the box into the correct input below!</li>
        </ul>
        <h5 style={{ padding: 10 }}>Microphone: {listening ? 'on' : 'off'}</h5>
        <button style={{ margin: 3 }} onClick={SpeechRecognition.startListening}>Start</button>
        <button style={{ margin: 3 }} onClick={SpeechRecognition.stopListening}>Stop</button>
        <button style={{ margin: 3 }} onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Title:</label>
          <input class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
        <label for="exampleFormControlTextarea1" class="form-label">Story:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
            
          </textarea>
      </div>
    </div>
  );
};

export default StartStory;