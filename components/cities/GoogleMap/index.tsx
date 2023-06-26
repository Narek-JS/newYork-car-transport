import { Container } from '@/components/ui/container';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import classes from './index.module.css';

const containerStyle = {
  width: '1220px',
  height: '660'
};

const center = {
  lat: 110,
  lng: -138.523
};

const GoogleMapComponent: React.FC = () => {

  return (
    <Container>
      <div className={classes.content}>
        <LoadScript
          googleMapsApiKey="AIzaSyDRgYM3NhMFTlOxjF33laYQWVGOordP4Z4"
        >
          <GoogleMap
            mapContainerStyle={{
              maxHeight: '660px',
              maxWidth: '1220px',
              width: '100%',
              height: '100%'
            }}
            center={center}
            zoom={10}
          >
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </Container>
  )
}
export { GoogleMapComponent };
