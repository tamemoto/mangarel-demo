import { bigram, trigram } from './n-gram';

describe('test n-grams', () => {
  describe('giggram', () => {
    test('should be devide success', () => {
      const text = '終末のワルキューレ';
      const result = bigram(text);
      expect(result).toEqual([
        '終末',
        '末の',
        'のワ',
        'ワル',
        'ルキ',
        'キュ',
        'ュー',
        'ーレ',
      ]);
    });
  });

  describe('trigram', () => {
    test('should be devide success', () => {
      const text = '終末のワルキューレ';
      const result = trigram(text);
      expect(result).toEqual([
        '終末の',
        '末のワ',
        'のワル',
        'ワルキ',
        'ルキュ',
        'キュー',
        'ューレ',
      ]);
    });
  });
});
