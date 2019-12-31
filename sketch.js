function openPage(pageName, element, colour) {
  var content = document.getElementsByClassName("content");
  var tabs = document.getElementsByClassName("tabs");

  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  element.style.backgroundColor = colour;
}

openPage('homeContent', document.getElementById("homeButton"), 'green');

var gg, gc, q, k, me, mp, fn1, fn2, fg1, fg2, fc1, fc2, v1, v2, a1, a2, ac, g, m1, m2, r, t, f;
gg = 9.81;
gc = 6.67 * math.pow(10, -11);
q = 1.6 * math.pow(10, -19);
k = 9 * math.pow(10, 9);
me = 9.11 * math.pow(10, -31);
mp = 1.67 * math.pow(10, -27);
fn1 = document.getElementById("fn1");
fn2 = document.getElementById("fn2");
fg1 = document.getElementById("fg1");
fg2 = document.getElementById("fg2");
fc1 = document.getElementById("fc1");
fc2 = document.getElementById("fc2");
v1 = document.getElementById("v1");
v2 = document.getElementById("v2");
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
ac = document.getElementById("ac");
g = document.getElementById("g");
m1 = document.getElementById("m1");
m2 = document.getElementById("m2");
r = document.getElementById("r");
t = document.getElementById("t");
f = document.getElementById("f");
