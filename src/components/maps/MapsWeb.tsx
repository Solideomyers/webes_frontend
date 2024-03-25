import GoogleMapReact from 'google-map-react';

interface Props {
  text: string;
  lat: number;
  lng: number;
}
const AnyReactComponent = ({ text }: Props) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={38.64119601176648}
          lng={-3.4668369470306075}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>
  );
}
