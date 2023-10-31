"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    { task: "grocery shopping", id: 1 },
    { task: "e-commerce shopping", id: 2 },
  ]);

  const [inputVal, setInputVal] = useState("");
  //console.log(inputVal)
  const [id, setId] = useState(0);

  //add task
  const addTask = () => {
    let obj: any = todos.find((todo) => todo.id == id);
    //console.log(obj)
    if (obj) {
      let newArray = todos.filter((todo) => todo.id !== obj.id);
      setTodos([...newArray, { task: inputVal, id: id }]);
      setInputVal("");
      setId(0);
      return;
    }

    setTodos([...todos, { task: inputVal, id: id }]);
    setInputVal("");
    setId(0);
  };
  //edit task
  const editTask = (id: any) => {
    //console.log(id)
    let obj: any = todos.find((todo) => todo.id == id);
    //console.log(obj)
    setInputVal(obj.task);
    setId(obj.id);
  };

  //delete task
  const deleteTask = (id: any) => {
    let newArray = todos.filter((todo) => todo.id !== id);
    setTodos([...newArray]);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-gray-50">
      <div className="bg-slate-700 p-8 text-white text-center text-[40px] shadow-lg opacity-0.7 mb-40">
        <h1 className=" "> Todo REAK App</h1>
      </div>

      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="write your task"
        />
        <input
          type="number"
          value={id}
          onChange={(e: any) => setId(e.target.value)}
          className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="id"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 w-[20%] text-white p-2 
      rounded-md hover:bg-blue-200"
        >
          Add new task
        </button>
      </div>
      <h1 className="text-center text-[40px]  mt-5"> Tasks </h1>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* grid items */}

        {todos.map((todo: any, i: any) => {
          return (
            <div className="shadow p-4 rounded-md" key={i}>
              <div className="flex justify-between ">
                <span
                  className="rounded-full shadow h-8 w-8 
    text-center my-auto"
                >
                  {i + 1}
                </span>

                <span
                  onClick={() => deleteTask(todo.id)}
                  className="rounded-full shadow h-8  w-8
    text-center my-auto cursor-pointer text-red-700"
                >
                  X
                </span>
              </div>
              <div className="mt-5 text-[30px] text-gray-700">{todo.task}</div>
              <div className="text-right">
                <button
                  onClick={() => editTask(todo.id)}
                  className="text-right cursor-pointer"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
