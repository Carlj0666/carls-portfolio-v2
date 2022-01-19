import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "react-tsparticles";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header.js";
import Portfolio from "./components/Portfolio.js";


function App() {

  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        <Particle 
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  fpsLimit: 60,
                  background: {
                  color: "#0b032d",
                  opacity: 0
                  },
                  backgroundMode: {
                    enable: true
                  },
                  particles: {
                  color: {
                    value: "#008037"
                  },
                    links: {
                    color: "#008037",
                    enable: true
                    },
                    move: {
                      enable: true,
                      speed: 0.5
                    },
                    size: {
                      value: 3,
                    random: {
                      enable: true,
                      minimumValue: 1
                    },
                    animation: {
                      enable: true,
                      speed: 0.3,
                      minimumValue: 1
                    }
                    },
                    opacity: {
                      value: 0.5,
                    random: {
                      enable: true,
                      minimumValue: 0.4
                    }
                    }
                  }
                }
              }
            />
      </Router>
    </div>
  );
}

export default App;
