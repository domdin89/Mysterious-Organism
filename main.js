// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAeqorFactory(num, arr) {
  return {
    _specimenNum: num,
    _dna: arr,
    mutate() {
      this._dna = returnRandBase();
      return this._dna;
    },
    compareDNA(otherP) {
      let commonCount = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === otherP._dna[i]) {
          commonCount++;
        }
      }
      const percentage = (commonCount / this._dna.length) * 100;
      console.log(`specimen #${this._specimenNum} and specimen #${otherP._specimenNum} have ${percentage}% DNA in common.`);
    },
    willLikelySurvive() {
      const countCG = this._dna.filter(base => base === 'C' || base === 'G').length;
      const survivalPercentage = (countCG / this._dna.length) * 100;
      return survivalPercentage >= 60;
    }
  };
}


const pAeqor1 = pAeqorFactory(1, ['C', 'A', 'G', 'T', 'C', 'G', 'A', 'C', 'T', 'G', 'C', 'G', 'A', 'T', 'G']);
const pAeqor2 = pAeqorFactory(2, ['A', 'T', 'A', 'G', 'C', 'T', 'G', 'A', 'T', 'C', 'G', 'T', 'A', 'C', 'G']);

console.log(`P. aequor #1 will likely survive: ${pAeqor1.willLikelySurvive()}`);
console.log(`P. aequor #2 will likely survive: ${pAeqor2.willLikelySurvive()}`);








