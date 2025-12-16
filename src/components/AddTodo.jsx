import React, { useState } from 'react';
import '../index.css';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Low');

  return (
    <div className="todo-form-container">
      <h2>Add Todo</h2>
    </div>
  );
}
