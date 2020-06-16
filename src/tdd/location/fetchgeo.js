const fetchLocation = (onSuccess, onError) => {
    const returnLocation = (position) => {
        const location = {
            lat: position.coords.latitude,
            loc: position.coords.longitude
        };
        onSuccess(location);
    };
    navigator.geolocation.getCurrentPosition(returnLocation, onError);
};