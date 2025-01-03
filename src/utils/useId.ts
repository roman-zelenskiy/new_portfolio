function getRandomNumber() {
  return Math.floor(Math.random() * 1000000000000);
}

export function useId(array: { id: number; [key: string]: any; }[]): number {
  let testNumber: number;
  let isUnique: boolean;

  do {
    testNumber = getRandomNumber();
    isUnique = true;

    for (const el of array) {
      if (el.id === testNumber) {
        isUnique = false;
        break;
      }
    }
  } while (!isUnique);

  return testNumber;
}