import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { liveState } from "phx-live-state";

@customElement('todo-form')
@liveState({
  context: 'todos',
  events: {send: ['add-todo']}
})
export class TodoForm extends LitElement {

  @query('input[name="todo"]')
  todoInput: HTMLInputElement;

  render() {
    return html`
    <form>
      <input name="todo"/>
      <button @click=${this.addTodo}>Add item</button>
    </form>
    `;
  }

  addTodo(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('add-todo', {detail: this.todoInput.value}));
    this.todoInput.value = '';
  }
}