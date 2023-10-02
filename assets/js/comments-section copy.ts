import {html, LitElement} from 'lit';
import { customElement, state } from 'lit/decorators.js';

type Comment = {
  author: string;
  text: string;
}
@customElement('comments-section')
export class CommentsSection extends LitElement {

  @state()
  comments: Comment[] = [];

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
          <input name="comment" />
        </div>
        <button>Add comment</button>
      </form>
    `;
  }

  addComment(e: SubmitEvent) {
    e.preventDefault();
    const comment = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    this.dispatchEvent(new CustomEvent('add-comment', {detail: comment}));
  }
}