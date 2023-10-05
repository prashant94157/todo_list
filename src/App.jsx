import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Loader from './components/Loader';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        setUsers([...result.data]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const onClickHandler = (id) => {
    setUsers([...users.filter((e) => e.id !== id)]);
  };

  return (
    <div className='bg-[#132043] min-h-screen'>
      <div>
        <div className='flex justify-center'>
          <h1 className='pt-16 text-4xl font-bold tracking-tight sm:text-6xl label'>
            Todo List
          </h1>
        </div>

        {users.length ? (
          <div className='flex justify-evenly '>
            <div className='w-1/2'>
              {users.map((o) => (
                <div key={o.id} className='bg-[#1F4172] px-5 rounded-lg'>
                  <div className='mt-6'>
                    <dl className='divide-y divide-gray-100'>
                      <div className='py-3 grid grid-cols-3 gap-4 px-0'>
                        <dt className='text-sm font-medium leading-6 text-[#F1B4BB]'>
                          UserId
                        </dt>
                        <dd className='text-sm leading-6 text-[#FFE5E5] col-span-2 mt-0'>
                          {o.userId}
                        </dd>
                      </div>
                      <div className='py-3 grid grid-cols-3 gap-4 px-0'>
                        <dt className='text-sm font-medium leading-6 text-[#F1B4BB]'>
                          Id
                        </dt>
                        <dd className='text-sm leading-6 text-[#FFE5E5] col-span-2 mt-0'>
                          {o.id}
                        </dd>
                      </div>
                      <div className='py-3 grid grid-cols-3 gap-4 px-0'>
                        <dt className='text-sm font-medium leading-6 text-[#F1B4BB]'>
                          Title
                        </dt>
                        <dd className='text-sm leading-6 text-[#FFE5E5] col-span-2 mt-0'>
                          {o.title}
                        </dd>
                      </div>
                      <div className='py-3 grid grid-cols-3 gap-4 px-0'>
                        <dt className='text-sm font-medium leading-6 text-[#F1B4BB]'>
                          Completed
                        </dt>
                        <dd className='text-sm leading-6 text-[#FFE5E5] col-span-2 mt-0'>
                          {`${o.completed}`}
                        </dd>
                      </div>
                      <div className='py-3 grid grid-cols-3 gap-4 px-0 sm:grid-cols-5'>
                        <dt
                          className='text-lg p-1 rounded-md font-medium text-white bg-red-500 text-center hover:cursor-pointer'
                          onClick={() => onClickHandler(o.id)}
                        >
                          Delete
                        </dt>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
