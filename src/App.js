import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Home";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <div>{isLoading ? <LoadingScreen /> : <Home />}</div>;
}

export default App;
