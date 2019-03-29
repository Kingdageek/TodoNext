class TodoTasks extends React.Component
{
    render () {
        const todos = this.props.todos
        // Unique key is for React's internal ordering
        const todosList = todos.map(
            (todo, position) => (
                <li key={ todo+'_'+position }>
                    { todo }
                    <button onClick={this.props.removeTodo(position)}>Remove</button>
                </li>
            )
        )
        return (
            <ul>
                { todosList }
            </ul>
        )
    }
}
export default TodoTasks