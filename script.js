let formji = document.querySelector("form")


formji.addEventListener("submit", function (e) {
  e.preventDefault()

  let heightt = parseInt(document.querySelector("#height").value)
  let weightt = parseInt(document.querySelector("#weight").value)
  let resultt = document.querySelector("#result")


  if (resultt === ' ' || 0 > heightt || isNaN(heightt)) {
    resultt.innerHTML = `your height is not a ${heightt}`
  } else if (resultt === ' ' || 0 > weightt || isNaN(weightt)) {
    resultt.innerHTML = `your weight is not a ${weightt}`
  } else {
    let bmi = (weightt / ((heightt * heightt) / 10000)).toFixed(2)
    resultt.innerHTML = `Apka BMI  hai = ${bmi}`;

    if (bmi < 18.60) {
      resultt.innerHTML += "<br><p><b>You have an <u>Under Weight</u>.You will have to gain the weight as per BMI index.</b></p><p>- Under Weight = less than 18.6</p><p>- Normal Weight = 18.6 - 24.9</p><p>- Over Weight = greater than = 24.9</p>"

    } else if (bmi >= 18.60 && bmi <= 25.90) {
      resultt.innerHTML += "<br><p><b>You have a <u>normal Weight</u>.You don't have need to gain or less the weight as per BMI index.</b></p><p>- Under Weight = less than 18.6</p><p>- Normal Weight = 18.6 - 24.9</p><p>- Over Weight = greater than = 24.9</p>"
    } else {
      resultt.innerHTML += "<br><p><b>You have an <u>Over Weight</u>.You will have to less the weight as per BMI index.</b></p><p>- Under Weight = less than 18.6</p><p>- Normal Weight = 18.6 - 24.9</p><p>- Over Weight = greater than = 24.9</p>"
    }
  };

})









