//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...args) {
    const hash = (md5(args)).toString();
    console.log ("Хэш: " + hash);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }
   
    let result = func(...args);
    cache.push({hash, value: result}); 
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}



//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.allCount = 0;
  wrapper.count = 0;


  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId ) {
        console.log("Уже есть таймаут" + args);
        clearTimeout(timeoutId);
    }
    if (!timeoutId) {
        console.log("Нет таймаута, выполняем функцию" + args); 
      func.call(this,...args);
      wrapper.count++;
    }

    timeoutId = setTimeout(() => {
      console.log("Задержка больше" + delay);
      func.apply(this, args);
      wrapper.count++;
    }, delay);
     
}
return wrapper;
}
 