var socket = io();
socket.on('connect',function (){
    console.log('Connected to server');

    socket.emit('createMessage',{
        from:"Prashanth",
        text:"Hey"
    });
});
socket.on('disconnect',function (){
    console.log('DisConnected from server');
});
socket.on('newMessage',function(message){
    console.log('New Message',message);
});