import React, { useRef } from "react";
import { BrowserBarcodeReader } from "@zxing/library";

const BarcodeScanner = () => {
    const videoRef = useRef(null);

    const startScanner = () => {
        const codeReader = new BrowserBarcodeReader();
        codeReader
            .decodeFromInputVideoDevice(undefined, "video")
            .then((result) => {
                console.log("Found barcode: ", result.text);
                // Lakukan sesuatu dengan hasil pemindaian di sini
            })
            .catch((err) => console.error("Error: ", err));
    };

    return (
        <div>
            <video ref={videoRef} id="video" width="300" height="200"></video>
            <button onClick={startScanner}>Start Scanner</button>
        </div>
    );
};

export default BarcodeScanner;
