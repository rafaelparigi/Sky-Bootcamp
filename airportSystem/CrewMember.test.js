const CrewMember = require ('./CrewMember');

describe('Crew member', () => {
    test('throws error if position is missing', () => {
        expect(() => new CrewMember('random', [], undefined, 'random')).toThrowError('Crew member must have a position');
    });
    test('throws error if staff number is incorrect', () => {
        expect(() => new CrewMember('random', [], 'random', undefined)).toThrowError('Crew member must have a staff number');
    });
    test('does not throw error if all arguments are valid', () => {
        expect(() => new CrewMember('random', [], 'random', 'random')).not.toThrowError();
    });
});