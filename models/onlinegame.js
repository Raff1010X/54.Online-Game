exports.calculate = (data) => {
    let { groupCount, clans } = data;

    // Sort clans by number of players and then by points
    clans = clans
        .sort((a, b) => a.numberOfPlayers - b.numberOfPlayers)
        .sort((a, b) => b.points - a.points);

    // Iterate through clans and group clans based on number of players
    // TODO

    // Add any remaining clans in temp to the result array
    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
};
