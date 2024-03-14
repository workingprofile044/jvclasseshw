import Undead from '../src/characters/Undead';

describe('Undead class', () => {
    const character = new Undead('Ghost');

    test('should create an Undead with correct properties', () => {
        expect(character.name).toBe('Ghost');
        expect(character.type).toBe('Undead');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(25);
        expect(character.defence).toBe(25);
    });

    test('levelUp increases level and stats', () => {
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBeCloseTo(30);
        expect(character.defence).toBeCloseTo(30);
    });

    test('damage method reduces health correctly', () => {
        character.damage(10);
        expect(character.health).toBeLessThan(100);
    });
});
