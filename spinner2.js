let output = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ', '\r/   ','\r-   ','\r\\   ','\r|    \n'];
let timer = -100;
for(let item of output){
  timer += 200;
  setTimeout(() => {
    process.stdout.write(item);
  }, timer);
}
