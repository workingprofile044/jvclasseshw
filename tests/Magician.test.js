import Magician from '../src/characters/Magician';

describe('Magician', () => {
    let character;

    beforeEach(() => {
        character = new Magician('Wizard');
    });

    test('constructor creates a character with correct properties', () => {
        expect(character).toEqual(expect.objectContaining({
            name: 'Wizard',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        }));
    });

    test('levelUp increases level by 1 and stats by 20%', () => {
        character.levelUp();
        expect(character).toEqual(expect.objectContaining({
            level: 2,
            attack: 12,
            defence: 48,
        }));
    });

    test('damage method reduces health correctly', () => {
        character.damage(10);
        expect(character.health).toBeCloseTo(94);
    });
});
