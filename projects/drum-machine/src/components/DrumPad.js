import { useEffect } from "react";

export const DrumPad = (props) => {
  const { sound, soundSelected } = props;
  const containerDivStyles = {
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "70px",
    height: "70px",
    margin: "10px",
  };
  useEffect(() => {
    function keyDownCallBack(event) {
      if (event.keyCode === sound.keyCode) {
        soundSelected(event, sound);
      }
    }
    window.addEventListener("keydown", keyDownCallBack);
    return function () {
      window.removeEventListener("keydown", keyDownCallBack);
    };
  }, []);
  return (
    <div
      style={containerDivStyles}
      onClick={(e) => soundSelected(e, sound)}
    >
      <p>
        <b>{sound.keyTrigger}</b>
      </p>
      <audio id={sound.id} src={sound.url}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};
