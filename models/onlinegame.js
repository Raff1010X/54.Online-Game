exports.calculate = (data) => {
    let { groupCount, clans } = data;

    // Sort clans by number of players and then by points
    clans
        .sort((a, b) => a.numberOfPlayers - b.numberOfPlayers)
        .sort((a, b) => b.points - a.points);

    // Separate clans into head and tail based on number of players
    let head = [],
        tail = [];
    clans.forEach((el) =>
        el.numberOfPlayers <= groupCount ? head.push(el) : tail.push(el)
    );

    //TODO // Iterate through head and group clans based on number of players
    let result = [],
        temp = [];
    
    // Add any remaining clans in temp to the result array
    if (temp.length > 0) {
        result.push(temp);
    }

    // Merge the grouped head clans with the tail clans and return the result
    return result.concat(tail);
};
