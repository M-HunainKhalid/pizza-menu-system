import LoadingMessage from "components/LoadingMessage";
import ErrorMessage from "components/ErrorMessage";
import { memo, ReactNode } from "react";

interface LoadingErrorWrapperProps {
  isLoading: boolean;
  isError: boolean;
  loadingMessage?: string;
  errorMessage?: string;
  children: ReactNode;
}

const LoadingErrorWrapper = memo(
  ({
    isLoading,
    isError,
    loadingMessage = "Loading, please wait...",
    errorMessage = "An error occurred.",
    children,
  }: LoadingErrorWrapperProps) => {
    if (isLoading) {
      return <LoadingMessage message={loadingMessage} />;
    }

    if (isError) {
      return <ErrorMessage message={errorMessage} />;
    }

    return <>{children}</>;
  }
);

export default LoadingErrorWrapper;
