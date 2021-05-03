import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Polyline,
} from "react-google-maps";

const Googlemap = () => {
  const markers = [
    {
      lng: 0.0,
      lat: 51.48,
    },
    {
      lng: 0.0,
      lat: 0.0,
    },
    {
      lng: 78.962883,
      lat: 20.593683,
    },
    {
      lng: -0.1269,
      lat: 51.5295,
    },
    {
      lng: -95.712891,
      lat: 37.09024,
    },
  ];

  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    >
      {markers.map((positionNode, key) => (
        <Marker
          key={key}
          position={{ lat: positionNode.lat, lng: positionNode.lng }}
        />
      ))}
      <Polyline
        path={markers}
        geodesic={true}
        options={{
          strokeColor: "grey",
          strokeOpacity: 0.5,
          strokeWeight: 2
        }}
      />
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(Googlemap));

export default MapWrapped;
