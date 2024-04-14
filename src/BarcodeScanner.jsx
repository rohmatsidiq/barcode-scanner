import React, { useRef, useState, useEffect } from "react";
import { BrowserBarcodeReader } from "@zxing/library";

const BarcodeScanner = () => {
    const videoRef = useRef(null);
    const codeReader = useRef(null);
    const [resultMessage, setResultMessage] = useState("");

    useEffect(() => {
        codeReader.current = new BrowserBarcodeReader();
        startScanner();

        return () => {
            stopScanner();
        };
    }, []);

    const startScanner = () => {
        if (videoRef.current) {
            codeReader.current
                .decodeFromInputVideoDevice(undefined, "video", (result) => {
                    console.log("Found barcode: ", result.text);
                    showAlert(result.text);
                })
                .catch((err) => console.error("Error: ", err));
        }
    };

    const stopScanner = () => {
        if (codeReader.current) {
            codeReader.current.reset();
        }
    };

    const showAlert = (text) => {
        setResultMessage(text);
    };

    return (
        <div>
            <video ref={videoRef} id="video" width="300" height="200"></video>
            <button onClick={startScanner}>Start Scanner</button>
            {resultMessage !== "" && <h3>{resultMessage}</h3>}
        </div>
    );
};

export default BarcodeScanner;
