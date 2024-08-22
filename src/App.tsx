import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "./hooks/use-fetch";
import { Typography } from "@mui/material";

function App() {
  const { data, isLoading, error } = useFetch("/locations");

  return (
    <div className="App">
      <Typography variant="h5" component="h1">
        Your Fleet
      </Typography>
    </div>
  );
}

export default App;
