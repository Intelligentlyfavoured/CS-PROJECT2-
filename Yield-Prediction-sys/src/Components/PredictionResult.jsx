const PredictionResult = ({ result }) => {
    return (
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Prediction Results</h2>
        <p><strong>Predicted Yield:</strong> {result?.yield} tons per hectare</p>
        <p><strong>Recommended Crop:</strong> {result?.recommendedCrop}</p>
        <p><strong>Weather-Based Advice:</strong> {result?.advice}</p>
      </div>
    );
  };
  
  export default PredictionResult;
  