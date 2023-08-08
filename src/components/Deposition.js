import React, { useState } from "react";
import "./chatroom.css";
function Deposition() {
  const [loading, setLoading] = useState(false);
  const Depositionurl =
    "https://t86a6l5lk4.execute-api.us-east-1.amazonaws.com/production";
  const DepositionHandleChnage = async (e) => {
    setLoading(true);
    console.log(e.target.value);
    
  };
 
  return (
    <>
      <div className="DepositionContainer">
        <div className="Depositionheader">
          <p>Disposition</p>
        </div>
        {loading ? (
          <div className="DepositionCode">Loading...</div>
        ) : (
          <div className="DepositionCode">
            <button value="Cancel" onClick={(e) => DepositionHandleChnage(e)}>
              Cancel
            </button>
            <button
              value="Change or Modification"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Change or Modification
            </button>
            <button
              value="Pre-booking"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Pre-booking
            </button>
            <button
              value="Escalation During Travel"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Escalation During Travel
            </button>
            <button
              value="Complaint Post Travel"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              Complaint Post Travel
            </button>
            <button
              value="General Question"
              onClick={(e) => DepositionHandleChnage(e)}
            >
              General Question
            </button>
            <button value="Irop" onClick={(e) => DepositionHandleChnage(e)}>
              Irop
            </button>
            <button value="Others" onClick={(e) => DepositionHandleChnage(e)}>
              Others
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Deposition;
