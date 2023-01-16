function findMinDifference(timePoints: string[]): number {
    // Get the length of the input array
    let n = timePoints.length;
    // Create an array to store the times in minutes
    let times : number[] = new Array(n);
    // Iterate over the input array
    for(let i = 0; i < n; i++)
    {
        // Split the current time point into hours and minutes
        let current = timePoints[i].split(":");
        // Convert the hours and minutes into total minutes in a day
        times[i] = Number(current[0])*60 + Number(current[1]);
    }
    // Sort the array of times
    times.sort((a, b) => a - b);
    // Initialize the minimum difference to a large value
    let min = Number.MAX_SAFE_INTEGER;
    // Iterate over the sorted array
    for(let i = 0; i < n-1; i++)
    {
        // Find the pair with the smallest difference in time
        min = Math.min(min, times[i+1]-times[i]);
    }
    // Handle the edge case where we are closest to a new day / clock reset
    min = Math.min(min, times[0] + 1440 - times[n-1]);
    // Return the minimum difference
    return min;
}
