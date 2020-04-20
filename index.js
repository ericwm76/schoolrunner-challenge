const stats = {
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

const calculateDistanceTraveled = (pupName, seconds) => {
  const totalInterval = (stats[pupName].runningInterval + stats[pupName].restingInterval);
  const numberOfCompleteIntervals = Math.floor(seconds / totalInterval);
  const distancePerInterval = (stats[pupName].speed * stats[pupName].runningInterval);
  const partialIntervalLength = seconds - (totalInterval * numberOfCompleteIntervals);
  const partialIntervalDistance = () => {
    if (partialIntervalLength >= stats[pupName].runningInterval) {
      return (stats[pupName].speed * stats[pupName].runningInterval)
    } else {
      return (stats[pupName].speed * partialIntervalLength)
    }
  }
  const totalDistance = (numberOfCompleteIntervals * distancePerInterval) + partialIntervalDistance();
  console.log(totalDistance)
}

calculateDistanceTraveled('Alfie', 3641)