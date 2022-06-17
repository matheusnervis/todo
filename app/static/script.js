const app = Vue.createApp({
    data() {
        return {
            title: "TODO",
            tasks: [
                {id: 1, description: "Do Something", done: false},
                {id: 2, description: "Do other Something", done: true},
                {id: 3, description: "Do more other Something", done: false}
            ]
        }
    }
})