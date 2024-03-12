import "./linnad.css";
import Linn from "./Linn";
import londonPilt from "./pildid/london_pictures_iii_by_jenisei_d1z6dkf.jpg";
import pariisPilt from "./pildid/paris__7_by_joeclaffeyjr_dfgnddo.png";
import berliinPilt from "./pildid/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.jpg";
import LinnadeLoetelu from "./LinnadeLoetelu";
import { useState } from "react";

const pariis = {
	nimi: "Pariis",
	riik: "Prantsusmaa",
	pilt: pariisPilt,
};

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

const lisaLinn = () => {
	console.log("linna lisamine!");
};

function App() {
	const [kylastusiPariisis, setKylastusiPariisis] = useState(0);
	const [kylastusiLondonis, setKylastusiLondonis] = useState(0);
	const [kylastusiBerliinis, setKylastusiBerliinis] = useState(0);
	const [kylastusiElvas, setKylastusiElvas] = useState(0);
	const linnad = [
		{ nimi: "Pariis", riik: "Prantsusmaa", pilt: pariisPilt, kylastusi: kylastusiPariisis, setKylastusi: setKylastusiPariisis },
		{ nimi: "London", riik: "Inglismaa", pilt: londonPilt, kylastusi: kylastusiLondonis, setKylastusi: setKylastusiLondonis },
		{ nimi: "Berliin", riik: "Saksamaa", pilt: berliinPilt, kylastusi: kylastusiBerliinis, setKylastusi: setKylastusiBerliinis },
		{ nimi: "Elva", riik: "Eesti", pilt: londonPilt, kylastusi: kylastusiElvas, setKylastusi: setKylastusiElvas },
	];
	const [aktiivneLinn, setAktiivneLinn] = useState(0);

	return (
		<div className="container">
			<LinnadeLoetelu linnad={linnad} setAktiivneLinn={setAktiivneLinn} />
			<div>
				<div>Linnad Euroopas</div>
				<button onClick={lisaLinn}>Lisa linn</button>
				{/* 				{linnad.map((linn) => {
					return (
						<Linn
							name={linn.nimi}
							riik={linn.riik}
							pilt={linn.pilt}
						/>
					);
				})} */}
				<Linn
					name={linnad[aktiivneLinn].nimi}
					riik={linnad[aktiivneLinn].riik}
					pilt={linnad[aktiivneLinn].pilt}
					kylastusi={linnad[aktiivneLinn].kylastusi}
					setKylastusi={linnad[aktiivneLinn].setKylastusi}
				/>
			</div>
		</div>
	);
}

export default App;
