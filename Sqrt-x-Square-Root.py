class Solution:
    def mySqrt(self, n: int) -> int:
        l=1
        h=n
        while(h>=l):
            mid=(l+h)//2
            if (mid*mid<=n):
                l=mid+1
            else:
                h=mid-1
        return h
        
