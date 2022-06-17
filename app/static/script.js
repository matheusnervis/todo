const app = Vue.createApp({
    data() {
        return {
            title: "TODO",
            idNext: 4,
            tasks: [
                {id: 1, description: "Do Something", done: false},
                {id: 2, description: "Do other Something", done: true},
                {id: 3, description: "Do more other Something", done: false}
            ],
            taskDescription: '',
        }
    },
    methods: {
        addTask() {
            if (this.taskDescription == '') {
                return
            }

            let task = {
                id: this.idNext,
                description: this.taskDescription,
                done: false
            }
            this.tasks.push(task)
            this.idNext++

            this.taskDescription= ""
        },
        deleteTask(id) {
            for (let i=0; i<this.tasks.length; i++){
                if (this.tasks[i].id == id){
                    this.tasks.splice(i, 1)
                    break
                }
            }
        }
    }
})