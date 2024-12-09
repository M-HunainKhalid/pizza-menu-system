import { memo } from "react";
import LoadingMessage from "../components/LoadingMessage";

const LoadingFallback = memo(() => (
  <div className="fallback-container ">
    <LoadingMessage message="Loading application, please wait..." />
  </div>
));

export default LoadingFallback;
