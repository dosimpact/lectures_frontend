import Todo from "./pages/todo/Todo";
import Post from "./pages/post/Post";
import { Router } from "react-router-dom";
import { customHistory } from "./redux/store";
import Flag from "./pages/flag/Flag";

function App() {
  return (
    <Router history={customHistory}>
      <Todo />
      <Post />
      <Flag />
    </Router>
  );
}

export default App;
