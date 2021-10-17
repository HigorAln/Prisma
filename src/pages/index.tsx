import { GetStaticProps } from 'next';
import { PrismaClient, Users } from '@prisma/client';
import { useState } from 'react';
import axios from 'axios';

const prisma = new PrismaClient();

export default function Home({ results }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [initialApp, setInitialApp] = useState<Users[]>(results);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/api/prisma', {
      name,
      email,
      age,
    });

    setInitialApp([...results, { name, email, age }]);
    console.log(response);
  };

  return (
    <div>
      {initialApp.map((element: Users) => (
        <div
          key={element.id}
          style={{
            margin: '30px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            display: 'inline-block',
          }}
        >
          <h2>{element.name}</h2>
          <h3>{element.age}</h3>
          <h4>{element.email}</h4>
        </div>
      ))}
      <div style={{ width: '400px' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const results: Users[] = await prisma.users.findMany();

  return {
    props: { results },
  };
};
