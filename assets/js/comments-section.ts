import { LitElement, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { liveState, liveStateConfig, liveStateProperty } from 'phx-live-state';

type Comment = {
  author: string;
  text: string;
}

@customElement('comments-section')
@liveState({
  topic: 'comments:all',
  events: {send: ['add-comment']}
})
export class CommentsSectionElement extends LitElement {

  @liveStateConfig('url')
  @property()
  url: string = '';

  @state()
  @liveStateProperty()
  comments: Comment[] = [];

  @query('form')
  form: HTMLFormElement;

  render() {
    return html`
      <dl>
        ${this.comments.map((comment) => html`
          <dt>${comment.author}</dt>
          <dd>${comment.text}</dd>
        `)}
      </dl>
      <form @submit=${this.addComment}>
        <div>
          <label>Author</label>
          <input name="author" />
        </div>
        <div>
          <label>Comment</label>
          <input name="text" />
        </div>
        <button>Add comment</button>
      </form>
    `;
  }

  addComment(e: SubmitEvent) {
    e.preventDefault();
    const comment = Object.fromEntries(new FormData(this.form));
    this.dispatchEvent(new CustomEvent('add-comment', {detail: comment}));
    this.form!.reset();
  }
}