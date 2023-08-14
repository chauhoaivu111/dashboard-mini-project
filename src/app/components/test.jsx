import React, { useState } from 'react';


const ButtonList = () => {
    const buttons = [
        { text: 'Button 1', index: 1 },
        { text: 'Button 2', index: 2 },
        { text: 'Button 3', index: 3 },
        { text: 'Button 4', index: 4 },
    ];

    const [focusedButton, setFocusedButton] = useState(null);

    const handleButtonClick = (buttonIndex) => {
        if (focusedButton === buttonIndex) {
            setFocusedButton(null); 
        } else {
            setFocusedButton(buttonIndex); 
        }
    };

    return (
        <div className={"buttonList"}>
            {buttons.map((button) => (
                <button
                    key={button.index}
                    className={`${"customButton"} ${focusedButton === button.index ? "stylesTrue" :""}`}
                    onClick={() => handleButtonClick(button.index)}
                >
                    {button.text}
                </button>
            ))}
        </div>
    );
};

export default ButtonList;
