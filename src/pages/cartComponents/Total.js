class Total {
  render() {
    const total = document.createElement('p');
    total.classList.add('count-of-price__count');
    const count = document.querySelectorAll('.goods__price');
    const arr = [];
    count.forEach(el => arr.push(el.textContent.replace(' ₽', '') - 0));
    const res = arr.reduce((sum, current) => sum + current, 0);
    total.textContent = `${res} ₽`;
    return total;
  }

  refresh() {
    const total = document.querySelector('.count-of-price__count');
    const count = document.querySelectorAll('.goods__price');
    const sum = document.querySelectorAll('.control-buttons__sum');
    const sum1 = [];
    sum.forEach(el => sum1.push(el.textContent - 0));
    const arr = [];
    const arr1 = [];
    count.forEach(el => arr1.push(el.textContent.replace(' ₽', '') - 0));
    for (let i = 0; i < sum1.length; i++) {
      arr.push(sum1[i] * arr1[i]);
    }
    const res = arr.reduce((summa, current) => summa + current, 0);
    total.textContent = `${res} ₽`;
  }
}
export const total = new Total();
