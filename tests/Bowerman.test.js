import Bowerman from '../src/characters/Bowerman';

describe('Bowerman class', () => {
    test('creation produces an object with correct properties', () => {
        const bowerman = new Bowerman('Legolas');
        expect(bowerman.name).toBe('Legolas');
        expect(bowerman.type).toBe('Bowerman');
        expect(bowerman.health).toBe(100);
        expect(bowerman.level).toBe(1);
        expect(bowerman.attack).toBe(25);
        expect(bowerman.defence).toBe(25);
    });

    test('levelUp increases level by 1 and stats by 20%', () => {
        const bowerman = new Bowerman('Legolas');
        bowerman.levelUp();
        expect(bowerman.level).toBe(2);
        expect(bowerman.attack).toBeCloseTo(30);
        expect(bowerman.defence).toBeCloseTo(30);
    });

    test('damage method reduces health', () => {
        const bowerman = new Bowerman('Legolas');
        bowerman.damage(10);
        expect(bowerman.health).toBeCloseTo(92.5);
    });
});
