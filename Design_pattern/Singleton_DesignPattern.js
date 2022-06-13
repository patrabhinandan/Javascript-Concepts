function Process(name){
    this.name = name
}
const Singleton = (function(){
    function ProcessManager(){
        this.numProcessMgr = 0
    }
    let pManager;
    function createProcessManager(){
        pManager = new ProcessManager();
        return pManager;
    }
    return {
        getProcessManager : ()=>{
            if(!pManager) return pManager = createProcessManager()
            return pManager
        }
    }
})();
const Pmanager1 = Singleton.getProcessManager();
const Pmanager2 = Singleton.getProcessManager();
 console.log("To test if pointing to same Instance==",Pmanager1 === Pmanager2);