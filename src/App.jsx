import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BarcodeScanner from "./BarcodeScanner";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Barcode Scanner</h1>
            <BarcodeScanner />
        </>
    );
}

export default App;
