import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { liveState } from "phx-live-state";

@customElement('todo-list')
@liveState({
  url: 'ws://localhost:4000/live_state',
  topic: 'todo_list',
  provide: {scope: window, name: 'todos'},
  properties: ['todos']
})
export class TodoList extends LitElement {

  @property({type: Array})
  todos: string[] = [];

  @query('input[name="todo"]')
  todoInput: HTMLInputElement;

  render() {
    return html`
      <ul>
        ${this.todos?.map(todo => html`<li>${todo}</li>`)}
      </ul>
    `;
  }
}