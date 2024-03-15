import Undead from '../src/characters/Undead';

describe('Undead', () => {
    let character;

    beforeEach(() => {
        character = new Undead('Bonepile');
    });

    test('constructor creates a character with correct properties', () => {
        expect(character).toEqual(expect.objectContaining({
            name: 'Bonepile',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        }));
    });

    test('levelUp increases level by 1 and stats by 20%', () => {
        character.levelUp();
        expect(character).toEqual(expect.objectContaining({
            level: 2,
            attack: 30,
            defence: 30,
        }));
    });

    test('damage method reduces health correctly', () => {
        character.damage(10);
        expect(character.health).toBeCloseTo(92.5);
    });
});
