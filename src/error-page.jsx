import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    const errorpage = useNavigate()


    return (
        <div id='error-page'>
            <h1>Ooops!</h1>
            <p> Nothing To see here <br /> Sorry, unexpected error has occured.
                <i>
                    {error.statusText || error.message}
                </i> <br />
                {" "}

                <button onClick={() => errorpage("/")}> Go back To the Home Page</button>

            </p>
        </div>
    )
}

export default Errorpage