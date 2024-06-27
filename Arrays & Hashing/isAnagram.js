function isAnagram(s, t){
    if(s.length !== t.length) return false; //if lengths of strings dont match return false
    for (const x in s){ //loop through first string
        var match = false;
        for(const z in t){ //loop through second string
            if(s[x] == t[z]){ // first letter of first string compared to every letter of second string
                match = true;
                exit
            }else{
                return false; // no match then return false
            }
        }
        if(match == false) return false;
    }
    return true //if makes through both loops then its an anagram return true
}

console.log(isAnagram('racecar', 'carrace'))
console.log(isAnagram('jar', 'jam'))