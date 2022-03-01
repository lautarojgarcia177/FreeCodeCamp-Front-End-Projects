import { useState } from "react";
import { Display } from "./components/Display";
import { DrumPad } from "./components/DrumPad";

const soundBank = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [selectedSound, setSelectedSound] = useState(soundBank[0]);
  const containerDivStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: "20px",
    border: "5px solid orange",
  };
  const drumPadsListContainerStyles = {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
  };
  function soundSelected(event, sound) {
    console.log(event, sound);
  }
  const drumPadsList = soundBank.map((sound, index) => (
    <DrumPad sound={sound} key={index} soundSelected={soundSelected} />
  ));
  return (
    <div id="drum-machine" style={containerDivStyles}>
      <div style={drumPadsListContainerStyles}>{drumPadsList}</div>
      <div style={{ padding: "20px" }}>
        <Display selectedSoundName={selectedSound ? selectedSound.id : ""} />
      </div>
    </div>
  );
}

export default App;
