import { soma } from '../soma.js';

describe('Função soma', () => {
  test('deve somar 2 + 3 = 5', () => {
    expect(soma(2, 3)).toBe(5);
  });
});
