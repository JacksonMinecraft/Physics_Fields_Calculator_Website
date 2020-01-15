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

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function calculateGrav() {
  var gg, ga, gc, fg1, fg2, v1, v2, a1, a2, m1, m2, m3, r1, r2, r3, r1a, r2a, r3a, t, f;
  gg = 9.81;
  ga = 270;
  gc = 6.67 * Math.pow(10, -11);

  for (var dub = 0; dub < 8; dub++)
  {
    m1 = document.getElementById("m1").value;
    m2 = document.getElementById("m2").value;
    m3 = document.getElementById("m3").value;
    t = document.getElementById("t").value;
    f = document.getElementById("f").value;
    f1 = document.getElementById("f1").value;
    f2 = document.getElementById("f2").value;
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    v1 = document.getElementById("v1").value;
    v2 = document.getElementById("v2").value;
    r1 = document.getElementById("r1").value;
    r2 = document.getElementById("r2").value;
    r3 = document.getElementById("r3").value;
    r1a = document.getElementById("r1a").value;
    r2a = document.getElementById("r2a").value;
    r3a = document.getElementById("r3a").value;

    //ac = v^2 / r
    if (!isNaN(v1) && !isNaN(r1) && a1 === '' && a2 === '' && r1a === '' && v2 === '' && v1 > 0 && r1 > 0) {
      document.getElementById("a1").value = Math.pow(v1, 2) / r1;
    } if (!isNaN(v1) && !isNaN(a1) && r1 === '' && a2 === '' && r1a === '' && v2 === '' && v1 > 0 && a1 > 0) {
      document.getElementById("r1").value = Math.pow(v1, 2) / a1;
    } if (!isNaN(a1) && !isNaN(r1) && v1 === '' && a2 === '' && r1a === '' && v2 === '' && a1 > 0 && r1 > 0) {
      document.getElementById("v1").value = Math.sqrt(a1 * r1);
    }

    //ac = 4 * PI^2 * r / T^2
    if (!isNaN(t) && !isNaN(r1) && a1 === '' && a2 === '' && r1a === '' && v1 === '' && t > 0 && r1 > 0) {
      document.getElementById("a1").value = 4 * Math.pow(Math.PI, 2) * r1 / Math.pow(t, 2);
    } if (!isNaN(a1) && !isNaN(r1) && t === '' && a2 === '' && r1a === '' && v1 === '' && a1 > 0 && r1 > 0) {
      document.getElementById("t").value = Math.sqrt(4 * Math.pow(Math.PI, 2) * r1 / a1);
    } if (!isNaN(t) && !isNaN(a1) && r1 === '' && a2 === '' && r1a === '' && v1 === '' && t > 0 && a1 > 0) {
      document.getElementById("r1").value = ac * Math.pow(t, 2) / (4 * Math.pow(Math.PI, 2));
    }

    // Fc = m * v^2 / r
    if (!isNaN(m1) && !isNaN(v1) && !isNaN(r1) && r1a === '' && f1 === '' && v2 === '' && m1 > 0 && v1 > 0 && r1 > 0) {
      document.getElementById("f1").value = m1 * Math.pow(v1, 2) / r1;
    } if (!isNaN(f1) && !isNaN(v1) && !isNaN(r1) && r1a === '' && m1 === '' && v2 === '' && f1 > 0 && v1 > 0 && r1 > 0) {
      document.getElementById("m1").value = f1 * r1 / Math.pow(v1, 2);
    } if (!isNaN(m1) && !isNaN(f1) && !isNaN(r1) && r1a === '' && v1 === '' && v2 === '' && m1 > 0 && f1 > 0 && r1 > 0) {
      document.getElementById("v1").value = Math.sqrt(f1 * r1 / m1);
    } if (!isNaN(m1) && !isNaN(v1) && !isNaN(f1) && r1a === '' && r1 === '' && v2 === '' && m1 > 0 && v1 > 0 && f1 > 0) {
      document.getElementById("r1").value = m1 * Math.pow(v1, 2) / f1;
    }

    //Fg = G * m1 * m2 / r^2
    if (!isNaN(m1) && !isNaN(m2) && !isNaN(r1) && f1 === '' && r2 === '' && r3 === '' && m3 === '' && m1 > 0 && m2 > 0 && r1 > 0) {
      document.getElementById("f1").value = gc * m1 * m2 / Math.pow(r1, 2);
    } if (!isNaN(m1) && !isNaN(m2) && !isNaN(f1) && r1 === '' && r2 === '' && r3 === '' && m3 === '' && m1 > 0 && m2 > 0 && f1 > 0) {
      document.getElementById("r1").value = Math.sqrt(gc * m1 * m2 / f1);
    } if (!isNaN(f1) && !isNaN(m2) && !isNaN(r1) && m1 === '' && r2 === '' && r3 === '' && m3 === '' && f1 > 0 && m2 > 0 && r1 > 0) {
      document.getElementById("m1").value = f1 * Math.pow(r1, 2) / (gc * m2);
    } if (!isNaN(m1) && !isNaN(f1) && !isNaN(r1) && m2 === '' && r2 === '' && r3 === '' && m3 === '' && m1 > 0 && f1 > 0 && r1 > 0) {
      document.getElementById("m2").value = f1 * Math.pow(r1, 2) / (gc * m1);
    } if (!isNaN(m1) && !isNaN(m2) && !isNaN(m3) && !isNaN(r1) && !isNaN(r2) && r3 === '' && !isNaN(r1a) && !isNaN(r2a) && r3a === '' &&  a1 === '' && a2 === '' && m1 > 0 && m2 > 0 && m3 > 0 && r1 > 0 && r2 > 0) {
      var x = gc * (m1 / Math.pow(r1, 2) * Math.cos(toRadians(r1a)) + m2 / Math.pow(r2, 2) * Math.cos(toRadians(r2a)));
      var y = gc * (m1 / Math.pow(r1, 2) * Math.sin(toRadians(r1a)) + m2 / Math.pow(r2, 2) * Math.sin(toRadians(r2a)));
      document.getElementById("a1").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      document.getElementById("a2").value = toDegrees(Math.atan(y / x));
      document.getElementById("f1").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * m3;
      document.getElementById("f2").value = toDegrees(Math.atan(y / x));
    }

    //Fg = m * g
    if (!isNaN(m1) && m2 === '' && f1 === '' && a1 === '' && a2 === '' && v1 === '' && m1 > 0) {
      document.getElementById("f1").value = m1 * gg;
    } if (!isNaN(f1) && m2 === '' && m1 === '' && a1 === '' && a2 === '' && v1 === '' && f1 > 0) {
      document.getElementById("f1").value = f1 / gg;
    }

    // T = 1 / f   &   f = 1 / T
    if (!isNaN(f) && t === '' && f > 0) {
      document.getElementById("t").value = 1 / f;
    } if (!isNaN(t) && f === '' && v2 === '' && a2 === '' && t > 0) {
      document.getElementById("f").value = 1 / t;
    }

    //g = G * m1 / r^2
    if (!isNaN(m1) && m3 === '' && !isNaN(r1) && r2 === '' && r3 === '' && r1a === '' && r2a === '' && r3a === '' &&  a1 === '' && a2 === '' && m1 > 0 && r1 > 0) {
      document.getElementById("a1").value = gc * m1 / Math.pow(r1, 2);
    } if (!isNaN(a1) && m3 === '' && !isNaN(r1) && r2 === '' && r3 === '' && r1a === '' && r2a === '' && r3a === '' &&  a1 === '' && a2 === '' && a1 > 0 && r1 > 0) {
      document.getElementById("m1").value = a1 * Math.pow(r1, 2) / gc;
    } if (!isNaN(m1) && m3 === '' && !isNaN(a1) && r2 === '' && r3 === '' && r1a === '' && r2a === '' && r3a === '' &&  a1 === '' && a2 === '' && m1 > 0 && a1 > 0) {
      document.getElementById("r1").value = Math.sqrt(gc * m1 / a1);
    } if (!isNaN(m1) && !isNaN(m2) && m3 === '' && !isNaN(r1) && !isNaN(r2) && r3 === '' && !isNaN(r1a) && !isNaN(r2a) && r3a === '' &&  a1 === '' && a2 === '' && m1 > 0 && m2 > 0 && r1 > 0 && r2 > 0) {
      var x = gc * (m1 / Math.pow(r1, 2) * Math.cos(toRadians(r1a)) + m2 / Math.pow(r2, 2) * Math.cos(toRadians(r2a)));
      var y = gc * (m1 / Math.pow(r1, 2) * Math.sin(toRadians(r1a)) + m2 / Math.pow(r2, 2) * Math.sin(toRadians(r2a)));
      document.getElementById("a1").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      document.getElementById("a2").value = toDegrees(Math.atan(y / x));
    } if (!isNaN(m1) && !isNaN(m2) && !isNaN(m3) && !isNaN(r1) && !isNaN(r2) && !isNaN(r3) && !isNaN(r1a) && !isNaN(r2a) && !isNaN(r3a) && a1 === '' && a2 === '' && m1 > 0 && m2 > 0 && m3 > 0 && r1 > 0 && r2 > 0 && r3 > 0) {
      var x = gc * (m1 / Math.pow(r1, 2) * Math.cos(toRadians(r1a)) + m2 / Math.pow(r2, 2) * Math.cos(toRadians(r2a)) + m3 / Math.pow(r3, 2) * Math.cos(toRadians(r3a)));
      var y = gc * (m1 / Math.pow(r1, 2) * Math.sin(toRadians(r1a)) + m2 / Math.pow(r2, 2) * Math.sin(toRadians(r2a)) + m3 / Math.pow(r3, 2) * Math.sin(toRadians(r3a)));
      document.getElementById("a1").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      document.getElementById("a2").value = toDegrees(Math.atan(y / x));
    }

    //a = v / t
    if (!isNaN(v1) && !isNaN(v2) && !isNaN(t) && f === '' && a1 === '' && a2 === '' && v1 > 0 && v2 > 0 && t > 0) {
      document.getElementById("a1").value = v1 / t;
      document.getElementById("a2").value = v2;
    } if (!isNaN(a1) && !isNaN(a2) && !isNaN(t) && f === '' && v1 === '' && v2 === '' && a1 > 0 && a2 > 0 && t > 0) {
      document.getElementById("v1").value = a1 * t;
      document.getElementById("v2").value = a2;
    } if (!isNaN(v1) && !isNaN(v2) && !isNaN(a1) && !isNaN(a2) && f === '' && t === '' && v1 > 0 && v2 > 0 && a1 > 0 && a2 > 0 && v2 === a2) {
      document.getElementById("t").value = v1 / a1;
    }
  }
}

function calculateElec() {
  var q, k, me, mp, en1, vo1, m4, q1, q2, q3, f3, f4, e1, e2, a3, a4, v3, v4, r4, r4a, r5, r5a, r6, r6a;
  q = 1.6 * Math.pow(10, -19);
  k = 9 * Math.pow(10, 9);
  me = 9.11 * Math.pow(10, -31);
  mp = 1.67 * Math.pow(10, -27);

  for (var dub = 0; dub < 8; dub++)
  {
    en1 = document.getElementById("en1").value;
    vo1 = document.getElementById("vo1").value;
    m4 = document.getElementById("m4").value;
    q1 = document.getElementById("q1").value;
    q2 = document.getElementById("q2").value;
    q3 = document.getElementById("q3").value;
    f3 = document.getElementById("f3").value;
    f4 = document.getElementById("f4").value;
    e1 = document.getElementById("e1").value;
    e2 = document.getElementById("e2").value;
    a3 = document.getElementById("a3").value;
    a4 = document.getElementById("a4").value;
    v3 = document.getElementById("v3").value;
    v4 = document.getElementById("v4").value;
    r4 = document.getElementById("r4").value;
    r4a = document.getElementById("r4a").value;
    r5 = document.getElementById("r5").value;
    r5a = document.getElementById("r5a").value;
    r6 = document.getElementById("r6").value;
    r6a = document.getElementById("r6a").value;

    //FE = k * q1 * q2 / r^2
    if (!isNaN(q1) && !isNaN(q2) && !isNaN(r4) && f3 === '' && r5 === '' && q3 === '' && q1 > 0 && q2 > 0 && r4 > 0) {
      document.getElementById("f3").value = k * q1 * q2 / Math.pow(r4, 2);
    } if (!isNaN(q1) && !isNaN(q2) && !isNaN(f3) && r4 === '' && r5 === '' && q3 === '' && q1 > 0 && q2 > 0 && f3 > 0) {
      document.getElementById("r4").value = Math.sqrt(k * q1 * q2 / f3);
    } if (!isNaN(f3) && !isNaN(q2) && !isNaN(r4) && q1 === '' && r5 === '' && q3 === '' && f3 > 0 && q2 > 0 && r4 > 0) {
      document.getElementById("q1").value = f3 * Math.pow(r4, 2) / (k * q2);
    } if (!isNaN(q1) && !isNaN(f3) && !isNaN(r4) && q2 === '' && r5 === '' && q3 === '' && q1 > 0 && f3 > 0 && r4 > 0) {
      document.getElementById("q2").value = f3 * Math.pow(r4, 2) / (k * q1);
    } if (!isNaN(q1) && !isNaN(q2) && !isNaN(q3) && !isNaN(r4) && !isNaN(r5) && r6 === '' && !isNaN(r4a) && !isNaN(r5a) && r6a === '' &&  a3 === '' && a4 === '' && q1 > 0 && q2 > 0 && q3 > 0 && r4 > 0 && r5 > 0) {
      var x = k * (q1 / Math.pow(r4, 2) * Math.cos(toRadians(r4a)) + q2 / Math.pow(r5, 2) * Math.cos(toRadians(r5a)));
      var y = k * (q1 / Math.pow(r4, 2) * Math.sin(toRadians(r4a)) + q2 / Math.pow(r5, 2) * Math.sin(toRadians(r5a)));
      document.getElementById("a1").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      document.getElementById("a2").value = toDegrees(Math.atan(y / x));
      document.getElementById("f1").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * q3;
      document.getElementById("f2").value = toDegrees(Math.atan(y / x));

      //ε = k * q / r^2
      if (!isNaN(q1) && !isNaN(r4) && e1 === '' && r5 === '' && q3 === '' && r4a === '' && r5a === '' && r6 == '' && r6a === '' && q1 > 0 && r4 > 0) {
        document.getElementById("e1").value = k * q1 / Math.pow(r4, 2);
      } if (!isNaN(e1) && !isNaN(r4) && q1 === '' && r5 === '' && q3 === '' && r4a === '' && r5a === '' && r6 == '' && r6a === '' && e1 > 0 && r4 > 0) {
        document.getElementById("q1").value = e1 * Math.pow(r4, 2) / k;
      } if (!isNaN(q1) && !isNaN(e1) && r4 === '' && r5 === '' && q3 === '' && r4a === '' && r5a === '' && r6 == '' && r6a === '' && q1 > 0 && r4 > 0) {
        document.getElementById("r4").value = Math.sqrt(k * q1 / e1);
      } if (!isNaN(q1) && !isNaN(q2) && q3 === '' && !isNaN(r4) && !isNaN(r5) && r6 === '' && !isNaN(r4a) && !isNaN(r5a) && r6a === '' &&  a3 === '' && a4 === '' && q1 > 0 && q2 > 0 && r4 > 0 && r5 > 0) {
        var x = gc * (q1 / Math.pow(r4, 2) * Math.cos(toRadians(r4a)) + q2 / Math.pow(r5, 2) * Math.cos(toRadians(r5a)));
        var y = gc * (q1 / Math.pow(r4, 2) * Math.sin(toRadians(r4a)) + q2 / Math.pow(r5, 2) * Math.sin(toRadians(r5a)));
        document.getElementById("a3").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        document.getElementById("a4").value = toDegrees(Math.atan(y / x));
      } if (!isNaN(q1) && !isNaN(q2) && !isNaN(q3) && !isNaN(r4) && !isNaN(r5) && !isNaN(r6) && !isNaN(r4a) && !isNaN(r5a) && !isNaN(r6a) && a3 === '' && a4 === '' && q1 > 0 && q2 > 0 && q3 > 0 && r4 > 0 && r5 > 0 && r6 > 0) {
        var x = gc * (q1 / Math.pow(r4, 2) * Math.cos(toRadians(r4a)) + q2 / Math.pow(r5, 2) * Math.cos(toRadians(r5a)) + q3 / Math.pow(r6, 2) * Math.cos(toRadians(r6a)));
        var y = gc * (q1 / Math.pow(r4, 2) * Math.sin(toRadians(r4a)) + q2 / Math.pow(r5, 2) * Math.sin(toRadians(r5a)) + q3 / Math.pow(r6, 2) * Math.sin(toRadians(r6a)));
        document.getElementById("a3").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        document.getElementById("a4").value = toDegrees(Math.atan(y / x));
      }

      //ε = FE / q2
      if (!isNaN(f3) && !isNaN(f4) && !isNaN(q2) && e1 === '' && e2 === '' && f3 > 0 && f4 > 0 && q2 > 0) {
        document.getElementById("e1").value = f3 / q2;
        document.getElementById("e2").value = f4;
      } if (!isNaN(e1) && !isNaN(e2) && !isNaN(q2) && f3 === '' && f4 === '' && e1 > 0 && e2 > 0 && q2 > 0) {
        document.getElementById("f3").value = e1 * q2;
        document.getElementById("f4").value = e2;
      } if (!isNaN(f3) && !isNaN(f4) && !isNaN(e1) && !isNaN(e2) && q2 === '' && f3 > 0 && f4 > 0 && e1 > 0 && e2 > 0 && f4 === e2) {
        document.getElementById("q2").value = f3 / e1;
      }

      //ε = v / d
      if (!isNaN(vo1) && !isNaN(r4) && a3 === '' && a4 === '' && r4a === '' && vo2 === '' && vo1 > 0 && r4 > 0) {
        document.getElementById("a3").value = Math.pow(vo1, 2) / r4;
      } if (!isNaN(vo1) && !isNaN(a3) && r4 === '' && a4 === '' && r4a === '' && vo2 === '' && vo1 > 0 && a1 > 0) {
        document.getElementById("r1").value = Math.pow(vo1, 2) / a3;
      } if (!isNaN(a3) && !isNaN(r4) && vo1 === '' && a4 === '' && r4a === '' && vo2 === '' && a3 > 0 && r4 > 0) {
        document.getElementById("vo1").value = Math.sqrt(a3 * r1);
      }

      //EE = k * q1 * q2 / r
      if (!isNaN(q1) && !isNaN(q2) && !isNaN(r4) && en1 === '' && r5 === '' && r6 === '' && q3 === '' && q1 > 0 && q2 > 0 && r4 > 0) {
        document.getElementById("en1").value = k * q1 * q2 / r4;
      } if (!isNaN(q1) && !isNaN(q2) && !isNaN(en1) && r4 === '' && r5 === '' && r6 === '' && q3 === '' && q1 > 0 && q2 > 0 && en1 > 0) {
        document.getElementById("r4").value = k * q1 * q2 / en1;
      } if (!isNaN(en1) && !isNaN(q2) && !isNaN(r4) && q1 === '' && r5 === '' && r6 === '' && q3 === '' && en1 > 0 && q2 > 0 && r4 > 0) {
        document.getElementById("q1").value = en1 * r4 / (k * q2);
      } if (!isNaN(q1) && !isNaN(en1) && !isNaN(r4) && q2 === '' && r5 === '' && r6 === '' && q3 === '' && q1 > 0 && en1 > 0 && r4 > 0) {
        document.getElementById("q2").value = en1 * r4 / (k * q1);
      } if (!isNaN(q1) && !isNaN(q2) && !isNaN(q3) && !isNaN(r4) && !isNaN(r5) && r6 === '' && !isNaN(r4a) && !isNaN(r5a) && r6a === '' &&  a3 === '' && a4 === '' && q1 > 0 && q2 > 0 && q3 > 0 && r4 > 0 && r5 > 0) {
        var x = k * (q1 / r4 * Math.cos(toRadians(r4a)) + q2 / r5 * Math.cos(toRadians(r5a)));
        var y = k * (q1 / r4 * Math.sin(toRadians(r4a)) + q2 / r5 * Math.sin(toRadians(r5a)));
        document.getElementById("en1").value = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * q3;
      }

      //EE = q * ε * d
      if (!isNaN(q1) && !isNaN(e1) && !isNaN(r4) && en1 === '' && r4a === '' && r5 === '' && r5a === '' && r6 === '' && r6a === '' && q1 > 0 && e1 > 0 && r4 > 0) {
        document.getElementById("en1").value = q1 * e1 * r4;
      } if (!isNaN(en1) && !isNaN(e1) && !isNaN(r4) && q1 === '' && r4a === '' && r5 === '' && r5a === '' && r6 === '' && r6a === '' && en1 > 0 && e1 > 0 && r4 > 0) {
        document.getElementById("q1").value = en1 / (e1 * r4);
      } if (!isNaN(q1) && !isNaN(en1) && !isNaN(r4) && e1 === '' && r4a === '' && r5 === '' && r5a === '' && r6 === '' && r6a === '' && q1 > 0 && en1 > 0 && r4 > 0) {
        document.getElementById("e1").value = en1 / (q1 * r4);
      } if (!isNaN(q1) && !isNaN(e1) && !isNaN(en1) && r4 === '' && r4a === '' && r5 === '' && r5a === '' && r6 === '' && r6a === '' && q1 > 0 && e1 > 0 && en1 > 0) {
        document.getElementById("r4").value = en1 / (e1 * q1);
      }

      //V = EE / q2
      if (!isNaN(en1) && !isNaN(q2) && vo1 === '' && en1 > 0 && q2 > 0) {
        document.getElementById("vo1").value = en1 / q2;
      } if (!isNaN(vo1) && !isNaN(q2) && en1 === '' && vo1 > 0 && q2 > 0) {
        document.getElementById("en1").value = vo1 * q2;
      } if (!isNaN(en1) && !isNaN(vo1) && q2 === '' && en1 > 0 && vo1 > 0) {
        document.getElementById("q2").value = en1 / vo1;
      }

      //V = k * q / r
      if (!isNaN(q1) && !isNaN(r4) && vo1 === '' && q1 > 0 && r4 > 0) {
        document.getElementById("vo1").value = k * q1 / r4;
      } if (!isNaN(vo1) && !isNaN(r4) && q1 === '' && vo1 > 0 && r4 > 0) {
        document.getElementById("q1").value = vo1 * r4 / k;
      } if (!isNaN(q1) && !isNaN(vo1) && r4 === '' && q1 > 0 && vo1 > 0) {
        document.getElementById("r4").value = k * q1 / vo1;
      }

      //Ek = m * v^2 / 2
      if (!isNaN(m4) && !isNaN(v3) && en1 === '' && m4 > 0 && v3 > 0) {
        document.getElementById("en1").value = m4 * Math.pow(v3, 2) / 2;
      } if (!isNaN(en1) && !isNaN(v3) && m4 === '' && en1 > 0 && v3 > 0) {
        document.getElementById("m4").value = en1 * 2 / Math.pow(v3, 2);
      } if (!isNaN(m4) && !isNaN(en1) && v3 === '' && m4 > 0 && en1 > 0) {
        document.getElementById("v3").value = Math.sqrt(en1 * 2 / m4);
      }

      //Fnet = m * a
      if (!isNaN(m4) && !isNaN(a3) && !isNaN(a4) && f3 === '' && f4 === '' && m4 > 0 && a3 > 0 && a4 > 0) {
        document.getElementById("f3").value = m4 * a3;
      } if (!isNaN(f3) && !isNaN(f4) && !isNaN(a3) && !isNaN(a4) && m4 === '' && f3 > 0 && f4 > 0 && a3 > 0 && a4 > 0) {
        document.getElementById("m4").value = f3 / a3;
      } if (!isNaN(m4) && !isNaN(f3) && !isNaN(f4) && a3 === '' && a4 === '' && m4 > 0 && f3 > 0 && f4 > 0) {
        document.getElementById("a3").value = f3 / m4;
      }
    }
  }
}

function calculateMagn() {
  var q, k, me, mp, q4, th, f5, f6, b1, v5, l1, i1;
  q = 1.6 * Math.pow(10, -19);
  k = 9 * Math.pow(10, 9);
  me = 9.11 * Math.pow(10, -31);
  mp = 1.67 * Math.pow(10, -27);
  q4 = document.getElementById("q4").value;
  th = document.getElementById("th").value;
  f5 = document.getElementById("f5").value;
  b = document.getElementById("b").value;
  v5 = document.getElementById("v5").value;
  l = document.getElementById("l").value;
  i = document.getElementById("i").value;

  //Fm = q * v * B * sinθ
  if (!isNaN(q4) && !isNaN(th) && !isNaN(b) && !isNAN(v5) && f5 === '' && l === '' && i === '' && b > 0 && v5 > 0 && th > 0) {
    document.getElementById("f5").value = q4 * v5 * b * Math.sin(toRadians(th));
  } if (!isNaN(f5) && !isNaN(th) && !isNaN(b) && !isNAN(v5) && q4 === '' && l === '' && i === '' && b > 0 && v5 > 0 && th > 0 && f5 > 0) {
    document.getElementById("q4").value = f5 / (v5 * b * Math.sin(toRadians(th)));
  } if (!isNaN(q4) && !isNaN(th) && !isNaN(f5) && !isNAN(v5) && b === '' && l === '' && i === '' && f5 > 0 && v5 > 0 && th > 0) {
    document.getElementById("b").value = f5 / (q4 * v5 * Math.sin(toRadians(th)));
  } if (!isNaN(q4) && !isNaN(th) && !isNaN(b) && !isNAN(f5) && v5 === '' && l === '' && i === '' && b > 0 && f5 > 0 && th > 0) {
    document.getElementById("v5").value = f5 / (q4 * b * Math.sin(toRadians(th)));
  } if (!isNaN(q4) && !isNaN(th) && !isNaN(b) && !isNAN(v5) && th === '' && l === '' && i === '' && b > 0 && v5 > 0 && f5 > 0) {
    document.getElementById("th").value = toDegrees(Math.asin(f5 / (q4 * v5 * b)));
  }

  //Fm = L * I * B * sinθ
  if (!isNaN(i) && !isNaN(th) && !isNaN(b) && !isNAN(l) && f5 === '' && v5 === '' && q4 === '' && b > 0 && l > 0 && th > 0) {
    document.getElementById("f5").value = i * l * b * Math.sin(toRadians(th));
  } if (!isNaN(f5) && !isNaN(th) && !isNaN(b) && !isNAN(l) && i === '' && v5 === '' && q4 === '' && b > 0 && l > 0 && th > 0 && f5 > 0) {
    document.getElementById("i").value = f5 / (l * b * Math.sin(toRadians(th)));
  } if (!isNaN(i) && !isNaN(th) && !isNaN(f5) && !isNAN(l) && b === '' && v5 === '' && q4 === '' && f5 > 0 && l > 0 && th > 0) {
    document.getElementById("b").value = f5 / (i * l * Math.sin(toRadians(th)));
  } if (!isNaN(i) && !isNaN(th) && !isNaN(b) && !isNAN(f5) && l === '' && v5 === '' && q4 === '' && b > 0 && f5 > 0 && th > 0) {
    document.getElementById("l").value = f5 / (i * b * Math.sin(toRadians(th)));
  } if (!isNaN(i) && !isNaN(th) && !isNaN(b) && !isNAN(l) && th === '' && v5 === '' && q4 === '' && b > 0 && l > 0 && f5 > 0) {
    document.getElementById("th").value = toDegrees(Math.asin(f5 / (i * l * b)));
  }
}
