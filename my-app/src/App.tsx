import React, { useState } from 'react';
import './App.css';

interface Task {
  title: string,
  isDone: boolean,
  description: string
}

class TodoItem extends React.Component<Task, {}> {
  const [count: number, setCount] = setState(0);
  constructor(props: Task) {
    super(props);
    this.state = props;
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    this.setState(prevState => ({ isDone: !prevState.isDone }));
  }

  render() {
    const doneString: string = (this.state.isDone) ? "completed" : "uncompleted";
    return (
      <div className={"TodoItem " + doneString} >
        <h1>{this.state.isDone.toString()}</h1>
        <button onClick={() => }></button>
      </div>
    );
  }
}

const currentTask = {
  title: "Program",
  isDone: false,
  description: "Learn more of React and Typescript"
};

let item: TodoItem = new TodoItem(currentTask);

export default item.render;