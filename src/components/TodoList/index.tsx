import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector1 } from "../../redux/selector";
import { useState } from "react";
import { addTodo } from "../../redux/userSlice";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const todoList11 = useSelector(todoSelector1);

  const [input, setInput] = useState<string>("");
  const changeInput = (e: any) => {
    setInput(e.target.value);
  };

  const [priority, setPriority] = useState<string>("Medium");
  const changePriority = (e: any) => {
    setPriority(e);
  };

  const dispatch = useDispatch();
  const handleInputChange = () => {
    if (input) {
      dispatch(
        addTodo({
          id: uuidv4(),
          name: input,
          priority: priority,
          completed: false,
        })
      );
      setInput("");
      setPriority("Medium");
    }
  };
  return (
    <Row style={{ height: "350px", width: "100%" }}>
      <Col
        span={24}
        style={{
          height: "calc(100% - 40px)",
          overflow: "auto",
          scrollbarColor: "#6969dd",
          scrollbarWidth: "thin",
        }}
      >
        {todoList11.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            ></Todo>
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={input} onChange={changeInput} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={changePriority}
            style={{ width: "150px" }}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleInputChange}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
