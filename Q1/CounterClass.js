let count1;

class Counter {
  constructor() {
    this.num = 0;
  }

  initialize(param) {
    this.num = parseInt(param);
  }

  increment() {
    this.num = this.num + 1;
    return this.num;
  }

  Go() {
    let str = "";
    for (let index = 0; index < this.num; index++) {
      str += `${index + ", "}`;
    }
    return str;
  }
}

$(document).ready(() => {
  console.log("hi");
  count1 = new Counter();
  console.log(count1);

  $("#StartBtn").click(function () {
    let inputValue = $("#Input").val();
    count1.initialize(inputValue);
    console.log(count1);
  });

  $("#IncBtn").click(() => {
    let n1 = count1.increment();
    console.log(n1);
    $("#Input").val(count1.num);
  });

  $("#Go").click(() => {
    $("#ph").html(count1.Go());
  });
});
