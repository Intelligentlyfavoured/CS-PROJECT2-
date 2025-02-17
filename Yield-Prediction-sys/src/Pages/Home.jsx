import { useState } from "react";
import InputForm from "../Components/InputForm";
import PredictionResult from "../Components/PredictionResult";

const Home = () => {
  const [prediction, setPrediction] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold"> Please fill out this form</h1>
      <InputForm onPredict={setPrediction} />
      {prediction && <PredictionResult result={prediction} />}
    </div>
  );
};

export default Home;
