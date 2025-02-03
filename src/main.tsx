import ReactDOM from "react-dom/client"; // Correct for React 18+
import App from "./App"; // Make sure the path is correct

const rootElement = document.getElementById("root"); // Find the root div in HTML
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root with React 18 API
  root.render(<App />); // Render the App component into the root element
} else {
  console.error("Root element not found!");
}
