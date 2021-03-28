import React, { Fragment } from 'react';

export const Home = () =>{
    return(
        <Fragment>
            <div className="content">
                <div className="info-box">
                    <h1>Your health,at your fingertips</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                </div>
                <div className="img-box">
                <img src={"./main.png"} />
                </div>
            </div>
        </Fragment>
    )
}