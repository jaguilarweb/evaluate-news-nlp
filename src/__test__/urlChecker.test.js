import { checkUrl } from "../client/js/urlChecker";

describe('Test for url checker', () => {
  test('Right url', async () => {
    const urlText = 'https://rickandmortyapi.com/api/character/';
    const dataTrue = await checkUrl(urlText);
     expect(dataTrue).toBeTruthy();
  });
  test('Not url', async () => {
    const notUrlText = 'rickandmortyapi.com/api/not-url';
    const dataFalse = await checkUrl(notUrlText);
     expect(dataFalse).toBeFalsy();
  });
});
