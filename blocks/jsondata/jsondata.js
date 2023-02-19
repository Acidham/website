export default async function decorate(block) {
  /* Decorate Button */
  const btn = block.children[0].children[0];
  btn.classList.add('btn');
  const newDiv = document.createElement('div');
  block.appendChild(newDiv);

  /* data can be written into div */
  /* const jsn = await fetch('/json-data.json');
  const json = await jsn.json();
  const txt = [];
  json.data.forEach((el) => {
    txt.push(el.data);
  });
  block.lastChild.innerHTML = txt.join('<br>'); */

  /* write json data on click */
  /* Eventlistner does not work */
  const showData = async () => {
    const jsn = await fetch('/json-data.json');
    const json = await jsn.json();
    const txt = [];
    json.data.forEach((el) => {
      txt.push(el.data);
    });
    block.lastChild.innerHTML = txt.join('<br>');
  };
  block.children[0].children[0].addEventListner('click', showData);
  /* block.querySelector('.btn').addEventListner('click', showData); */
}
