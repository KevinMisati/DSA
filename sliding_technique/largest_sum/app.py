""" * Find the max sum subarray of a fixed size K
 *
 * Example input:
 * [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
 *
 """

def findMaxSumSubarray(arr,k):
    maxValue = -float("inf");
    currentRunningSum = 0;

    for i in range(len(arr)):
        currentRunningSum += arr[i];

        if (i >= k - 1):
            maxValue = max(maxValue, currentRunningSum);
            currentRunningSum -= arr[i - (k - 1)];
        
    return maxValue;
    
print(findMaxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));
   