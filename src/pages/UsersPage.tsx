import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import List from "../components/List";
import { IUser } from "../types/types";
import UserItem from "../components/UserItem";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(responce.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => navigate(`/user/${user.id}`)}
            user={user}
            key={user.id}
          />
        )}
      />
    </div>
  );
};

export default UsersPage;
