export default (input) => {
    if (!input || input.length === 0) {
        return [];
    }

    return input.split(',').map((x) => x.trim());
}