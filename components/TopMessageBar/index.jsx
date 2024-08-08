import React from "react";

const TopMessageBar = ({ active, message }) => {
  if (!active) return null;
  return (
    <div
      style={styles.container}
      className={`d-flex align-items-center justify-content-center`}
    >
      <div style={styles.text}>{message}</div>
    </div>
  );
};

const styles = {
  container: {
    height: 50,
    background: "#202325",
  },
  text: {
    textAlign: "center",
    color: "#fff",
  },
};

export default TopMessageBar;
