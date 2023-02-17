function buttonTxt() {
  let text = [];
  const button = document.querySelector('.button block');
  text = button.querySelectorAll();
  const [buttonText, newText] = text;
  document.querySelector('button').text = newText;
}

const button = document.querySelector('.button block')[0];
button.addEventListener('click', buttonTxt);
