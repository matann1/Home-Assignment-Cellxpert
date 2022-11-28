import { action, computed, makeObservable, observable } from "mobx";
import data from "../dictionary.json";

export class DictionaryStore {
  words: string[] = [];
  countStart: number;
  countAppearsTotal: number;
  countEnd: number;
  countConjunctions: number;
  options: Array<string> = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  isToggleBar: boolean;
  isToggleDoughnut: boolean;
  isToggleColorBarChart: boolean;
  isToggleColorDoughnutChart: boolean;
  isToggleColorStart: boolean;
  isToggleColorEnd: boolean;
  isToggleColorAppearsTotal: boolean;
  isToggleColorConjunctions: boolean;

  constructor() {
    this.countStart = 0;
    this.countAppearsTotal = 0;
    this.countEnd = 0;
    this.countConjunctions = 0;

    this.isToggleBar = false;
    this.isToggleDoughnut = false;
    this.isToggleColorBarChart = false;
    this.isToggleColorDoughnutChart = false;

    this.isToggleColorStart = false;
    this.isToggleColorEnd = false;
    this.isToggleColorAppearsTotal = false;
    this.isToggleColorConjunctions = false;

    JSON.parse(JSON.stringify(data)).map((word: any) =>
      this.words.push(word.word)
    );

    makeObservable(this, {
      words: observable,
      countStart: observable,
      countEnd: observable,
      countAppearsTotal: observable,
      countConjunctions: observable,

      isToggleColorStart: observable,
      isToggleColorEnd: observable,
      isToggleColorAppearsTotal: observable,
      isToggleColorConjunctions: observable,
      isToggleBar: observable,
      isToggleDoughnut: observable,
      isToggleColorBarChart: observable,
      isToggleColorDoughnutChart: observable,

      toggleBar: action,
      toggleDoughnut: action,

      toggleColorBarChart: action,
      toggleColorDoughnutChart: action,

      toggleColorStart: action,
      toggleColorEnd: action,
      toggleColorAppearsTotal: action,
      toggleColorConjunctions: action,

      wordsStart: action,
      wordsEnd: action,
      wordsAppearsTotal: action,
      wordsConjunctions: action,
      resetCountStart: action,
      resetCountEnd: action,
      resetCountAppearsTotal: action,
      resetCountConjunctions: action,
      resetAll: action,

      totalStart: computed,
      totalEnd: computed,
      totalAppears: computed,
      totalConjunctions: computed,
    });
  }

  wordsStart(letter: string) {
    this.words.forEach((data) => {
      if (data.startsWith(letter) && letter) {
        this.countStart++;
      }
    });
  }

  get totalStart() {
    return this.countStart;
  }

  toggleColorStart(boo: boolean) {
    this.isToggleColorStart = boo;
  }

  toggleColorEnd(boo: boolean) {
    this.isToggleColorEnd = boo;
  }

  toggleColorAppearsTotal(boo: boolean) {
    this.isToggleColorAppearsTotal = boo;
  }

  toggleColorConjunctions(boo: boolean) {
    this.isToggleColorConjunctions = boo;
  }

  toggleColorBarChart(boo: boolean) {
    this.isToggleColorBarChart = boo;
  }

  toggleColorDoughnutChart(boo: boolean) {
    this.isToggleColorDoughnutChart = boo;
  }

  toggleBar(boo: boolean) {
    this.isToggleBar = boo;
  }

  toggleDoughnut(boo: boolean) {
    this.isToggleDoughnut = boo;
  }

  wordsEnd(letter: string) {
    this.words.forEach((data) => {
      if (data.endsWith(letter) && letter) {
        this.countEnd++;
      }
    });
  }

  get totalEnd() {
    return this.countEnd;
  }

  wordsAppearsTotal(letter: string) {
    this.words.forEach((data) => {
      if (data.includes(letter) && letter) {
        this.countAppearsTotal++;
      }
    });
  }

  get totalAppears() {
    return this.countAppearsTotal;
  }

  wordsConjunctions(letter: string) {
    this.words.forEach((data) => {
      for (let i = 0; i < data.length - 1; i++) {
        if (data[i] === letter && data[i + 1] === letter) {
          this.countConjunctions++;
        }
      }
    });
  }

  get totalConjunctions() {
    return this.countConjunctions;
  }

  resetCountStart() {
    this.countStart = 0;
  }

  resetCountEnd() {
    this.countEnd = 0;
  }

  resetCountAppearsTotal() {
    this.countAppearsTotal = 0;
  }

  resetCountConjunctions() {
    this.countConjunctions = 0;
  }

  resetAll() {
    this.countStart = 0;
    this.countAppearsTotal = 0;
    this.countConjunctions = 0;
    this.countEnd = 0;

    this.isToggleColorStart = false;
    this.isToggleColorEnd = false;
    this.isToggleColorAppearsTotal = false;
    this.isToggleColorConjunctions = false;
    this.isToggleColorBarChart = false;
    this.isToggleColorDoughnutChart = false;

    this.isToggleBar = false;
    this.isToggleDoughnut = false;
  }
}
