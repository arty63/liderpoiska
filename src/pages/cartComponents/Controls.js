class Controls {
  render() {
    const controls = document.createElement('div');
    controls.classList.add('control-buttons');

    const btnMin = document.createElement('button');
    btnMin.classList.add('control-buttons__minus');

    const sum = document.createElement('span');
    sum.classList.add('control-buttons__sum');

    const btnPlus = document.createElement('button');
    btnPlus.classList.add('control-buttons__plus');

    controls.appendChild(btnMin);
    controls.appendChild(sum);
    controls.appendChild(btnPlus);

    return controls;
  }
}
export const controls = new Controls();
