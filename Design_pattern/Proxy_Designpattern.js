 function getSharePrices(){  
    
    this.getValue = (share)=> {
        console.log("calling external APIs.....");
        switch (share) {
            case "wipro":
                return "800"
                break;
            case "tcs":
                return "2700"
                break;
            case "cts":
                return "2300"
                break;
        }
    }
 }

 function getSharePricesProxy(){
    const api = new getSharePrices();
    this.cache = {};
    this.getValue = (share)=>{
        if(this.cache[share]==null){
            this.cache[share] = api.getValue(share)
        }
        return this.cache[share];
    }
 }
 const proxy = new getSharePricesProxy();
 console.log(proxy.getValue("wipro"));
 console.log(proxy.getValue("tcs"));
 console.log(proxy.getValue("cts"));
 console.log(proxy.getValue("wipro"));
console.log(proxy.getValue("tcs"));
 console.log(proxy.getValue("cts"));
 console.log(proxy.getValue("wipro"));
console.log(proxy.getValue("tcs"));
 console.log(proxy.getValue("cts"));
