export default function loaderComponent(isActive) {
  const body = document.querySelector('body');
  const main = document.querySelector('main');

  if (isActive) {
    const overlay = document.createElement('div');
    const spin = document.createElement('div');

    spin.classList.add('spin-loader');
    overlay.appendChild(spin);
    overlay.classList.add('overlay');
    main.appendChild(overlay);
    body.classList.add('no-scroll');
  } else {
    main.removeChild(main.lastChild);
    body.classList.remove('no-scroll');
  }
}
