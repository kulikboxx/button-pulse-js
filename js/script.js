const button = document.querySelector('.button');

button.addEventListener('mousedown', (e) => {
  if (e.currentTarget && e.currentTarget === button) {
    const pulseElement = document.createElement('span');
    pulseElement.classList.add('pulse');

    pulseElement.style.left = e.offsetX + 'px';
    pulseElement.style.top = e.offsetY + 'px';

    button.append(pulseElement);

    button.addEventListener('animationend', () => pulseElement.remove());
  }
});
