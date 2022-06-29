const app = Vue.createApp({
    data() {
        return {
            title: 'TODO',
            idNext: 4,
            tasks: [
                {id: 1, description: 'Do Something', done: false},
                {id: 2, description: 'Do other Something', done: true},
                {id: 3, description: 'Do more other Something', done: false}
            ],
            formStatus: 'Init'
        }
    },
    methods: {
        addTask(task) {
            if (!task.description) return

            task.idNext = this.idNext
            this.tasks.push(task)
            this.idNext++

            this.formStatus = 'Ok'
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