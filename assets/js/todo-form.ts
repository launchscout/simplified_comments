import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement('todo-form')
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
  }
}