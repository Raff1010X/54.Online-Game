exports.calculate = (data) => {
    const { groupCount } = data;
    const clansCopy = data.clans.slice().sort((a, b) => {
        a.points === b.points ? a.numberOfPlayers - b.numberOfPlayers : b.points - a.points;
    });
    let result = [], group = [], skip = [], sum = 0;
    do {
        sum += clansCopy[0].numberOfPlayers;
        sum <= groupCount ? group.push(clansCopy[0]) : (skip.push(clansCopy[0]), (sum -= clansCopy[0].numberOfPlayers));
        clansCopy.shift();
        if (clansCopy.length === 0 || sum === groupCount) {
            result.push(group);
            group = [];
            sum = 0;
            clansCopy.unshift(...skip);
            skip = [];
        }
    } while (clansCopy.length > 0);
    return result;
};
