const URL = "https://cat-fact.herokuapp.com/facts";

const kk = async() => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data[0].text); //0th index -> text
  console.log(data[0].status); //status on 0th index
}
console.log(kk());