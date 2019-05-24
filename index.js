function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var line = katzDeliLine.length;
  return (`Welcome, ${name}. You are number ${line} in line.`);
}