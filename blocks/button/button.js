export default async function decorate(block) {
  /* Read variable text */
  const ul = block.querySelector('ul');
  const allLi = ul.querySelectorAll('li');
  const txtList = [];
  allLi.forEach((li) => {
    txtList.push(li.innerText);
  });

  /* Add Button Text */
  /* block.innerText = 'Show'; */

  /* ul.parentElement.removeChild('ul'); */

  /* Listener */
  let clickCounter = 0;
  const btnFunc = () => {
    if (clickCounter < txtList.length) {
      block.innerText = txtList[clickCounter];
      clickCounter += 1;
    } else {
      block.innerText = 'SHOW';
      clickCounter = 0;
    }
  };
  block.addEventListener('click', btnFunc);
}
