exports.calculate = (data) => {
    const { groupCount } = data;
    const clansCopy = data.clans.slice().sort((a, b) => {
        if (a.points === b.points) {
            return a.numberOfPlayers - b.numberOfPlayers;
        }
        return b.points - a.points;
    });

    // Iterate through head and group clansCopy based on number of players
    let result = [],
        group = [],
        skip = [],
        sum = 0,
        players = 0,
        len = clansCopy.length;

    do {
        players = clansCopy[0].numberOfPlayers;
        sum += players;
        if (sum <= groupCount) group.push(clansCopy[0]);
        else {
            skip.push(clansCopy[0]);
            sum -= players;
        }
        clansCopy.shift();
        len -= 1;

        if (len === 0 || sum === groupCount) {
            result.push(group);
            group = [];
            sum = 0;
            if (skip.length > 0) {
                clansCopy.unshift(...skip);
                len += skip.length;
                skip = [];
            }
        }
    } while (len > 0);

    return result;
};
