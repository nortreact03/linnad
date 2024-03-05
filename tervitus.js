
const tervitus1 = (nimi) => {
    return  `
    <div>
        <h1>Tere ${nimi}</h1>
    </div>
    `
}

const tervitus2 = nimi => 'Suur tere ' + nimi

console.log(tervitus1('Nipitiri'))
console.log(tervitus2('Klaabu'))

const tervitus3 = (nimi) => {
    console.log('Tere - tere ' + nimi)
}

const nimed = [
    'Kati',
    'Mati',
    'Rebase Rein'
]

for (let i=0; i<nimed.length; i++) {
    console.log(nimed[i]);
}

nimed.forEach(tervitus3)

const tervitused = nimed.map(nimi => 'Salutatsioonid - ' + nimi )

const htmlTervitused = nimed.map(tervitus1)

console.log(nimed)
console.log(tervitused)
console.log(htmlTervitused)
