import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

interface UserPageParams {
  [key: string]: string;
  id: string;
}

const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const responce = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(responce.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>Profile of {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city}, {user?.address.street}
      </div>
    </div>
  );
};

export default UserPage;
