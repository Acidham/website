async function getJson(pathname) {
  const jsn = await fetch(pathname);
  const json = await jsn.json();
  const txt = [];
  json.data.forEach((el) => {
    txt.push(el.data);
  });
  return txt;
}

export default async function decorate(block) {
  /* Decorate Button */
  const btn = block.children[0].children[0];
  btn.classList.add('btn');
  const newDiv = document.createElement('div');
  block.appendChild(newDiv);

  /* write json data on click */
  let notExecuted = true;
  const jsonData = [];
  const showData = async () => {
    /*
    const jsn = await fetch('/json-data.json');
    const json = await jsn.json();
    const txt = [];
    json.data.forEach((el) => {
      txt.push(el.data);
    }); */
    if (notExecuted) {
      jsonData.push(await getJson('/json-data.json'));
      notExecuted = false;
    }
    block.lastChild.innerHTML = [...(await jsonData)].join('<br>');
  };
  /* block.children[0].children[0].addEventListener('click', showData); */
  block.querySelector('.btn').addEventListener('click', showData);
}
