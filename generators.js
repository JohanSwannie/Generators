function* theIdGenerator() {
  let prefix = ["AA", "AB", "AC", "AD"];
  let number1 = 1;
  let number2 = 101;
  let number3 = 201;
  let number4 = 301;
  let companyId;
  let finish = false;

  while (!finish) {
    if (number3 > 300) {
      companyId = prefix[3] + number4;
      yield companyId;
      number4++;
    } else if (number2 > 200) {
      companyId = prefix[2] + number3;
      yield companyId;
      number3++;
    } else if (number1 > 100) {
      companyId = prefix[1] + number2;
      yield companyId;
      number2++;
    } else {
      companyId = prefix[0] + number1;
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
