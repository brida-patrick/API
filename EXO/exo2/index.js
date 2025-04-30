let data = [];

async function GetApi() {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((res) => (data = res.results));
  console.log(data);
}

async function Display() {
  await GetApi();
  document.body.innerHTML = data
    .map(
      (resp) =>
        `
    <div class="card">
    <img src=${resp.picture.large} alt="photo" >
    <h3>${resp.name.first}  ${resp.name.last}</h3>
    </div>

    `
    )
    .join("");
}
Display();
