function sort(stack) {
  if (!stack.length) {
    return stack;
  }
  const popped = stack.pop();
  sort(stack);
  insertSorted(stack, popped);
}

function insertSorted(stack, element) {
  if (!stack.length || stack[stack.length - 1] < element) {
    stack.push(element);
  } else {
    const popped = stack.pop();
    insertSorted(stack, element);
    stack.push(popped);
  }
}

const stack = [5, 4, 3];
sort(stack);
console.log("stack", stack);
