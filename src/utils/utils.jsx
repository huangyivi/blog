export function throttle(func, timeout) {
  let start = Date.now();
  return function (...args) {
    if (Date.now() - start >= timeout) {
      func(...args);
      start = Date.now();
    } 
  };
}

export function debounce(func, timeout) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
