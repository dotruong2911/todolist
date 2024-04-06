import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/userSlice";

export default function Todo({
  id,
  name,
  priority,
  completed,
}: {
  id: string;
  name: string;
  priority: string;
  completed: boolean;
}) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(completed);

  const check = (priority: string) => {
    if (priority === "High") {
      return "red";
    }
    if (priority === "Medium") {
      return "blue";
    }
    if (priority === "Low") {
      return "gray";
    }
  };

  const toggleCheckbox = (e: any) => {
    setChecked(!checked);
    dispatch(toggleTodo(e.target.id));
    console.log(e.target.id);
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox} id={id}>
        {name}
      </Checkbox>
      <Tag color={check(priority)} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
