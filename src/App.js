import "./linnad.css";
import Linn from "./Linn";
import londonPilt from "./pildid/london_pictures_iii_by_jenisei_d1z6dkf.jpg";
import pariisPilt from "./pildid/paris__7_by_joeclaffeyjr_dfgnddo.png";
import berliinPilt from "./pildid/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.jpg";
import LinnadeLoetelu from "./LinnadeLoetelu";

const pariis = {
	nimi: "Pariis",
	riik: "Prantsusmaa",
	pilt: pariisPilt,
};

const linnad = [
	pariis,
	{ nimi: "London", riik: "Inglismaa", pilt: londonPilt },
	{ nimi: "Berliin", riik: "Saksamaa", pilt: berliinPilt },
	{ nimi: "Elva", riik: "Eesti", pilt: londonPilt },
];

/* esialgne App kus iga linn algväärtustatakse eraldi
function App() {
  return (
    <div className="container">
      <h1>Minu lemmiklinnad</h1>
      <Linn name={pariis.nimi} riik={pariis.riik} pilt={pariis.pilt} />
      <Linn name="London" riik="Inglismaa" pilt={londonPilt} />
      <Linn name="Elva" riik="Eesti" />
    </div>
  );
}

*/

function App() {
	return (
		<div className="container">
      <LinnadeLoetelu linnad={linnad} />
			<div>
				<div>Linnad Euroopas</div>
				{linnad.map((linn) => {
					return (
						<Linn
							name={linn.nimi}
							riik={linn.riik}
							pilt={linn.pilt}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
