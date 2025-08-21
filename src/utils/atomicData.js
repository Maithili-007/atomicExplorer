export const elements = [
  { protons: 1, name: 'Hydrogen', symbol: 'H' },
  { protons: 2, name: 'Helium', symbol: 'He' },
  { protons: 3, name: 'Lithium', symbol: 'Li' },
  { protons: 4, name: 'Beryllium', symbol: 'Be' },
  { protons: 5, name: 'Boron', symbol: 'B' },
  { protons: 6, name: 'Carbon', symbol: 'C' },
  { protons: 7, name: 'Nitrogen', symbol: 'N' },
  { protons: 8, name: 'Oxygen', symbol: 'O' },
  { protons: 9, name: 'Fluorine', symbol: 'F' },
  { protons: 10, name: 'Neon', symbol: 'Ne' },
  { protons: 11, name: 'Sodium', symbol: 'Na' },
  { protons: 12, name: 'Magnesium', symbol: 'Mg' },
  { protons: 13, name: 'Aluminum', symbol: 'Al' },
  { protons: 14, name: 'Silicon', symbol: 'Si' },
  { protons: 15, name: 'Phosphorus', symbol: 'P' },
  { protons: 16, name: 'Sulfur', symbol: 'S' },
  { protons: 17, name: 'Chlorine', symbol: 'Cl' },
  { protons: 18, name: 'Argon', symbol: 'Ar' },
  { protons: 19, name: 'Potassium', symbol: 'K' },
  { protons: 20, name: 'Calcium', symbol: 'Ca' }
];

export const getElement = (protonCount) => {
  const element = elements.find(el => el.protons === protonCount);
  return element || { name: 'Unknown', symbol: '?' };
};

export const quizQuestions = [
  {
    question: "What determines the element type?",
    options: ["Protons", "Neutrons", "Electrons", "Mass"],
    correct: 0,
    explanation: "The number of protons (atomic number) determines what element it is."
  },
  {
    question: "What makes an atom electrically neutral?",
    options: ["Equal protons and neutrons", "Equal protons and electrons", "Equal neutrons and electrons", "More protons than electrons"],
    correct: 1,
    explanation: "An atom is neutral when it has equal numbers of protons (positive) and electrons (negative)."
  },
  {
    question: "What are isotopes?",
    options: ["Atoms with different protons", "Atoms with different electrons", "Atoms with different neutrons", "Atoms with different charges"],
    correct: 2,
    explanation: "Isotopes are atoms of the same element with different numbers of neutrons."
  },
  {
    question: "Where are electrons located in an atom?",
    options: ["In the nucleus", "In electron shells around the nucleus", "Mixed with protons", "Outside the atom"],
    correct: 1,
    explanation: "Electrons orbit the nucleus in specific energy levels called electron shells."
  },
  {
    question: "What is the charge of a proton?",
    options: ["Negative", "Positive", "Neutral", "Variable"],
    correct: 1,
    explanation: "Protons have a positive electrical charge (+1)."
  },
  {
    question: "Which particles are found in the nucleus?",
    options: ["Protons only", "Electrons only", "Protons and neutrons", "All three particles"],
    correct: 2,
    explanation: "The nucleus contains protons and neutrons, while electrons orbit around it."
  },
  {
    question: "What happens when an atom gains electrons?",
    options: ["It becomes positive", "It becomes negative", "It becomes neutral", "Nothing changes"],
    correct: 1,
    explanation: "When an atom gains electrons, it has more negative charges than positive, making it a negative ion (anion)."
  },
  {
    question: "What is the atomic mass approximately equal to?",
    options: ["Number of protons", "Number of electrons", "Number of protons + neutrons", "Number of neutrons only"],
    correct: 2,
    explanation: "Atomic mass is approximately equal to the sum of protons and neutrons (mass number)."
  }
];
