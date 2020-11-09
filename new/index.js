//default variables
let object
const edit = document.getElementById("edit")

//add attribute
for (let category in attr) {
  for (let i in attr[category]) {
    //div
    object = document.createElement("div")
    object.setAttribute('id', attr[category][i]["id"] + "div")
    object.setAttribute('class', category)
    object.style.marginBottom = "0.5vh"
    edit.appendChild(object)

    //text
    object = document.createElement("span")
    object.setAttribute("class", "editLabel")
    object.innerText = attr[category][i]["label"]
    document.getElementById(attr[category][i]["id"]+"div").appendChild(object)

    //input
    object = document.createElement("input")
    object.setAttribute("id", attr[category][i]["id"])
    for (let attrKey in attr[category][i]["inputAttr"]) { //set input Attribute
      object.setAttribute(attrKey, attr[category][i]["inputAttr"][attrKey])
    }
    object.setAttribute("class", "editInput")
    object.value = attr[category][i]["defaultValue"]
    attr[category][i]["default"](document.getElementById("square")) //square default setting.

    object.addEventListener("keypress", function() {
      setTimeout(() => {
        attr[category][i]["save"](document.getElementById("square"))
      }, 10) //딜레이 주기
    })

    document.getElementById(attr[category][i]["id"]+"div").appendChild(object)
  }
}
