import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { Divider, Typography } from "@mui/material";

function App() {
  return (
    <>
      <div
        style={{
          width: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
          height: "80vh",
        }}
      >
        <Typography component="h3" variant="h4" style={{ textAlign: "center" }}>
          TODO APP
        </Typography>
        <Filters />
        <Divider />
        <TodoList />
      </div>
    </>
  );
}

export default App;
