const app = Vue.createApp({
    data() {
        return {
            title: 'TODO',
            tasksLoading: false,
            tasks: [],
        }
    },
    methods: {
        getTasks() {
            this.tasksLoading = true;
            fetch('/api/task/list', {method: 'GET'})
            .then(res => {
                if (res.status === 200) {
                    res.json().then(data => {
                        this.tasks = data;
                        this.tasksLoading = false;
                    })
                }
            })
        },
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            for (let i=0; i<this.tasks.length; i++){
                if (this.tasks[i].id == id){
                    this.tasks.splice(i, 1)
                    break
                }
            }
        },
        updateTask(id, task) {
            for (let i=0; i<this.tasks.length; i++){
                if (this.tasks[i].id == id){
                    this.tasks[i].done = task.done;
                }
            }
        }
    },
    created() {
        this.getTasks()
    }
})