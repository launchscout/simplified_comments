import { LitElement, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { liveState, liveStateConfig, liveStateProperty } from 'phx-live-state';

type Message = {
  author: string;
  text: string;
}

@customElement('lets-chat')
@liveState({
  topic: 'chat:all',
  events: {send: ['add-message']}
})
export class LetsChatElement extends LitElement {

  @liveStateConfig('url')
  @property()
  url: string = '';

  @state()
  @liveStateProperty()
  messages: Message[] = [];

  @query('form')
  form: HTMLFormElement;

  render() {
    return html`
      <dl>
        ${this.messages.map((message) => html`
          <dt>${message.author}</dt>
          <dd>${message.text}</dd>
        `)}
      </dl>
      <form @submit=${this.addMessage}>
        <div>
          <label>Author</label>
          <input name="author" />
        </div>
        <div>
          <label>Message</label>
          <input name="text" />
        </div>
        <button>Add message</button>
      </form>
    `;
  }

  addMessage(e: SubmitEvent) {
    e.preventDefault();
    const message = Object.fromEntries(new FormData(this.form));
    this.dispatchEvent(new CustomEvent('add-message', {detail: message}));
    this.form!.reset();
  }
}