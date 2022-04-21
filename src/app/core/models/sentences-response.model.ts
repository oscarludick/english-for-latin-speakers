import { Sentence } from './sentences.model';

export class SentencesResponse {
  data!: Sentence[];

  constructor(response: { data: any[] }) {
    this.data = response.data.map((sentence) => new Sentence(sentence));
  }
}
