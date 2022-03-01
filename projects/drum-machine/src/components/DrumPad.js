export const DrumPad = (props) => {
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
  return (
    <div
      style={containerDivStyles}
      onClick={(e) => props.soundSelected(e, props.sound)}
    >
      <p>
        <b>{props.sound.keyTrigger}</b>
      </p>
      <audio src={props.sound.url}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};
