const ls = {
  appExists() {
    return window.localStorage.habitAppExists ? true : false;
  },
  setValue(key, value) {
    window.localStorage.setItem(key, value);
  },
  getData(key) {
    return window.localStorage.getItem(key);
  },
  deleteAll() {
    window.localStorage.clear();
  }
};

export default ls;
