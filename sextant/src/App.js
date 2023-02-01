import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import getIP from './components/getIP';

function App() {
  return (
    <div className="App">
      <Banner header="Sextant" />
      <Exhibit heading="IPv4 Address">
        <getIP url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit heading="Public IPv6 Address">
          <getIP url='https://api64.ipify.org?format=json' />
      </Exhibit>
    </div>
    
  );
}

export default App;
