import logo from "./logo.svg";
import "./App.css";
import SelectCountry from "./Components/SelectCountry";
import LocationSearch from "./LocationSearch/LocationSearch";

function App() {
  return (
    <div className="App">
      <SelectCountry />
      <br/>
      <br/>
      <br/>
      <br/>
      <LocationSearch />
    </div>
  );
}

export default App;
