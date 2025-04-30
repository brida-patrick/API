const h3 = document.querySelector("h3");

const p = document.querySelector("p");

function ApiBlague() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      h3.textContent = data.data.content.text_head;
      p.textContent =
        data.data.content.text !== ""
          ? data.data.content.text
          : data.data.content.text_hidden;
    });
}

document.body.addEventListener("click", ApiBlague);
