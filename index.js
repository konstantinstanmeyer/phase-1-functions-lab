function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return (block - 42);
    } else {
        return (42 - block);
    }
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination)*264);
    } else {
        return ((destination - start)*264);
    }

}