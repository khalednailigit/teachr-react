function NumberedCircle({ numbering }) {
  const styles = {
    width: "4rem",
    aspectRatio: "1/1",
    border: "2px solid #4C8DF5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    fontSize: "2rem",
    fontWeight: 500,
    color: "#4C8DF5",
  };
  return <div style={styles}>{numbering}</div>;
}

export default NumberedCircle;
