async function getResponse() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let content = await response.json();
  content = content.splice(0, 10);
  console.log(content)
  let list = document.querySelector(".posts");

  let key;

  
  for (key in content) {
      const titleStyle = content[key].completed ? "correct-title" : "wrong-title";
    list.innerHTML += `
        <li class="post">
            <h4 class="${titleStyle}">${content[key].title}</h4>
            
        </li> `;
  }
}
getResponse()
