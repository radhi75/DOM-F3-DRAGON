function hello() {
  if (document.getElementById("follower").innerHTML == 0) {
    document.getElementById("follower").innerHTML = 1;
    document.getElementById("follow").innerHTML = "unfollow";
    document.getElementById("follow").style.color = "white";
    document.getElementById("follow").style.backgroundColor = "lightblue";
  } else {
    document.getElementById("follower").innerHTML = 0;
    document.getElementById("follow").innerHTML = "follow";
    document.getElementById("follow").style.color = "black";
    document.getElementById("follow").style.backgroundColor =
      "rgba(206, 202, 202, 0.874)";
  }
}

var btnplus = document.querySelectorAll(".plus");
var qte = document.getElementsByClassName("qte");
var btnminus = document.querySelectorAll(".minus");

for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    return qte[i].innerHTML++;
  });
}

for (let i = 0; i < btnminus.length; i++) {
  btnminus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      return qte[i].innerHTML--;
    } else {
      return (qte[i].innerHTML = 0);
    }
  });
}

var heart = document.getElementsByClassName("fa-heart");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].style.color != "red") {
      return (heart[i].style.color = "red");
    } else {
      return (heart[i].style.color = "white");
    }
  });
}
var trash = document.querySelectorAll(".fa-trash-can");

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.remove();
  });
}

// var dragon = document.querySelectorAll(".fa-dragon");
// var fire = document.querySelectorAll(".fa-fire");
// for (let i = 0; i < dragon.length; i++) {
//   dragon[i].addEventListener("click", function () {
//     fire[i].setAttribute("id", "fire");
//   });
// }
var x = document.querySelectorAll(".myDIV");
var dragon = document.querySelectorAll(".fa-dragon");
for (let i = 0; i < dragon.length; i++) {
  dragon[i].addEventListener("click", function () {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
      x[i].setAttribute("id", "fire");
    } else {
      x[i].style.display = "none";
    }
  });
}
