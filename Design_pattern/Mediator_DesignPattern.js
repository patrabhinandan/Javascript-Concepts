function Member(name){
    this.name = name;
    this.chatroom = null;
}
Member.prototype = {
    send : function(message,toMember){
        this.chatroom.send(message,this, toMember)
    },
    receive : function(message,fromMember){
       // console.log(this.fromMember.name + 'to' + this.name + ':' + message );
        console.log(`${fromMember.name} to  ${this.name}: ${message} `)
    }
}

function Chatroom(){
    this.members = {};
}
Chatroom.prototype = {
    addMember: function(member){
        this.members[member.name] = member;
        member.chatroom = this
    },
    send : function(message, fromMember, toMember){
        toMember.receive(message,fromMember)
    }
}

const chatroom = new Chatroom();
const bhutu = new Member("Bhutu");
const raja = new Member("Raja");
const chotu = new Member("Chotu");
chatroom.addMember(bhutu);
chatroom.addMember(raja);
chatroom.addMember(chotu);
bhutu.send('Hey raja, how are you',raja);
chotu.send('He is not online',bhutu);
