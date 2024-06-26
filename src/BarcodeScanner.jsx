import React, { useRef, useState } from "react";
import { BrowserBarcodeReader } from "@zxing/library";

const BarcodeScanner = () => {
    const videoRef = useRef(null);
    const [resultMessage, setResultMessage] = useState("");

    const startScanner = () => {
        const codeReader = new BrowserBarcodeReader();
        codeReader
            .decodeFromInputVideoDevice(undefined, "video")
            .then((result) => {
                console.log("Found barcode: ", result.text);
                showAlert(result.text);
                // Lakukan sesuatu dengan hasil pemindaian di sini
            })
            .catch((err) => console.error("Error: ", err));
    };

    const showAlert = (text) => {
        setResultMessage(text);
        startScanner();
    };

    return (
        <div>
            <video ref={videoRef} id="video" width="300" height="200"></video>
            <button onClick={startScanner}>Start Scanner</button>
            {resultMessage != "" && <h3>{resultMessage}</h3>}
        </div>
    );
};

export default BarcodeScanner;
