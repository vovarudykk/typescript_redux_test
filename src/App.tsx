import { BrowserRouter , Route, Link, Routes  } from "react-router-dom";
import UserPage from "./pages/UserPage";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Users</Link>
          <Link to="/todos">Todos</Link>
        </div>
        <Routes>
          <Route path={"/users"} element={<UsersPage/>}/>
          <Route path={"/todos"} element={<TodosPage/>}/>
          <Route path={"/user/:id"} element={<UserPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>    
  );
};

export default App;
