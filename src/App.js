import logo from './logo.svg';
import profileImage from './img/Photonabil.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My react app</h1>
     <h2>Author Nabil GHANMI</h2>
     <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
