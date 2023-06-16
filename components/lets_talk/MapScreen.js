import ReactMapGL, { Marker } from "react-map-gl";

const MapboxMap = () => {
  const viewport = {
    latitude: "12.915901",
    longitude: "77.598842",
    zoom: 12,
  };

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1Ijoic3dhcG9jaGFuIiwiYSI6ImNsaXZxNGdncDBrcmMzY28ydTR2ZjNwOTUifQ.1u2vqo2P408JEpS_PKIj1g"
    >
      <Marker
        latitude={"12.915901"}
        longitude={"77.598842"}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div>Marker</div>
      </Marker>
    </ReactMapGL>
  );
};

export default MapboxMap;
