function reverse(str){
    const stack = [];
    let result = "";
    str.split("").map(c => {
        stack.push(c);
    });
    while(stack.length){
        result+=stack.pop();
    }
    return result;
}

console.log(reverse("gopal"));