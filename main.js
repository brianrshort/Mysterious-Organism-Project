// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// A factory function that returns a new pAequor object
const pAequorFactory = (num, arr) => {
  return{
    specimenNum: num,
    dna: arr,
    mutate() {
      let newDNA = returnRandBase();
      const newIndex = Math.floor(Math.random() * 15);
      const DNAMut = this.dna[newIndex];
      if (DNAMut === newDNA) {
        newDNA = returnRandBase();
        return newDNA;
      }
      this.dna[newIndex] = newDNA;
      return this.dna;
    },
    willLikelySurvive() {
      let theCs = this.dna.filter(function(element) {
        return element === "C";
      }) 
      //console.log(theCs);
      let theGs = this.dna.filter(function(element) {
        return element === "G";
      });
      //console.log(theGs);
      let total = theCs.length + theGs.length;
      //console.log(total);
      if (total / this.dna.length >= .6) {
        return true;
      } else {
        return false;
      }
    }  
  }
}
