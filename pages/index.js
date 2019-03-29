import TodoForm from './TodoForm';

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

    render () {
        return (
            <div>
                <TodoForm 
                    changeTodo={this.changeTodo}
                    addTodo={this.addTodo}
                    currentTodo={this.state.currentTodo}
                />
            </div>
        )
    }
}

export default Index