import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { ChartContextProvider } from "./context/ChartContext";

function App() {
  return (
    <div className="App">
      <ChartContextProvider>
        <Dashboard />
      </ChartContextProvider>
    </div>
  );
}

export default App;
