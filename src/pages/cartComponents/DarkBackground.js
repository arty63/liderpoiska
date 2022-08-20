class DarkBg {
  render () {
    const body = document.querySelector('body')
    body.classList.toggle('fixed')
    const darkBg = document.createElement('div')
    darkBg.classList.add('dark-background')
    darkBg.classList.add('dark-background-active')
    body.appendChild(darkBg)
    darkBg.addEventListener('click', this.toggle)
    return darkBg
  }
  toggle(){
    
    document.querySelector('body').classList.remove('fixed')
    document.querySelector('.popup').remove()
    document.querySelector('.dark-background').remove()
  }
}
export const darkBg = new DarkBg()