import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement('todo-list')
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