let a = Number(prompt ("Digite o valor de a: "));
let b = Number(prompt ("Digite o valor de b: "));
let c = Number(prompt ("Digite o valor de c: "));

let delta = (Math.pow(b,2) -4*a*c); 

if (delta < 0) {
  document.body.innerHTML += "<p>A equação não possui raízes reais.</p>";
} else {
  let x1 = (-b + Math.sqrt(delta)/(2*a));
  let x2 = (-b - Math.sqrt(delta)/(2*a));

  document.body.innerHTML += "<p>O valor de x1 é: " + x1.toFixed(2) + "</p>";
  document.body.innerHTML += "<p>O valor de x2 é: " + x2.toFixed(2) + "</p>";
}