import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onSubmit }) => {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit({
			id: uuidv4(),
			text: input,
		});

		// for the new task to be added
		setInput("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Add a new task"
					value={input}
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Add New Task</button>
			</form>
		</div>
	);
};

export default TodoForm;
