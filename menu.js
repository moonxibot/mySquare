/* 도형 편집의 모든 기능은 menu.js를 통해서 관리됩니다.
mySquare에서 지원되는 addAttribute 함수를 통해 직접 기능을 제작할 수 있으며
addAttribute의 인자에는 아래의 정보가 포함된 객체를 넣어야 합니다.

name: span에 표시될 글자
id: input의 id
default: square의 기본 초기스타일 지정(square가 인자로 자동 제공됨)
write: 도형 편집 창이 열렸을 때 input에 표시될 내용. 꼭 입력이 아니더라도 코드를 넣을 수 있습니다.
func: 도형 편집 저장을 눌렀을 때 square에 반영될 내용.*/

//굴곡
addAttribute({
    name: "굴곡",
    id: "radius",
    default: function(square) {
        square.style.borderRadius = "100px";  
    },
    write: function(square) {
        document.getElementById("radius").value = square.style.borderRadius;
    },
    func: function() {
        document.getElementById("square").style.borderRadius = document.getElementById("radius").value;
    }
})

//배경색
addAttribute({
    name: "배경색",
    id: "bgColor",
    default: function(square) {
        square.style.backgroundColor = "royalblue";
    },
    write: function(square) {
        document.getElementById("bgColor").value = square.style.backgroundColor;
    },
    func: function() {
        var square = document.getElementById("square");
        var bgColor = document.getElementById("bgColor").value;
        square.style.backgroundColor = bgColor;
    }
})

//가로
addAttribute({
    name: "가로",
    id: "width",
    default: function(square) {
        square.style.width = "300px";
    },
    write: function(square) {
        document.getElementById("width").value = square.style.width;
    },
    func: function() {
        var square = document.getElementById("square");
        var width = document.getElementById("width").value;
        square.style.width = width;
    }
})

//세로
addAttribute({
    name: "세로",
    id: "height",
    default: function(square) {
        square.style.height = "300px";
    },
    write: function(square) {
        document.getElementById("height").value = square.style.height;
    },
    func: function() {
        var square = document.getElementById("square");
        var height = document.getElementById("height").value;
        square.style.height = height;
    }
})