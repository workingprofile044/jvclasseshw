import Zombie from '../src/characters/Zombie';

describe('Zombie class', () => {
    const character = new Zombie('Walker');

    test('should create a Zombie with correct properties', () => {
        expect(character.name).toBe('Walker');
        expect(character.type).toBe('Zombie');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(40);
        expect(character.defence).toBe(10);
    });

    test('levelUp increases level and stats', () => {
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBeCloseTo(48);
        expect(character.defence).toBeCloseTo(12);
    });

    test('damage method reduces health correctly', () => {
        character.damage(10);
        expect(character.health).toBeLessThan(100);
    });
});
