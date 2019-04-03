import getRandomNumber from './getRandomNumber';

const EXISTING_CLASSES = [
    'Amazon',
    'Necromancer',
    'Barbarian',
    'Sorceress',
    'Paladin',
    'Druid',
    'Assassin'
]

export default (names) => {
    const classes = [...EXISTING_CLASSES];
    return names.map((name) => {
        if(classes.length <= 0) {
            return {
                name,
                selectedClass: 'Overfloadig'
            }
        }
        const index = getRandomNumber(0, classes.length);
        const selectedClass = classes[index];
        classes.splice(index, 1);
        return {
            name,
            selectedClass
        };
    });
};