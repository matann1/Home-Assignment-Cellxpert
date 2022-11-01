import { action, makeObservable, observable } from "mobx";
import data from "../dictionary.json";

export class DictionaryStore {
  words: string[] = [];
  countStart: number;
  countAppearsTotal: number;
  countEnd: number;
  countConjunctions: number;

  constructor() {
    this.countStart = 0;
    this.countAppearsTotal = 0;
    this.countEnd = 0;
    this.countConjunctions = 0;
    JSON.parse(JSON.stringify(data)).map((word: any) =>
      this.words.push(word.word)
    );

    makeObservable(this, {
      words: observable,
      countStart: observable,
      countEnd: observable,
      countAppearsTotal: observable,
      countConjunctions: observable,
      wordsStart: action,
      wordsEnd: action,
      wordsAppearsTotal: action,
      wordsConjunctions: action,
      resetCountStart: action,
      resetCountEnd: action,
      resetCountAppearsTotal: action,
      resetCountConjunctions: action,
      resetAll: action,
    });
  }

  wordsStart(letter: string) {
    this.words.forEach((data) => {
      if (data.startsWith(letter) && letter) {
        this.countStart++;
      }
    });
  }

  wordsEnd(letter: string) {
    this.words.forEach((data) => {
      if (data.endsWith(letter) && letter) {
        this.countEnd++;
      }
    });
  }

  wordsAppearsTotal(letter: string) {
    this.words.forEach((data) => {
      if (data.includes(letter) && letter) {
        this.countAppearsTotal++;
      }
    });
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
  }
}
