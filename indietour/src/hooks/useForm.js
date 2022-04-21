import { useState } from 'react';

const useForm = (initialState, callback) => {
	const [form, setForm] = useState(initialState);

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		callback();
	};

	return { form, handleChange, handleSubmit };
};

export default useForm;
