import { useState, useEffect } from "react";

const TodoForm = ({ onSubmit }) => {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<div>
			<form>
				<input
					placeholder="Add a new task"
					value={input}
					onChange={handleChange}
				/>
				<button>Add New Task</button>
			</form>
		</div>
	);
};

export default TodoForm;
