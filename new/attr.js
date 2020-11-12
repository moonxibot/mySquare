/*
attr.js 파일에는 mySquare 2.0의 속성들이 모두 담깁니다.
*/
const attr = {
    "square": [
      {
        label: "가로",
        id: "width",
        inputAttr: {
          type: "Number"
        },
        default: (square) => {
          square.style.width = "300px"
        },
        defaultValue: "300",
        save: (square) => {
            if (Number(document.getElementById("width").value.replace("px", "")) > 500) {
              square.style.width = "500px"
            } else {
              square.style.width = document.getElementById("width").value + "px"
            }
        },
        load: (square, value) => {square.style.width = value}
      },
      {
        label: "세로",
        id: "height",
        inputAttr: {
          type: "Number"
        },
        default: (square) => {
          square.style.height = "300px"
        },
        defaultValue: "300",
        save: (square) => {
          if (Number(document.getElementById("height").value.replace("px", "")) > 500) {
            square.style.height = "500px"
          } else {
            square.style.height = document.getElementById("height").value + "px"
          }
        },
        load: (square, value) => {square.style.height = value}
      },
      {
        label: "배경색",
        id: "bgColor",
        inputAttr: {
          type: "color"
        },
        default: (square) => {
          square.style.color = "#0073ff"
        },
        defaultValue: "#0073ff",
        save: (square) => {
          square.style.backgroundColor = document.getElementById("bgColor").value
        },
        load: (square, value) => {square.style.backgroundColor = value}
      },
      {
        label: "굴곡",
        id: "radius",
        inputAttr: {
          type: "Number"
        },
        default: (square) => {
          square.style.borderRadius = "20px"
        },
        defaultValue: "20",
        save: (square) => {
          square.style.borderRadius = document.getElementById("radius").value + "px"
        },
        load: (square, value) => {square.style.borderRadius = value+"px"}
      }
    ]
}
