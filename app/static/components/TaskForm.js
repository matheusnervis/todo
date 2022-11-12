app.component('task-form', {
    props: {},
    data(){
        return {
            taskDescription: '',
            formStatus: 'Init',
        }
    },
    template:
    /*html*/
    `<form action="#" id="new-task"
        @submit.prevent="createTask">
        <div class="mb-3">
            <label for="taskDescription" class="form-label">New Task</label>
            <input type="text" class="form-control" id="taskDescription" v-model="taskDescription">
        </div>
        <button type="submit" class="btn btn-primary">Add Task</button>
    </form>`,
    methods: {
        createTask() {
            if (this.taskDescription) {
                fetch('/api/task/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        description: this.taskDescription
                    })
                }).then(res => {
                    if (res.status === 200) {
                        res.json().then(task => {
                            this.$emit('addTask', task);
                            this.formStatus = 'Success';
                        })
                    }
                })
            }
        }
    },
    watch: {
        formStatus(newValue, _oldValue) {
            if(newValue == 'Success') {
                this.taskDescription = ''
                this.formStatus = 'Init'
            } else if (newValue == 'Error') {}
        }
    },
})