import { useState } from "react";
import "./App.css";
import { DEFAULT_FILTER, LocationsFilter } from "./components/locations-filter";
import { useFetch } from "./hooks/use-fetch";
import { SelectChangeEvent, Typography } from "@mui/material";

function App() {
  const { data, isLoading, error } = useFetch("/locations");
  const [filterValue, setFilterValue] = useState<string>(DEFAULT_FILTER);

  const onChangeFilter = (e: SelectChangeEvent<string>) => {
    setFilterValue(e.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="app">
      <Typography variant="h5" component="h1">
        Your Fleet
      </Typography>
      <div>
        <LocationsFilter value={filterValue} onChange={onChangeFilter} />
      </div>
    </div>
  );
}

export default App;
