function printNextGreaterElement(arr) {
  if (!arr.length) {
    return;
  }
  const stack = [];
  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    while (stack.length && item > stack[stack.length - 1]) {
      console.log(`${stack.pop()} --> ${item}`);
    }
    stack.push(item);
  }

  while (stack.length) {
    console.log(`${stack.pop()} --> -1`);
  }
}

printNextGreaterElement([4, 5, 2, 25]);
