list = new Set()
function hasDuplicate(nums) {
    for (const number in nums) {      
        if(this.list.has(number)){
            return true;
        }else{
            this.list.add(number)
        }
    }
    return false;
}
console.log(hasDuplicate([1,2,3,4]))
console.log(hasDuplicate([1,2,3,3]))
