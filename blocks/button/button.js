export default async function decorate(block) {
  /* Create button */
  const newBtn = document.createElement('button');
  newBtn.className = 'btn';
  const btnText = document.createTextNode('Show');
  newBtn.append(btnText);
  const currentDiv = block.firstChild;
  block.insertBefore(newBtn, currentDiv);

  /* Hide text */
  for (let i = 1; i <= 2; i += 1) {
    const theTxt = block.children[i].children[0];
    theTxt.classList.add('txt');
  }

  /* Listener */
  const btnFunc = () => { newBtn.innerText = block.children[1].children[0].innerText; };
  newBtn.addEventListener('click', btnFunc);
}
