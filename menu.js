/* 도형 편집의 모든 기능은 menu.js를 통해서 관리됩니다.
mySquare에서 지원되는 addAttribute 함수를 통해 직접 기능을 제작할 수 있으며
addAttribute의 인자에는 아래의 정보가 포함된 객체를 넣어야 합니다.

name: span에 표시될 글자
id: input의 id
default: square의 기본 초기스타일 지정(square가 인자로 자동 제공됨)
style: square에서 이 속성이 나타내는 값을 의미함*/

//굴곡
addAttribute({
    name: "굴곡",
    id: "radius",
    default: function(square) {
        square.style.borderRadius = "100px";  
    },
    style: "document.getElementById('square').style.borderRadius"
})

//배경색
addAttribute({
    name: "배경색",
    id: "bgColor",
    default: function(square) {
        square.style.backgroundColor = "royalblue";
    },
    style: "document.getElementById('square').style.backgroundColor"
})

//가로
addAttribute({
    name: "가로",
    id: "width",
    default: function(square) {
        square.style.width = "300px";
    },
    style: "document.getElementById('square').style.width"
})

//세로
addAttribute({
    name: "세로",
    id: "height",
    default: function(square) {
        square.style.height = "300px";
    },
    style: "document.getElementById('square').style.height"
})
