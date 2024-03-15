import Swordsman from '../src/characters/Swordsman';

describe('Swordsman', () => {
    let character;

    beforeEach(() => {
        character = new Swordsman('Knight');
    });

    test('constructor creates a character with correct properties', () => {
        expect(character).toEqual(expect.objectContaining({
            name: 'Knight',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        }));
    });

    test('levelUp increases level by 1 and stats by 20%', () => {
        character.levelUp();
        expect(character).toEqual(expect.objectContaining({
            level: 2,
            attack: 48,
            defence: 12,
        }));
    });

    test('damage method reduces health correctly', () => {
        character.damage(10);
        expect(character.health).toBeCloseTo(91);
    });
});
