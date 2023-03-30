exports.calculate2 = (data) => {
    return data;
};

exports.calculate = (data) => {
    let { groupCount } = data;
    let clansCopy = data.clans.slice();

    // Sort clans by number of players and then by points
    clansCopy.sort((a, b) => {
        if (a.points === b.points) {
            return a.numberOfPlayers - b.numberOfPlayers;
        }
        return b.points - a.points;
    });

    // Iterate through head and group clansCopy based on number of players
    let result = [];
    let group = [];
    let skip = [];
    let sum = 0;
    let players = 0;

    for (let i = 0; i < clansCopy.length; i++) {
        players = clansCopy[i].numberOfPlayers;
        sum += players;

        if (sum <= groupCount) {
            group.push(clansCopy[i]);
            if (sum === groupCount) {
                result.push(group);
                group = [];
                sum = 0;
                if (skip.length > 0) {
                    clansCopy.splice(i + 1, 0, ...skip);
                    skip = [];
                }
            }
        }

        if (sum > groupCount) {
            skip.push(clansCopy[i]);
            sum -= players;
        }

        if (i === clansCopy.length - 1) {
            result.push(group);
            group = [];
            sum = 0;
            if (skip.length > 0) {
                clansCopy.splice(i + 1, 0, ...skip);
                skip = [];
            }
        }
    }

    return result;
};

// Iterate through head and group clansCopy based on number of players
// let result = [],
//     group = [],
//     skip = [],
//     sum = 0,
//     players = 0;

// do {
//     players = clansCopy[0].numberOfPlayers;
//     sum += players;

//     if (sum <= groupCount) {
//         group.push(clansCopy[0]);
//         clansCopy.shift();
//         if (sum === groupCount) {
//             result.push(group);
//             group = [];
//             sum = 0;
//             if (skip.length > 0) {
//                 clansCopy.unshift(...skip);
//                 skip = [];
//             }
//         }
//     }

//     if (sum > groupCount) {
//         skip.push(clansCopy[0]);
//         sum -= players;
//         clansCopy.shift();
//     }

//     if (clansCopy.length === 0) {
//         result.push(group);
//         group = [];
//         sum = 0;
//         if (skip.length > 0) {
//             clansCopy.unshift(...skip);
//             skip = [];
//         }
//     }
// } while (clansCopy.length > 0);
