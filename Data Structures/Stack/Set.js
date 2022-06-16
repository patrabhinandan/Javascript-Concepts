/*  methods present -- has, values , add, remove -- 
methods of two set -- Union, Intersection , difference, Subset*/
 var MySet = function(){
    var collection = [];
    this.has = function(element){
        if(collection.indexOf(element)!==-1)
            return true;
        return false;
    };
    this.values = function(){
        return collection
    };
    this.size = function(){
        return collection.length;
    }
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    this.remove = function(element){
        if(this.has(element)){
            let index = collection.indexOf(element);
            collection.splice(index,1);
            return true
        }
        return false;
    };
    this.union = function(newCollection){
        let unionSet = new MySet();
        let firstSet = this.values();
        let secondSet = newCollection.values();
        firstSet.forEach(value=>{
            unionSet.add(value)
        });
        secondSet.forEach(value=>{
            unionSet.add(value);
        });
       return unionSet

    };
    this.intersection = function(newCollection){
        let intersectionSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(value=>{
            if(newCollection.has(value)){
                intersectionSet.add(value)
            }
            
        });        
       return intersectionSet;
    };
    this.difference = function(newCollection){
        let diffrenceSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(value=>{
            if(!newCollection.has(value)){
                diffrenceSet.add(value)
            }
            
        });        
       return diffrenceSet;
    };
    this.subSet = function(newCollection){
        let firstSet = this.values();
        return firstSet.every(value=>{
            return newCollection.has(value)          
        });
    };
    
 }
//  var mySet = new MySet();
//  mySet.add(20);
//  mySet.add(30);
//  mySet.add(40);
//  mySet.remove(50);
//  console.log(mySet.values())
 var SetA = new MySet();
 var SetB = new MySet();
 var SetC = new MySet();
 var SetD = new MySet();
 SetA.add(20);
 SetA.add(30);
 SetA.add(40);
 SetB.add(50);
 SetB.add(60);
 SetB.add(70);
 SetC.add(20);
 SetC.add(100);
 SetC.add(30);
 SetD.add(20);
 SetD.add(30);
 SetD.add(40);
 SetD.add(400);
 //let union = SetA.union(SetB);
 //let intersection = SetA.intersection(SetC);
 //let differenceSet = SetA.difference(SetC);
 let subSet = SetA.subSet(SetD);
 //console.log(intersection.values());
 //console.log(union.values());
 //console.log(differenceSet.values());
 console.log(subSet);
 
