"use client";

import React from "react";
import Card from "../components/card/card";
import style from "./style.css";

const Home = () => {
    const todos = [
        { name: 'Work', completed: 5, total: 11 },
        { name: 'Groceries', completed: 2, total: 5 },
        // Add more todo items here
      ];

    return (
        <>
        <h1>Welcome Home</h1>
        <div className="container"> 
            <h1>TODO List</h1>
            <div>
                {todos.map((todo, index) => (
                <Card
                    key={index}
                    name={todo.name}
                    completed={todo.completed}
                    total={todo.total}
                />
                ))}
            </div>
        </div>
        </>
        
    )
}

export default Home;