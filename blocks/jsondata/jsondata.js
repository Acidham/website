async function getJson(pathname) {
  const jsn = await fetch(pathname);
  const json = await jsn.json();
  return json.data;
}

export default async function decorate(block) {
  /* Decorate Button */
  const btn = block.children[0].children[0];
  btn.classList.add('btn');
  const newDiv = document.createElement('div');
  block.appendChild(newDiv);

  /* create and decorate search input field */
  const inputField = document.createElement('input');
  const input = btn.parentElement.appendChild(inputField);
  input.classList.add('searchfield');
  /*block.querySelector('searchfield').value('Shimano');
  block.querySelector('searchfield').innerHTML = 'Shimano';*/

  /* write json data on click */
  let jsonData = [];
  const showData = async () => {
    let html = '<table>';
    const searchTerm = input.value;
    if (jsonData.length === 0) {
      jsonData = [...await getJson('/json-data.json')];
    }
    const result = [];
    jsonData.forEach((el) => {
      if (el.Name.includes(searchTerm)) {
        result.push(el);
      }
    });
    if (result.length === 0) {
      html += `
        <tr>
            <td>nothing found</td>
        <tr>
        `;
    } else {
      result.forEach((el) => {
        html += `
        <tr>
          <td>Name:</td>
          <td>${el.Name}</td>
        </tr>
        <tr>
          <td>Size:</td>
          <td>${el.Size}</td>
        <tr>
          <td>Price:</td>
          <td>${el.Price}</td>
        </tr>`;
      });
    }
    html += '</table>';

    /* decorate box */
    block.lastChild.classList.add('flexcontainer');
    const flexContainer = block.querySelector('.flexcontainer');
    /* block.classList.add('flexcontainer'); */
    const boxDiv = document.createElement('div');
    const newBox = flexContainer.appendChild(boxDiv);
    newBox.classList.add('box');
    newBox.innerHTML = html;
  };
  block.querySelector('.btn').addEventListener('click', showData);
}
