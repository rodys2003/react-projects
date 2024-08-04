import { useState } from "react";
import "./App.css";
import { MyRoutes } from "./routes/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="title">
        <h1>🍿Películas🍿</h1>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
