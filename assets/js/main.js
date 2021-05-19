const app = new Vue({
    el: "#root",
    data: {
        task: '',
        tasks: [
            'Fare Benzina',
            'Fare la spesa',
            'Comprare un regalo'
        ],
        doneTasks: [
        ],
        removedTasks: [
        ]
    },
    methods: {
        newTask() {
            this.tasks.push(this.task);
            this.task= ''
        },
        removeTask(index) {
            this.removedTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        doneTask(index) {
            console.log(this.tasks[index]);
            this.doneTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1)
        }
    }
})