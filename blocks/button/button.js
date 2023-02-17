function buttonTxt() {
  let text = [];
  const button = document.querySelector('.btn');
  text = button.querySelectorAll();
  const [, newText] = text;
  button.text = newText;
}

const buttonBlock = document.querySelector('.button block');
buttonBlock[0][0].className = '.btn';
buttonBlock[1][0].className = '.text';
buttonBlock[0][0].addEventListener('click', buttonTxt);
