import React, { useState } from 'react';
import '../index.css';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <div>AddTodo</div>
  )
}
