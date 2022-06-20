const Todo = ({ todos, completeTodo }) => {
	return todos.map((todo) => (
		<div key={todo.id} onClick={() => completeTodo(todo.id)}>
			<li>{todo.text}</li>
		</div>
	));
};

export default Todo;
