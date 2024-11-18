class Duck {
  constructor(name, color, age, weight, photo) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
    this.photo = photo;
  }
  show() {
    let str = `
    Duck Name: ${this.name},<br>
    Duck Color: ${this.color},<br>
    Duck Age: ${this.age}, <br>
    Duck Weight: ${this.weight}, <br>
    Duck Photo: ${this.photo}
    `;

    return str;
  }
  Quack() {
    let str = "";
    let x = (this.age * this.weight) / 2;
    console.log(x);
    for (let index = 0; index < x; index++) {
      str += "QUACK ";
    }
    return str;
  }
}

$(document).ready(() => {
  console.log("hi");

  $("#CreateDuck").click(() => {
    let dColor = $("#DuckColor").val();
    let dName = $("#DuckName").val();
    let dAge = $("#DuckAge").val();
    let dWeight = $("#DuckWeight").val();
    let dPhoto = $("#DuckPhoto").val();

    $("#DuckName").val("");
    $("#DuckColor").val("");
    $("#DuckAge").val("");
    $("#DuckWeight").val("");
    $("#DuckPhoto").val("");
    d1 = new Duck(dName, dColor, dAge, dWeight, dPhoto);
    console.log(d1);
    $("#CreateDuck").prop("disabled", true);
    $("#ShowDuck").show();
    $("#Quack").show();
  });

  $("#ShowDuck").click(() => {
    $("#ph").html("");
    $("#ph").html(d1.show());
  });

  $("#Quack").click(() => {
    $("#ph").html("");
    $("#ph").html(d1.Quack());
    const sound = new Audio("./QuackSound.mp3");
    playCount = 0;
    sound.play();
    sound.onended = function () {
      playCount++;
      if (playCount < 3) {
        sound.play();
      }
    };
  });
});
