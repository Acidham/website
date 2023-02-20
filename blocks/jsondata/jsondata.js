async function getJson(pathname) {
  const jsn = await fetch(pathname);
  const json = await jsn.json();
  return json.data;
}

export default async function decorate(block) {
  /* Decorate dutton */
  const btn = block.children[0].children[0];
  btn.classList.add('btn');
  const newDiv = document.createElement('div');
  block.appendChild(newDiv);
  /* bla */
  /* write json data on click */
  let jsonData = [];
  let html = '';
  const showData = async () => {
    if (jsonData.length === 0) {
      jsonData = [...await getJson('/json-data.json')];
    }
    jsonData.forEach((el) => {
      html += `${el.data}<br>`;
    });
    block.lastChild.innerHTML = html;
  };
  block.querySelector('.btn').addEventListener('click', showData);
}
