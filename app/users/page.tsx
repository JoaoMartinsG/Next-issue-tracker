import React from "react";

// typescript magic
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // fake data API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // annotate users to User Type
  const users: User[] = await res.json();

  return (
    <>
      <h1 className="p-2 mb-3 border-b font-bold flex justify-center">All Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
