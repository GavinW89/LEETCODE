function twoSum (nums, target) {
    let keys = []
    for (const x in nums){
        for(const z in nums){
            if( nums[x]+ nums[z] == target){
                keys.push(x, z)
            }
            if(keys.length == 2){
                return keys
            }
        }
    }
    return keys;
}
// console.log(twoSum([3,4,5,6], 7))

function twoSumed (nums, target) {
    let keys = {}
    for(x in nums){
        console.log(x)
        const difference = target - nums[x]
        console.log(difference)
        if(difference in keys){
            console.log(difference in keys)
            return keys[difference]
        }
        keys = {
            ...keys,
            [difference]: x
        }
        console.log(keys)
    }
}

console.log(twoSumed([3,4,5,6], 7))