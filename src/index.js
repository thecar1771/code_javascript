import "./styles.css";

let a;

const temp = function (a) {
  return a ** 2;
};

const temp2 = (a) => {
  return temp(a);
};

const temp3 = (a, b) => {
  return temp(a) * temp2(b);
};

var temp4 = (a, b) => {
  return a / b;
};

a = "바나나나" / "나나";

document.getElementById("app").innerHTML = `
  <div>${a}</div>
`;
