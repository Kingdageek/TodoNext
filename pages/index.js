import TodoForm from '../components/TodoForm';
import TodoTasks from '../components/TodoTasks';

class Index extends React.Component
{
    constructor () {
        super()
        this.state = {
            currentTodo: '',
            todos: []
        }
    }

    changeTodo = (event) => {
        this.setState({currentTodo: event.target.value})
    }

    // Adds this.state.currentTodo if it's not empty to this.state.todos
    addTodo = (event) => {
        // To prevent default reload on Submit
        event.preventDefault()
        const currentTodo = this.state.currentTodo.trim()
        if (currentTodo !== "") {
            this.setState({
                currentTodo: '',
                todos: [...this.state.todos, currentTodo] // ES6 Spread Operator
            })
        }
    }

    removeTodo = (position) => {
        const todos = [...this.state.todos]
        todos.splice(position, 1)
        this.setState({
            todos: todos
        })
    }

    render () {
        return (
            <div>
                <TodoForm 
                    changeTodo={this.changeTodo}
                    addTodo={this.addTodo}
                    currentTodo={this.state.currentTodo}
                />
                <TodoTasks 
                    todos={this.state.todos} 
                    removeTodo={this.removeTodo}
                />
            </div>
        )
    }
}

export default Index