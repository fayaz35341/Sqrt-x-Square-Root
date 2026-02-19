/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    floorSqrt(x) {
        // code here
        let l=1
        let h=x
        while (h>=l){
            let mid=Math.floor((l+h)/2)
            if (mid*mid <= x){
                l=mid+1
            }
            else{
                h=mid-1
            }
        }return h
    }
}
