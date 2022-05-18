(function () {
  const source = document.querySelector(".image-wrapper");
  const code = document.createElement("code");
  code.innerText = source.innerHTML;
  document.body.appendChild(code);
})();
