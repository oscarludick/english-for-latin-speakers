export class Dictionary {
  word: string;
  phonetic: string;
  phonetics: { audio: string; text: string }[];
  meanings: {
    partOfSpeech: string;
    antonyms: any[];
    definitions: any[];
    synonyms: [];
  }[];

  hasPhonetics: boolean;
  sourceUrls: string[];

  constructor(item: any) {
    this.word = item.word;
    this.phonetic = item.phonetic;
    this.phonetics = item.phonetics.filter(
      (p: { audio: string }) => p.audio.length > 0
    );

    this.meanings = item.meanings;
    this.sourceUrls = item.sourceUrls;

    this.hasPhonetics = this.phonetics.length > 0;
  }
}
