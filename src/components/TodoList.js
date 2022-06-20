import { useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	// add a new todo
	const addTodo = (todo) => {
		// if does not contain any text don't want to add that
		if (!todo.text) {
			return;
		}

		// add it along the old todos
		// adding it first since recent tasks need to be at top
		const newTodos = [todo, ...todos];

		setTodos(newTodos);

		console.log(todos);
	};

	return (
		<div>
			<h1>What's the plan for Today?</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} />
		</div>
	);
};

export default TodoList;
