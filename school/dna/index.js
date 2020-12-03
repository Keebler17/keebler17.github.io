rnaValue = ""

dnaCodon = new Map();

dnaCodon.set("UUU", "Phe")
dnaCodon.set("UUC", "Phe")
dnaCodon.set("UUA", "Leu")
dnaCodon.set("UUG", "Leu")

dnaCodon.set("CUU", "Leu")
dnaCodon.set("CUC", "Leu")
dnaCodon.set("CUA", "Leu")
dnaCodon.set("CUG", "Leu")

dnaCodon.set("AUU", "Ile")
dnaCodon.set("AUC", "Ile")
dnaCodon.set("AUA", "Ile")
dnaCodon.set("AUG", "Met")

dnaCodon.set("GUU", "Val")
dnaCodon.set("GUC", "Val")
dnaCodon.set("GUA", "Val")
dnaCodon.set("GUG", "Val")



dnaCodon.set("UCU", "Ser")
dnaCodon.set("UCC", "Ser")
dnaCodon.set("UCA", "Ser")
dnaCodon.set("UCG", "Ser")

dnaCodon.set("CCU", "Pro")
dnaCodon.set("CCC", "Pro")
dnaCodon.set("CCA", "Pro")
dnaCodon.set("CCG", "Pro")

dnaCodon.set("ACU", "Thr")
dnaCodon.set("ACC", "Thr")
dnaCodon.set("ACA", "Thr")
dnaCodon.set("ACG", "Thr")

dnaCodon.set("GCU", "Ala")
dnaCodon.set("GCC", "Ala")
dnaCodon.set("GCA", "Ala")
dnaCodon.set("GCG", "Ala")



dnaCodon.set("UAU", "Tyr")
dnaCodon.set("UAC", "Tyr")
dnaCodon.set("UAA", "Stop")
dnaCodon.set("UAG", "Stop")

dnaCodon.set("CAU", "His")
dnaCodon.set("CAC", "His")
dnaCodon.set("CAA", "Gln")
dnaCodon.set("CAG", "Gln")

dnaCodon.set("AAU", "Asn")
dnaCodon.set("AAC", "Asn")
dnaCodon.set("AAA", "Lys")
dnaCodon.set("AAG", "Lys")

dnaCodon.set("GAU", "Asp")
dnaCodon.set("GAC", "Asp")
dnaCodon.set("GAA", "Glu")
dnaCodon.set("GAG", "Glu")



dnaCodon.set("UGU", "Cys")
dnaCodon.set("UGC", "Cys")
dnaCodon.set("UGA", "Stop")
dnaCodon.set("UGG", "Trp")

dnaCodon.set("CGU", "Arg")
dnaCodon.set("CGC", "Arg")
dnaCodon.set("CGA", "Arg")
dnaCodon.set("CGG", "Arg")

dnaCodon.set("AGU", "Ser")
dnaCodon.set("AGC", "Ser")
dnaCodon.set("AGA", "Arg")
dnaCodon.set("AGB", "Arg")

dnaCodon.set("GGU", "Gly")
dnaCodon.set("GGC", "Gly")
dnaCodon.set("GGA", "Gly")
dnaCodon.set("GGG", "Gly")

rnaCodon = dnaCodon

rnaPairs = []

function dna() {
  dnaValue = document.getElementById("dna").value.toUpperCase()
  rnaValue = translateDna(invertDna(dnaValue))
  synthesize(rnaValue)
}

function rna() {
  rnaValue = document.getElementById("rna").value.toUpperCase()
  synthesize(rnaValue)
}

function invertDna(dnaInput) {
  dnaArray = dnaInput.split("")
  rnaValue = ""
  for(let i = 0; i < dnaArray.length; i++) {
    rnaValue += invertDnaPair(dnaArray[i])
  }
  return rnaValue
}

function translateDna(dnaInput) {
  dnaArray = dnaInput.split("")
  rnaValue = ""
  for(let i = 0; i < dnaArray.length; i++) {
    rnaValue += swapPair(dnaArray[i])
  }
  return rnaValue
}

function invertDnaPair(letter) {
  if(letter === "A") {
    return "T"
  } else if(letter === "T") {
    return "A"
  } else if(letter === "C") {
    return "G"
  } else {
    return "C"
  }
}

function swapPair(letter) {
  if(letter === "A") {
    return "U"
  } else if(letter === "T") {
    return "A"
  } else if(letter === "C") {
    return "G"
  } else {
    return "C"
  }
}

function synthesize(rna) {
  let rnaArray = rnaValue.split("")

  if(rnaArray.length % 3 != 0) {
    return "Error: Length not evenly divisible by 3"
  }

  for(let i = 0; i < Math.floor(rnaArray.length / 3); i++) {
    rnaPairs[i] = ""
  }

  for(let i = 0; i < rnaArray.length; i++) {
    rnaPairs[Math.floor(i / 3)] = rnaPairs[Math.floor(i / 3)] += rnaArray[i];
  }

  aminoAcidArr = []

  for(let i = 0; i < rnaPairs.length; i++) {
    aminoAcidArr[i] = rnaCodon.get(rnaPairs[i])
  }

  console.log(aminoAcidArr)
}
