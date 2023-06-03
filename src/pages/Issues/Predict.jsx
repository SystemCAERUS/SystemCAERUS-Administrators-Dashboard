import React, { useState } from "react";
import axios from "axios";

function Predict() {
  const [department, setDepartment] = useState("");
  const [machine, setMachine] = useState("");
  const [predictedRepairer, setPredictedRepairer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      department,
      machine,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", requestData);
      setPredictedRepairer(response.data.predicted_repairer);
      console.log(response)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Repairer Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <label>Machine:</label>
          <input
            type="text"
            value={machine}
            onChange={(e) => setMachine(e.target.value)}
          />
        </div>
        <button type="submit">Predict</button>
      </form>
      {predictedRepairer && (
        <div>
          <h2>Predicted Repairer:</h2>
          <p>{predictedRepairer}</p>
        </div>
      )}
    </div>
  );
}

export default Predict;
