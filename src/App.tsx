import { BrowserRouter , Route, Link, Routes  } from "react-router-dom";
import UserPage from "./pages/UserPage";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users" style={{marginLeft: '5px', marginRight: '5px'}}>Users</Link>
          <Link to="/todos" style={{marginLeft: '5px', marginRight: '5px'}}>Todos</Link>
          <Link to="/posts" style={{marginLeft: '5px', marginRight: '5px'}}>Posts</Link>
        </div>
        <Routes>
          <Route path={"/users"} element={<UsersPage/>}/>
          <Route path={"/todos"} element={<TodosPage/>}/>
          <Route path={"/user/:id"} element={<UserPage/>}/>

          <Route path={"/posts"} element={<PostsPage/>}/>
          <Route path={"/post/:id"} element={<PostPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>    
  );
};

export default App;
