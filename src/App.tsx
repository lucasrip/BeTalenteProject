import { ErrorBoundary } from "react-error-boundary";
import ErrorHandller from "./components/ErrorHandller";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
function logErrorToService(error: Error, info: React.ErrorInfo) {
  console.error("Caught an error:", error, info);
}




function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorHandller}
      onError={logErrorToService}
    >
      <GlobalStyle />
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
