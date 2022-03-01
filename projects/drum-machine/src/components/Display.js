export const Display = (props) => {
  const styles = {
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <p>
        <b>{props.selectedSoundName}</b>
      </p>
    </div>
  );
};
