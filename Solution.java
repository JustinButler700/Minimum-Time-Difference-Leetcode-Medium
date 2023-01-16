class Solution {
    public int findMinDifference(List<String> timePoints) {
        //First, we will parse this into an integer.
        int n = timePoints.size();
        int[] times = new int[n];
        for(int i = 0; i < n; i++){
            String[] current = timePoints.get(i).split(":");
            //Convert all times into their total minutes within a given day.
            times[i] = (Integer.parseInt(current[0])*60 + Integer.parseInt(current[1]));
        }
        //Now that we have a list of all times, we will find the two times which are closest to each other.
        Arrays.sort(times);
        int min = Integer.MAX_VALUE;
        for(int i = 0; i < n-1; i++)
        {
            //Find the pair with the smallest difference in time between them.
            min = Math.min(min, times[i+1]-times[i]);
        }
        // Handle edge case where we are closest to a new day / clock reset.
        min = Math.min(min, times[0] + 1440 - times[n-1]);
        return min;
    }
}
