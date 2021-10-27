const names = ["Liam", "Dan", "Tom"];
const feelings = ["like", "hate", "love"];
const musics = ["Techno", "House", "Garge"];

function generateMessage() {
  let name = names[Math.floor(Math.random() * names.length)];
  let feeling = feelings[Math.floor(Math.random() * feelings.length)];
  let music = musics[Math.floor(Math.random() * musics.length)];
  console.log(`Hi my name is ${name} and I ${feeling} ${music}.`);
}

generateMessage();
