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
            square.style.width = document.getElementById("width").value + "px"
        }
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
            square.style.height = document.getElementById("height").value + "px"
        }
      }
    ]
}
