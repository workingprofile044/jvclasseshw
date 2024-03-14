import Magician from '../src/characters/Magician';

describe('Magician class', () => {
    const character = new Magician('Merlin');

    test('should create a Magician with correct properties', () => {
        expect(character.name).toBe('Merlin');
        expect(character.type).toBe('Magician');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(10);
        expect(character.defence).toBe(40);
    });

    test('levelUp increases level and stats', () => {
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBeCloseTo(12);
        expect(character.defence).toBeCloseTo(48);
    });

    test('damage method reduces health correctly', () => {
        character.damage(10);
        expect(character.health).toBeLessThan(100);
    });
});
