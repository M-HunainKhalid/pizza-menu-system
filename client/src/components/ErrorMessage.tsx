import { memo } from "react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = memo(
  ({ message = "An error occurred." }: ErrorMessageProps) => (
    <div className="error-container" role="alert" aria-live="assertive">
      <p className="error">{message}</p>
    </div>
  )
);

export default ErrorMessage;
