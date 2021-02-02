import ChatMessage from "./components/TheMessageComponent.js";

(() => {
    console.log('JS is running');

    // load the socket library and make a connection
    const socket = io();

    // messenger service event handling -< incoming from the manager
    function setUserID({sID, message}) {
        // incoming connected event with data
        // debugger;
        vm.socketID = sID;
    };

    function appendMessage(message) {
        ChannelMergerNode.messages.push(message);
    }

    const vm = new Vue({
        data: {
            messages: [],
            nickname: "",
            username: "",
            socketID: "",
            message: ""
        },

        created: function () {
            console.log(`it's alive`)
        },

        methods: {
            dispatchMessage() {
                debugger;
                socket.emit('chatmessage', {content: this.message, name: this.nickname || 'Anonymous'})
            }
        },

        components: {
            newmessage: ChatMessage
        },
    }).$mount('#app');

    socket.addEventListener('connected', setUserID);
    socket.addEventListener('message', appendMessage);
})();