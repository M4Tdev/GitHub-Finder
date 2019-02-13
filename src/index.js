function component() {
  const element = document.createElement('div');

  element.textContent = 'TEST';

  return element;
}

document.body.appendChild(component());
