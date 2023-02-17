function buttonTxt() {
  let text = [];
  const button = document.querySelector('button');
  text = button.querySelectorAll();
  const [buttonText, newText] = text;
  document.querySelector('button').text = newText;
}

const button = document.querySelector('button');
button.addEventListener('click', buttonTxt);
