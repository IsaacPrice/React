import React from 'react';
import './App.css';

type State = {
  isDone: boolean,
  isEditing: boolean,
  title: string,
  dueDate: string
  description: string | undefined,
}

type Props = {
  children: React.ReactNode
}

class Task extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { 
      isDone: false, 
      isEditing: false,
      title: "No Title", 
      dueDate: "No Due Date", 
      description: this.props.children?.toString()
    };
    this.changeCompletion = this.changeCompletion.bind(this);
  }

  // Allow the user to change the isDone value
  changeCompletion() {
    this.setState({ isDone: (this.state.isDone) ? false : true });
  }

  // Gives user access to change the task details
  changeEdit() {
    this.setState({ isEditing: (this.state.isEditing) ? false : true});
  }

  render() {
    const finishedString: string = (this.state.isDone) ? "completed" : "uncompleted";
    const actionString: string = (this.state.isDone) ? "Uncomplete" : "Complete";

    // This is the code for the user isn't editing the task
    const normal = (
      <div>
        <h1 className={this.state.title + " title"}>{this.state.title}</h1>

        <div className="dateEdit">
          <label className="dueDate">{this.state.dueDate}</label>
          <button className="clearbutton" onClick={() => this.changeEdit() }><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30"><path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path></svg></button>        
        </div>       

        <p className="description">{this.state.description}</p>
      </div>
    );
    
    // The code for when the user is editing the task
    // This is also a form, so it will update the values when its done hopefully
    const edits = (
      <div>
        <input className={this.state.title+ " title"} value={this.state.title} onChange={e => this.setState({ title: e.target.value })}></input>

        <div className="dateEdit">
          <input className="dueDate" value={this.state.dueDate} onChange={e => this.setState({ dueDate: e.target.value })}></input>
          <button className="clearbutton" onClick={() => this.changeEdit() }><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"><path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path></svg></button>        
        </div>

        <textarea className="description" onChange={e => this.setState({ description: e.target.value })}>{this.state.description}</textarea>
      </div>
    );

    return (
      <div className={finishedString + " task"}>
        
        {(this.state.isEditing) ? edits : normal}
        
        <button className={finishedString} onClick={() => this.changeCompletion()}>{actionString}</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="taskContainer">
      <Task>No description</Task>
    </div>
  )
}

export default App;