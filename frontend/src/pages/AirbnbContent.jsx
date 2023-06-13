import NavBar from '../Components/Nav/NavBar'
import PlacesSlider from '../Components/PlacesSlider/PlacesSlider';
import MainContent from '../Components/MainContent/MainContent';

const AirbnbContent = () => {
  return (
    <div className="App">
      <NavBar />
      <PlacesSlider />
      <MainContent />
    </div>
  )
}

export default AirbnbContent