function createAPICalls(){
    this.getValue = function(coin){
        console.log("Calling external API.....");
        switch (coin){
            case "bitcoin" :
              return "$45000"
              break;
            case "ethirum" :
              return "$34567"
              break;
        }
    }
}
function  createProxyAPICalls(){
    const api = new createAPICalls();
    this.cache = {}
    this.getValue = function(coin){
        if(this.cache[coin]==null){
            this.cache[coin] = api.getValue(coin)
        }
        return this.cache[coin]
    }
}
 const proxy = new createProxyAPICalls();
 console.log(proxy.getValue("bitcoin"));
 console.log(proxy.getValue("ethirum"));
 console.log(proxy.getValue("bitcoin"));
 console.log(proxy.getValue("ethirum"));
 console.log(proxy.getValue("bitcoin"));
 console.log(proxy.getValue("ethirum"));
 console.log(proxy.getValue("bitcoin"));
 console.log(proxy.getValue("ethirum"));
 console.log(proxy.getValue("bitcoin"));
 console.log(proxy.getValue("ethirum"));
 console.log(proxy.getValue("bitcoin"));
 console.log(proxy.getValue("ethirum"));