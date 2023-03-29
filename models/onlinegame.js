exports.calculate = (data) => {
    let { groupCount, clans } = data;
    clans.sort((a, b) => a.numberOfPlayers - b.numberOfPlayers);
    clans.sort((a, b) => b.points - a.points);


    
    return clans;
};
