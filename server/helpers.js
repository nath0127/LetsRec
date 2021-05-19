const helpers = {
  getSports: (array) => {
    let results = [];
    array.map((sport) => {
      results.push(sport.sport)
    })
    return results;
  }
}

module.exports = helpers;