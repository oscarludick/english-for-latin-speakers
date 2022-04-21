export class Sentence {
  sentence!: string;

  constructor(sentence: { sentence: string }) {
    this.sentence = sentence.sentence;
  }
}
