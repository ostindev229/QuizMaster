import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = ({ duration, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div>
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader">load</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Loader;
