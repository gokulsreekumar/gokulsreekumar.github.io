import React, { useEffect } from 'react';

// TODO: Add DOM Manipulation to change colour
function ColourButtons() {
    useEffect(() => {
        const accents = [document.querySelector('.nav__color_btn1'), document.querySelector('.nav__color_btn2'), document.querySelector('.nav__color_btn3')];
        accents.forEach((accent, index) => {
            accent.addEventListener('click', () => {
                // console.log(`here${index}`);
                document.body.classList.remove('accent1');
                document.body.classList.remove('accent2');
                document.body.classList.remove('accent3');
                document.body.classList.toggle(`accent${index + 1}`);
            })
        })        
    });
    return (
        <div className="nav__color_btns">
            <button className="nav__color_btn1">
                <i className="fas fa-circle"></i>
            </button>
            <button className="nav__color_btn2">
                <i className="fas fa-circle"></i>
            </button>
            <button className="nav__color_btn3">
                <i className="fas fa-circle"></i>
            </button>
        </div>
    )
}

export default ColourButtons;