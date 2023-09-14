import NavBar from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
