class clock {
  constructor(hour, minutes, seconds, country) {
    this.hour = parseInt(hour);
    this.minutes = parseInt(minutes);
    this.seconds = parseInt(seconds);
    this.country = country;
  }

  ConverToSeconds() {
    let res = this.hour * 3600;
    res += this.minutes * 60;
    res += this.seconds;
    return "The time in seconds is: " + res + " seconds";
  }
  Show() {
    let str = "";
    if (this.hour <= 9) {
      str += "0";
      str += `${this.hour}`;
    } else str += `${this.hour}`;
    str += ":";

    if (this.minutes <= 9) {
      str += "0";
      str += `${this.minutes}`;
    } else str += `${this.minutes}`;
    str += ":";

    if (this.seconds <= 9) {
      str += "0";
      str += `${this.seconds}`;
    } else str += `${this.seconds}`;

    return str;
  }
}

let clockArr = [];

$(document).ready(() => {
  $("#SubmitBtn").click(() => {
    const newClock = new clock(
      $("#HourInput").val(),
      $("#MinutesInput").val(),
      $("#SecondsInput").val(),
      $("#CountryInput").val()
    );

    console.log(newClock);
    console.log(newClock.ConverToSeconds());
    console.log(newClock.Show());

    clockArr.push(newClock);

    $("#HourInput").val("");
    $("#MinutesInput").val("");
    $("#SecondsInput").val("");
    $("#CountryInput").val("");

    let str = "";

    if (clockArr.length === 5) {
      for (let index = 0; index < clockArr.length; index++) {
        str += `<br>
        Clock number ${index + 1}:<br>
        Country Name: ${clockArr[index].country}<br>
        Country Time: ${clockArr[index].Show()} <br>
        Country Time in Seconds: ${clockArr[index].ConverToSeconds()}
        <br>
        `;
      }
    }

    $("#ph").html(str);
  });
});
