import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";


const App = () => {
    const [location, setLocation] = useState({latitude: null})
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLocation({latitude: position.coords.latitude}),
            err => setErrorMessage(err.message)
        )
    }, [])


    if (!errorMessage && location.latitude) {
        return <SeasonDisplay lat={location.latitude}/>
    }

    if (errorMessage && !location.latitude) {
        return <div>Error: {errorMessage}</div>
    }

    return <Loading message={'Please accept location request'}/>
}
ReactDOM.render(<App/>, document.getElementById('root'));


