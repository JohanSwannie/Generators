function* theIdGenerator() {
  let number1 = 1;
  let number2 = 101;
  let number3 = 201;
  let number4 = 301;
  let companyId;

  while (true) {
    if (number3 > 300) {
      companyId = "AD" + number4;
      yield companyId;
      number4++;
    } else if (number2 > 200) {
      companyId = "AC" + number3;
      yield companyId;
      number3++;
    } else if (number1 > 100) {
      companyId = "AB" + number2;
      yield companyId;
      number2++;
    } else {
      if (number1 < 10) {
        companyId = "AA" + "0" + number1;
      } else {
        companyId = "AA" + number1;
      }
      yield companyId;
      number1++;
    }
  }
}

const genObject = theIdGenerator();

const container = document.querySelector(".company__id-list");

fetch("http://universities.hipolabs.com/search?country=United+Kingdom")
  .then((response) => response.json())
  .then((result) =>
    result.map((item) => {
      const id = genObject.next();
      const pippie = document.createElement("p");
      const paraString = item.name + "</br>" + id.value;
      pippie.innerHTML = paraString;
      container.appendChild(pippie);
    })
  );
