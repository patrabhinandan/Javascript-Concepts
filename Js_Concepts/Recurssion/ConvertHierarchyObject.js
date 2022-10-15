// create a breadrumb using hierarchy object
// show only inner level key value pairs

let searchObject = {
    "SearchType": "Electronics",
    "Washing Machine":{        
        "Company":{
            "Samsung":{
                "Type":"Front Load",
                "Model": "S123"
            },
            "Bosch":{
                "Type":"Top Load",
                "Model": "B233"
            }
        }
    },
    "Phone":{        
        "Type":{
            "Touchscreen":{
                    "Nokia":{
                        "Price" : "25000",
                        "Model": "NK#Touch"
                    },
                    "Apple":{
                        "Price" : "45000",
                        "Model": "AppleI10"
                    }              
                
            },
            "KeyPad":{
                "Nokia":{
                    "Price" : "7000",
                    "Model": "NK#Keyh"
                }       
            
        }
    }
}
}

let filterObj ={};
let modelMap = (obj,parent)=>{
    for(key in obj){
        if(typeof obj[key]==='object'){
            modelMap(obj[key], parent + " > " + key);
        }else{
            filterObj[parent + " > " + key] = obj[key];
        }
    }    
}
console.log("Final Value = " , filterObj);

modelMap(searchObject,"SearchType");

    
