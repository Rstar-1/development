import React from "react";

const ProgressBar = ({ value = 0, label = "Progress", maxValue = 100 }) => {
  const progressValue =
    maxValue > 0 ? Math.min((value / maxValue) * 100, 100) : 0;
  return (
    <div style={styles.container}>
      <p className="fsize13 textdark font-500">
        {label}: <span className="textprimary">{progressValue}%</span>
      </p>
      <div style={styles.bar}>
        <div
          style={{
            ...styles.progress,
            width: `${progressValue}%`,
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "500px",
  },
  bar: {
    width: "100%",
    height: "8px",
    backgroundColor: "#f2f2f2",
    overflow: "hidden",
    borderRadius: "10px",
    margin: "5px 0px",
    position: "relative",
  },
  progress: {
    height: "100%",
    backgroundColor: "var(--primary2)",
    transition: "width 0.3s ease-in-out",
  },
};

export default ProgressBar;
