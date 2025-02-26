import { ErrorHandlrContainer } from "./styles";

 type FallbackProps = {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
};

export default function ErrorHandller({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <ErrorHandlrContainer>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </ErrorHandlrContainer>
  );
}