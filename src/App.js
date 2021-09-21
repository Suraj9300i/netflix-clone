import "./App.css";
import Banner from "./Banner";
import requests from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Banner url={requests.trendingmovies}></Banner>
    </div>
  );
}

export default App;
