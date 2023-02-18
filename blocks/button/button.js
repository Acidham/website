export default async function decorate(block) {
  /* Create button */
  const newBtn = document.createElement('button');
  newBtn.className = 'btn';
  const btnText = document.createTextNode('Show');
  newBtn.append(btnText);
  const currentDiv = block.firstChild;
  block.insertBefore(newBtn, currentDiv);

  const childrenLength = block.childElementCount - 1;
  /* Hide text */
  for (let i = 1; i <= childrenLength; i += 1) {
    const theTxt = block.children[i].children[0];
    theTxt.classList.add('txt');
  }

  /* Listener */
  let i = 1;
  const btnFunc = () => {
    if (i > childrenLength) {
      newBtn.innerText = 'Show';
      i = 1;
    } else {
      newBtn.innerText = block.children[i].children[0].innerText;
      i += 1;
    }
  };
  newBtn.addEventListener('click', btnFunc);
}
