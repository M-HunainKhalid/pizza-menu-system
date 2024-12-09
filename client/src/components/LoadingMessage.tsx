import { memo } from "react";

interface LoadingMessageProps {
  message?: string;
}

const LoadingMessage = memo(
  ({ message = "Loading, please wait..." }: LoadingMessageProps) => (
    <div className="loading-container" role="status" aria-live="polite">
      <p className="loading">{message}</p>
    </div>
  )
);

export default LoadingMessage;
