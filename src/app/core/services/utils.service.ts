import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  tokenize(str: string, separator: string = ' '): string[] {
    try {
      return str.split(separator);
    } catch (e) {
      console.warn(e);
      return [];
    }
  }

  clean(str: string): string {
    return str.replace('.', '').toLocaleLowerCase();
  }

  randomize(max: number): number {
    return Math.round(Math.random() * max);
  }

  countInArray(arr: any[], inArr: any[]): number {
    let total = 0;
    arr.forEach((token) => {
      const found = inArr.find((t) => token === t);
      total += found ? 1 : 0;
    });
    return total;
  }

  uniqueArray(arr: any[], key: string): any[] {
    return [
      ...new Map(
        arr
          .flat()
          .filter((r: any) => r !== null)
          .map((item: any) => [item[key], item])
      ).values(),
    ];
  }

  filterArray(arr: any[], value: any): any[] {
    return arr.filter((i: any) => i !== value);
  }

  findIndex(arr: any[], key: string, item: any): number {
    return arr.findIndex((i) => i[key] === item[key]);
  }
}
