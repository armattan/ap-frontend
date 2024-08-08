import React, { useState } from "react";

const GDPR = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Logic to handle cookie acceptance
    setIsVisible(false);
    // You can set cookies or local storage here
    localStorage.setItem("cookieConsent", "accepted");
  };

  const handleDecline = () => {
    // Logic to handle cookie decline
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "declined");
  };

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p>
        This website uses cookies to enhance the user experience. Do you accept
        the use of cookies?
      </p>
      <button style={styles.button} onClick={handleAccept}>
        Accept
      </button>
      <button style={styles.button} onClick={handleDecline}>
        Decline
      </button>
    </div>
  );
};

const styles = {
  banner: {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "#202325",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
    zIndex: 999,
    color: "#fff",
  },
  button: {
    margin: "0 10px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "var(--secondary-color)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  },
};

export default GDPR;
