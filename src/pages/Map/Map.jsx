import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
 const Map = () => {

    const mapStyles = {
        height: "100vh",
        width: "100%",
        flex: "4"
    };

    const defaultCenter = {
        lat: 41.3851, lng:2.1734
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyAOHGk3TfUoE9lpYyBEfLzEktENoVSCmfg'>
            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
        </LoadScript>
    )
}
export default Map;