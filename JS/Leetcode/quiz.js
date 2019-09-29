
/*
    quiz source:https://leetcode.com/problems/two-sum/
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9
    return [0, 1].
    return的value是個 array
*/
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
        console.log('i= ', i);
        for(let j = 1; j<nums.length; j++) {
            console.log('j= ', j);
            if (nums[i]+nums[j] === target){
                console.log('i= ', i, 'j= ', j);
                return [i, j];
            }
        }
    }
}

console.log(twoSum([1, 10, 11, 19],12));