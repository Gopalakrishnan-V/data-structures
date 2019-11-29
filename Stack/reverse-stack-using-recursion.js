
function reverse(stack) {
  if (!stack.length) {
    return stack;
  }

  const popped = stack.pop();
  reverse(stack);
  insertAtBottom(stack, popped);
}

function insertAtBottom(stack, element) {
  if (!stack.length) {
    stack.push(element);
  } else {
    const popped = stack.pop();
    insertAtBottom(stack, element);
    stack.push(popped);
  }
}

const stack = [1, 2, 3];
reverse(stack);
console.log("stack", stack);
