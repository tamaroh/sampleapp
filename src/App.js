import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api", { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res.server))
      .catch((error) => console.log(error));
  }, []);
  return data;
}

export default App;
