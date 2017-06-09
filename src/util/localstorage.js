const ls = {
  checkApp() {
    if (window.localStorage.habitAppExists) {
      return true
    }
    return false
  },
  setValue(key, value) {
    window.localStorage.setItem(key, value)
  },
  getData(key) {
    return window.localStorage.getItem(key)
  },
  deleteAll() {
    window.localStorage.clear()
  }
}

export default ls;
