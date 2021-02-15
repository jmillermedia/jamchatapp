export default {
    props: ['msg', 'socketid'],
    template:
    `
    <article class="new-message animate__animated animate__zoomIn" :class="{ 'my-message' : matchedID }">
        <h4>{{msg.message.name}} says:</h4>
        <div class="messageContent">
            <p>{{msg.message.content}}</p>
            <p>{{msg.message.timestamp}}</p>
        </div>
    </article>
    `,

    data: function() {
        return {
            matchedID: this.socketid == this.msg.id
        }
    }
}