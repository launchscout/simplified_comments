
import { wrap } from "./wrap";

export const init = wrap(function() {
  return { comments: ["Hello", "WASM"]};
});

export const addComment = wrap(function({ comment }, { comments }) {
  return { comments: [`${comment} with WASM at Codemash!`, ...comments]};
});


