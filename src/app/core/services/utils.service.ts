import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  tokenize(str: string, separator: string = ' '): string[] {
    return str.split(separator);
  }

  randomize(max: number): number {
    return Math.round(Math.random() * max);
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

  nonEmptyArray(arr: any[]): any[] {
    return arr.filter((r: any) => r !== null);
  }
}
