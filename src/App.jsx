import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Frame_shopify from "./componet/Frame_shopify.jsx";
import { Text, LegacyStack, Button } from "@shopify/polaris";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Frame_shopify />
    </>
  );
}

export default App;
