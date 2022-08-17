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
}
export const total = new Total();
