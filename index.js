const dogs = {
  Alfie: {speed: 5, runningInterval: 17, restingInterval: 57},
  Lincoln: {speed: 28, runningInterval: 6, restingInterval: 133},
  Tuck: {speed: 23, runningInterval: 4, restingInterval: 83},
  Sullivan: {speed: 19, runningInterval: 7, restingInterval: 108},
  Stitch: {speed: 4, runningInterval: 22, restingInterval: 62},
  Zema: {speed: 16, runningInterval: 6, restingInterval: 86},
  Mara: {speed: 27, runningInterval: 6, restingInterval: 135},
  Butter: {speed: 12, runningInterval: 6, restingInterval: 53},
  Ember: {speed: 15, runningInterval: 4, restingInterval: 50},
};

const findTotalInterval = name => {
  return (dogs[name].runningInterval + dogs[name].restingInterval);
};

const findDistancePerInterval = name => {
  return (dogs[name].speed * dogs[name].runningInterval);
};

const findNumberOfIntervals = (name, seconds) => {
  return Math.floor(seconds / findTotalInterval(name));
};

const findPartialIntervalLength = (name, seconds) => {
  return (seconds - (findTotalInterval(name) * findNumberOfIntervals(name, seconds)));
};

const findPartialIntervalDistance = (name, seconds) => {
  const partialIntervalLength = findPartialIntervalLength(name, seconds);
  if (partialIntervalLength >= dogs[name].runningInterval) {
    return (dogs[name].speed * dogs[name].runningInterval);
  } else {
    return (dogs[name].speed * partialIntervalLength);
  };
};

const findTotalDistance = (name, seconds) => {
  return ((findNumberOfIntervals(name, seconds) * findDistancePerInterval(name)) + findPartialIntervalDistance(name, seconds));
};

const findWinner = seconds => {
  const distances = Object.keys(dogs)
    .map(name => {
      return ({name: name, distance: findTotalDistance(name, seconds)})
    })
    .sort((a, b) => b.distance - a.distance);
  const winner = distances[0];
  console.log(winner);
  return winner;
};

findWinner(3461);
// After 3461 seconds, our winner is Butter, who has travelled 4248 ft. In second place is Lincoln, who has travelled 4200 ft, followed by Sullivan at 4123 ft. Yay Butter!