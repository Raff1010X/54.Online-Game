exports.calculate = (data) => {
    let { groupCount, clans } = data;

    clans = [...clans].sort((a, b) => {
        return a.points === b.points
            ? a.numberOfPlayers - b.numberOfPlayers
            : b.points - a.points;
    });

    let result = [],
        group = [],
        skip = [],
        clan = {},
        sum = 0;

    while (clans.length > 0) {
        clan = clans.shift();

        sum + clan.numberOfPlayers <= groupCount
            ? (group.push(clan), (sum += clan.numberOfPlayers))
            : skip.push(clan);

        if (clans.length === 0 || sum === groupCount) {
            clans.unshift(...skip);
            result.push(group);
            group = [];
            skip = [];
            sum = 0;
        }
    }
    return result;
};
