// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    var  b=0;
    var h=0, q=0, d=0, n=0, p=0;
    if(currency>10000)
    {
        result= {error : "You are rich, my friend! We don't have so much coins for exchange" };
        return result;
    }
    else if (currency>0)
    {
        h=Math.floor(currency/50);
        b=currency%50;
        if(h>0){
        result.H=h;
        }
    }
    if(b>0)
    {
        q=Math.floor(b/25);
        b=b%25;
        if(q>0)
        {
            result.Q=q;
        }
    }
    if(b>0)
    {
        d=Math.floor(b/10);
        b=b%10;
        if(d>0)
        {
            result.D=d;
        }
    }
    if(b>0)
    {
        n=Math.floor(b/5);
        b=b%5;
        if(n>0)
        {
            result.N=n;
        }
    }
    if(b>0)
    {
        p=Math.floor(b/1);
        if(p>0)
        {
            result.P=p;
        }
    }

    return result;




    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
