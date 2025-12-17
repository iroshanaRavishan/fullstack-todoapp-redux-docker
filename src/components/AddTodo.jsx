import React, { useState } from 'react';
import '../index.css';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Low');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoData = { title, desc, status, priority, tags, dueDate };
  };


  return (
    <div className="todo-form-container">
      <h2>Add Todo</h2>
    </div>
  );
}
