import Daemon from '../src/characters/Daemon';

describe('Daemon class', () => {
    const character = new Daemon('Demon');

    test('should create a Daemon with correct properties', () => {
        expect(character.name).toBe('Demon');
        expect(character.type).toBe('Daemon');
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
