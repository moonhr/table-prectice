// src/app/page.tsx

"use client"; // 클라이언트 컴포넌트로 지정합니다.

import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users"); // API 서버 주소 확인
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
