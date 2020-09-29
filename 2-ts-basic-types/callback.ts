function addAndHandle(num1: number, num2: number, cb: (a: number) => void) {
  const result = num1 + num2;

  cb(result);
}

addAndHandle(30, 20, (result) => {
  console.log(result);
});
