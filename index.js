'use strict'

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
}

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt('Nechi baxo berasiz?')

  if (a != null && b != null && a != '' && b != '') {
    seriesDB.series[a] = b
    console.log('done')
  } else {
    console.log('error')
    i--
  }
}

if (seriesDB.count < 5) {
  console.log('Kam serial ko’ripsiz')
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log('Siz classik tamoshabin ekansiz')
} else if (seriesDB.count >= 10) {
  console.log('Siz serialchi zvezda ekansiz')
} else {
  console.log('Error')
}

console.log(seriesDB)