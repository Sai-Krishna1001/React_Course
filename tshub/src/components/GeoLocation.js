import React, { useEffect, useState } from 'react'

const GeoLocation = () => {
    const [position, setPositon] = useState(null);

    useEffect(() => {
        const handlePositionChange = (event) => {
            setPositon ({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
            });
        };
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        const watchId = navigator.geolocation.watchPosition(
            handlePositionChange,
            null,
            options
        );
        return () =>{
            navigator.geolocation.clearWatch(watchId);
        }
    },[]);
    return (
        <div>
            {position ? (
                <p>
                    Latitude: {position.latitude}, Longitude: {position.longitude}
                </p>
            ):(
                <p>Loading geolocation....</p>
            )}
        </div>
    );
}

export default GeoLocation
