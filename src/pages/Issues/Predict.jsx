import React, { useState } from "react";
import axios from "axios";
import "./predict.scss"

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
    <div className="AImodel">
      <form onSubmit={handleSubmit}>
      <h1 className="AImodelTitle">Most Experienced Employee (AI)</h1>
        <div>
          <label className="AImodelLabel">Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <label className="AImodelLabel">Machine:</label>
          <input
            type="text"
            value={machine}
            onChange={(e) => setMachine(e.target.value)}
          />
        </div>
        <button type="submit">Predict</button>
      </form>
      <div className="predictedDetails">
      {predictedRepairer && (
        <div>
          <h2>Predicted Repairer:</h2>
          <p className="AImodelLabel">{predictedRepairer}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Predict;
