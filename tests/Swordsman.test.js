import Swordsman from '../src/characters/Swordsman';

describe('Swordsman class', () => {
    const name = 'Warrior';
    let swordsman;

    beforeEach(() => {
        swordsman = new Swordsman(name);
    });

    test('creation produces a character with the correct properties', () => {
        expect(swordsman.name).toBe(name);
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });

    test('levelUp method works correctly', () => {
        swordsman.levelUp();
        expect(swordsman.level).toBe(2);
        expect(swordsman.attack).toBeCloseTo(48); // 40 * 1.2
        expect(swordsman.defence).toBeCloseTo(12); // 10 * 1.2
        expect(swordsman.health).toBe(100);
    });

    test('damage method correctly reduces health', () => {
        swordsman.damage(10);
        expect(swordsman.health).toBeCloseTo(91); // 100 - 10 * (1 - 0.1)
    });
});
