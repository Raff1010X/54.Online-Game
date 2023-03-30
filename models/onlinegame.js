exports.calculate = (data) => {
    console.time('time');
    const { groupCount } = data;
    const clansCopy = data.clans.slice().sort((a, b) => {
        a.points === b.points
            ? a.numberOfPlayers - b.numberOfPlayers
            : b.points - a.points;
    });

    let result = [],
        group = [],
        skip = [],
        sum = 0,
        players = 0,
        len = clansCopy.length;

    do {
        players = clansCopy[0].numberOfPlayers;
        sum += players;
        sum <= groupCount
            ? group.push(clansCopy[0])
            : (skip.push(clansCopy[0]), (sum -= players));
        clansCopy.shift();
        len -= 1;

        if (len === 0 || sum === groupCount) {
            result.push(group);
            group = [];
            sum = 0;
            const skipLen = skip.length;
            if (skipLen) {
                clansCopy.unshift(...skip);
                len += skipLen;
                skip = [];
            }
        }
    } while (len > 0);
    console.timeEnd('time');
    return result;
};
