function distanceFromHqInBlocks(pickupLocation) {
  // Scuber HQ is on 42nd Street
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  // Reuse the blocks function
  const blocksAway = distanceFromHqInBlocks(pickupLocation);
  return blocksAway * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  // Only uptown/downtown movement
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
// Export all functions so the tests can see them
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};