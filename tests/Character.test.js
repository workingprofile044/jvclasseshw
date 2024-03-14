import Character from '../src/characters/Character';

describe('Character class', () => {
    test('should not allow creating a character directly', () => {
        expect(() => new Character('Name', 'Type')).toThrow();
    });
});
