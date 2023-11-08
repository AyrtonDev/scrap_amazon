export default function loaderComponent(isActive) {
  const main = document.querySelector('main');

  if (isActive) {
    const overlay = document.createElement('div');
    const spin = document.createElement('div');

    spin.classList.add('spin-loader');
    overlay.appendChild(spin);
    overlay.classList.add('overlay');
    main.appendChild(overlay);
  } else {
    main.removeChild(main.lastChild);
  }
}
