import './linnad.css';
import Linn from './Linn';
import londonPilt from './pildid/london_pictures_iii_by_jenisei_d1z6dkf.jpg'

function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name="Pariis" riik="Prantsusmaa" />
      <Linn name="London" riik="Inglismaa" pilt={londonPilt} />
      <Linn name="Elva" riik="Eesti" />
    </div>
  );
}

export default App;
