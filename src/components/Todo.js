const Todo = ({ todos }) => {
	return todos.map((todo) => (
		<div key={todo.id}>
			<li>{todo.text}</li>
		</div>
	));
};

export default Todo;
