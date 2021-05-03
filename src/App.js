import './App.css';
import MapWrapped from './components/googlemap/Googlemap'

function App() {
  return (
    <div style={{ width:'100vw', height:'100vh' }}>
      <MapWrapped googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCOXNLRm61n0_-7p0hAnsKdqObN0vTt41s`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default App;