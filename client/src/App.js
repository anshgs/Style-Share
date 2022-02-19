import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function App() {
  const [data, setData] = React.useState("");

  const fetchData = React.useCallback(async () => {
    axios
      .get("http://localhost:4000/")
      .then((response) => setData(response.data));
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Main</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/edit">Editor</Link> |{" "}
        <Link to="/style">Style</Link>
      </nav>
    </div>
  );
}

export default App;
