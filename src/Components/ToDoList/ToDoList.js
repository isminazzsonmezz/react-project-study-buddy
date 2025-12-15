import React, { useState } from "react";
import { Form, FormGroup, Label, Input, ListGroup, ListGroupItem, Button, Container } from "reactstrap";

function MyToDoList() {
  // States -> to-do list and input value
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // New To-Do add function
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, isCompleted: false }]);
      setInput(""); // Input'u temizle
    }
  };

  // To-Do remove function.
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // To-Do'yu tamamlanmış olarak işaretleme fonksiyonu
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Container>
        <h1 className="text-2xl font-bold mb-4">To-Do List ✎ᝰ.</h1>
        {/* Input alanı ve ekleme butonu */}
        <Form>
          <FormGroup>
            <Label for="todoInput">
              New To-Do 
            </Label>
            <Input
              id="todoInput"
              name="text"
              type="textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add new to-do"
            />
          </FormGroup>
          <Button onClick={addTodo} color="success" outline > Add </Button>
        </Form>
        <br />
        {/* To-Do Listeleme alanı */}
        <ListGroup numbered>
          {todos.map((todo, index) =>(
            <ListGroupItem color="warning" key={index} style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
              <span onClick={() => toggleComplete(index)}>{todo.text}</span>
              {' '}
              <Button onClick={() => deleteTodo(index)} color="danger" size="sm">Delete</Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default MyToDoList;
