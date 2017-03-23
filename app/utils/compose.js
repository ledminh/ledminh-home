export default function compose(...funcs){
  return (arg) => {
    let result = arg;

    for(let i = funcs.length - 1; i >= 0; i--){
        result = funcs[i](result);
    }

    return result;
  }
}
