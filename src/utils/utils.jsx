export function throttle(func, timeout) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      func(...args);
      timer = null;
    }, timeout);
  };
}


export function debounce(func,timeout) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    }
}