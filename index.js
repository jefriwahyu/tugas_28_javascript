function regex(){
  let str = "abcdefghijklmnopqrstuvwxyz";

  const rst = str.search(/s/);

  return "Urut ke : " + rst;


}

console.log(regex());
