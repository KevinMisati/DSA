def smallestSubarray(targetSum,arr):
    minWindowSize = float("inf")
    currentWindowSum = 0
    windowStart = 0
    for windowEnd in range(len(arr)):
        currentWindowSum += arr[windowEnd];

        while (currentWindowSum >= targetSum):
            minWindowSize = min(minWindowSize, windowEnd - windowStart + 1)
            currentWindowSum -= arr[windowStart]
            windowStart +=1
        

    return minWindowSize;


    
input = [4,2,2,7,8,1,2,8,10]
targetSum = 8
print(smallestSubarray(targetSum, input))
    