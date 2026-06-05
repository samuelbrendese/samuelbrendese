import "./Wave.css";
import Lottie from "lottie-react";
import WaveFile from "./Wave.json"

export default function Wave() {
  return (
        <Lottie animationData={WaveFile} loop={true} />
  );
}