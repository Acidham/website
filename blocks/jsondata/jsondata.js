async function getJson(pathname) {
  const jsn = await fetch(pathname);
  const json = await jsn.json();
  return json;
}

export default async function decorate(block) {
  /* Decorate Button */
  const btn = block.children[0].children[0];
  btn.classList.add('btn');
  const newDiv = document.createElement('div');
  block.lastChild.appendChild(newDiv);


  /* handle json data */
  const data = getJson('/json-data.json');
  const btnFunc = () => {
    let a = 1;
  };

  block.addEventListner('click', btnFunc);
}
