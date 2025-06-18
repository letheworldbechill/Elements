const elements = [
  { number: 1, symbol: "H", name: "Wasserstoff", group: "nichtmetalle", state: "gasförmig" },
  { number: 2, symbol: "He", name: "Helium", group: "edelgase", state: "gasförmig" },
  { number: 3, symbol: "Li", name: "Lithium", group: "alkalimetalle", state: "fest" },
  { number: 17, symbol: "Cl", name: "Chlor", group: "halogene", state: "gasförmig" },
  { number: 18, symbol: "Ar", name: "Argon", group: "edelgase", state: "gasförmig" }
];

const quizQuestions = [
  {
    type: "symbolToName",
    question: "Welches Element hat das Symbol 'He'?",
    choices: ["Wasserstoff", "Helium", "Lithium", "Chlor"],
    answer: "Helium"
  },
  {
    type: "nameToSymbol",
    question: "Welches Symbol gehört zu Chlor?",
    choices: ["Cl", "H", "He", "Li"],
    answer: "Cl"
  }
];
