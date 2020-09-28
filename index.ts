import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// This is like making a not like this: (line 12)
    // res.data has properties of:
    // id
    // title
    // completed

// Interfaces are use to define the structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed)
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `)
}







// Terminal commands to run compiler and print out at terminal:
    // Example 1:
        // tsc index.ts -->
        // node index.js
    
    // Example 2:
        // ts-node index.ts