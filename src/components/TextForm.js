import React, { useState, useEffect, useRef } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const [timerRunning, setTimerRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const timerRef = useRef(null);

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text has been converted to UpperCase", "success");
    };

    const handleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text has been converted to LowerCase", "success");
    };

    const handleCopy = () => {
        let textarea = document.getElementById("textbox");
        textarea.select();
        textarea.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(textarea.value);
        props.showAlert("Your text has been copied", "success");
    }

    const handleOnChange = (event) => {
        if (!timerRunning) {
            startTimer();
        }
        setText(event.target.value);
    };

    const startTimer = () => {
        setTimerRunning(true);
        timerRef.current = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1000);
    };

    const stopTimer = () => {
        setTimerRunning(false);
        clearInterval(timerRef.current);
    };

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    const getWordCount = () => {
        const words = text.trim().split(/\s+/);
        return words.filter(word => word !== '').length;
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>{props.heading}</h2>
                <div className="mb-4">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="textbox"
                        rows="8"
                        style={{ color: props.mode === "dark" ? "white" : "#26354a" }}
                    ></textarea>
                </div>
                <button
                    className="btn btn-outline-success mx-2 custom-btn"
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-outline-success mx-2 custom-btn"
                    onClick={handleLowClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-outline-success mx-2 custom-btn"
                    onClick={handleCopy}
                >
                    Copy Text
                </button>
            </div>
            <div className="container my-4" style={{ color: props.mode === "dark" ? "white " : "black" }}>
                <h1>Your text summary</h1>
                <p>{getWordCount()} words and {text.length} characters</p>
                <p>{0.008 * getWordCount()} minutes read</p>
                <h2>Preview your text here</h2>
                <p>{text}</p>
                <div>
                    <h2>Timer</h2>
                    <p>Elapsed Time: {elapsedTime} seconds</p>
                    <button
                        className="btn btn-outline-success mx-2 custom-btn" // Keeping the same style as other buttons
                        onClick={timerRunning ? stopTimer : startTimer}
                    >
                        {timerRunning ? "Stop Timer" : "Start Timer"}
                    </button>
                </div>
            </div>
        </>
    );
}
 