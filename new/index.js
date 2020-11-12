//default variables
let object
let projectInfo = {
  square: {},
  background: {},
  music: {}
}
const edit = document.getElementById("edit") //HTML 요소

//add attribute
for (let category in attr) {
  for (let i in attr[category]) {
    //div
    object = document.createElement("div")
    object.setAttribute('id', attr[category][i]["id"] + "div")
    object.setAttribute('class', category)
    object.style.marginBottom = "0.5vh"
    document.getElementById("category"+category[0].toUpperCase()+category.substring(1, category.length)).appendChild(object)

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

    //이벤트 등록
    const event = () => {
      setTimeout(() => {
        attr[category][i]["save"](document.getElementById("square"))
        projectInfo[category][attr[category][i]["id"]] = document.getElementById(attr[category][i]["id"]).value //projectInfo에 저장하기
      }, 10)
    }
    object.addEventListener("change", () => {
      event()
    })
    object.addEventListener("keydown", () => {
      event()
    })
    document.getElementById(attr[category][i]["id"]+"div").appendChild(object)

    //projectInfo 설정
    projectInfo[category][attr[category][i]["id"]] = document.getElementById(attr[category][i]["id"]).value
  }
}
