function h() {
    let n = Number(document.querySelector('.i').value) * 100;
    let o = 0;
    if (n >= 4000) {
      o = 0;
    } else if (n >= 3000 && n < 4000) {
      o = (4000 - n) / 100;
    } else if (n > 0 && n < 3000) {
      o = (1000) / 100;
    } else {
      document.querySelector('.q').innerText = `tax fraud :3`;
      return;
    }
    document.querySelector('.q').innerText = `calculated tax: ${o}$`;
  }
function p() {
    if (event.key == 'Enter') {
    h();
    return;
    }
}
function e(d) {
    c = Math.random();

    if (0 <= c && c < 1/3) {
    c = 'rock';
    return c;
    } else if (1/3 <= c && c < 2/3) {
    c = 'paper';
    return c;
    } else if (2/3 <= c && c < 1) {
    c = 'scissors';
    return c;
    } else {
    console.log('something went wrong');
    }
}
function f (c, d) {
    if (d == c) {
    g.ties++;
    localStorage.setItem('score', JSON.stringify(g));
    if (d == 'rock') {
        document.querySelector('.r').innerHTML = `you ✊✊ computer - tie`
    } else if (d == 'paper') {
        document.querySelector('.r').innerHTML = `you ✋✋ computer - tie`
    } else if (d == 'scissors') {
        document.querySelector('.r').innerHTML = `you ✌️✌️ computer - tie`
    }
    } else if (d == 'rock' && c == 'paper') {
    g.loses++;
    document.querySelector('.r').innerHTML = `you ✊✋ computer - lose`
    localStorage.setItem('score', JSON.stringify(g));
    } else if (d == 'paper' && c == 'scissors') {
    g.loses++;
    document.querySelector('.r').innerHTML = `you ✋✌️ computer - lose`
    localStorage.setItem('score', JSON.stringify(g));
    } else if (d == 'scissors' && c == 'rock') {
    g.loses++;
    document.querySelector('.r').innerHTML = `you ✌️✊ computer - lose`
    localStorage.setItem('score', JSON.stringify(g));
    } else if (d == 'paper' && c == 'rock') {
    g.wins++;
    document.querySelector('.r').innerHTML = `you ✋✊ computer - win`
    localStorage.setItem('score', JSON.stringify(g));
    } else if (d == 'scissors' && c == 'paper') {
    g.wins++;
    document.querySelector('.r').innerHTML = `you ✌️✋ computer - win`
    localStorage.setItem('score', JSON.stringify(g));
    } else if (d == 'rock' && c == 'scissors') {
    g.wins++;
    document.querySelector('.r').innerHTML = `you ✊✌️ computer - win`
    localStorage.setItem('score', JSON.stringify(g));
    }
    document.querySelector('.k').innerHTML = `wins: ${g.wins}, ties ${g.ties}, loses: ${g.loses}`
}
function m() {
    localStorage.setItem('a', JSON.stringify(a));
    document.querySelector('.j').innerText = `your cart: ${a}`;
}
let todo = [];
function nya() {
  let nya18 = document.querySelector('.nya17');
  let nya19 = nya18.value;
  let nya2 = document.querySelector('.nya16');
  let nya3 = nya2.value;
  if (nya3 != '') {
    if (document.querySelector('.nya7').innerHTML == `<div class="nya11">blank</div>`) {
      document.querySelector('.nya7').innerHTML == ``;
    }
    todo.push({
      name: nya3,
      date: nya19
    });
    nya18.value = '';
    nya2.value = '';
  } else {
    console.log('you cant have a blank todo')
    return;
  }
  nya13();
}
function nya9() {
  if (event.key == 'Enter') {
    nya();
    return;
    }
  }
function nya10() {
  todo = [];
  document.querySelector('.nya7').innerHTML = 
  `<div class="nya11">blank</div>`;
  let nya2 = document.querySelector('.nya1');
  nya2.value = '';
}
function nya13() {
  let nya6 = '';
  if (todo.length == 0) {
    document.querySelector('.nya7').innerHTML = 
    `<div class="nya11">blank</div>`;
  }
  for (let nya4 = 0; nya4 < todo.length; nya4++) {
    let nya5 = todo[nya4];
    let nya14 = nya5.name;
    let nya15 = nya5.date;
    let html = `
      <div class="nya8">
      <div>
        ${nya14}
      </div>
      <div class="nya20">
        ${nya15}
      </div>
      <button class="nya12"
        onclick="todo.splice(${nya4}, 1);
        nya13();">✖️</button></div>`;
    nya6 += html;
    document.querySelector('.nya7').innerHTML = nya6;
  }
}