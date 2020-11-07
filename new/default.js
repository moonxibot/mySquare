let projectInfo = {}
const edit = document.getElementById("edit")
let object
const addAttribute = (info) => {
  //글자
  object = document.createElement("span")
  object.style.fontSize = "1.05rem"
  object.style.marginRight = "1vh";
  object.innerText = info["label"]
  edit.appendChild(object)

  //입력
  object = document.createElement("input")
  for (var i in info["info"]) {
    object.setAttribute(i, info["info"][i])
  }
  object.style.fontSize = "1.05rem"
  object.value = info["default"]
  edit.appendChild(object)
}
