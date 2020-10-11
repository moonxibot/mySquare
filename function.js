//기본 변수 정의
var title = "나의 아름다운 네모";
var projectInfo = {};
var code = {
    projectInfo: projectInfo,
    title: title
}; //모든 코드

//기본 함수 정의
//팝업 관련 함수
function noPopup() { //팝업을 없애는 함수
    document.getElementById("popupBlack").hidden = true;
    document.getElementById("newName").hidden = true;
    document.getElementById("alert").hidden = true;
}
function openPopup(title, content) {
    document.getElementById("alertTitle").innerText = title;
    document.getElementById("alertContent").innerText = content;
    document.getElementById("popupBlack").hidden = false;
    document.getElementById("alert").hidden = false;
}

//코드 배포 관련 함수
function openCopyPopup() {
    document.getElementById("copyDiv").hidden = false;
    document.getElementById("copyText").innerText = JSON.stringify(code);
}
function copyCode() {
    document.getElementById("copyText").select();
    document.execCommand("copy");
    document.getElementById("copyText").setSelectionRange(0, 0);
    document.getElementById("copyDiv").hidden = true; //배포 팝업 닫기

    //알림 팝업 열기
    openPopup("복사 완료", `당신의 코드가 복사되었어요.
    이 코드를 다른 사람이 불러오면
    당신의 네모를 다른 사람도 확인할 수 있어요.
    이제 다른 사람과 코드를 공유하는 일만 남았네요.`)
}

//코드 가져오기 관련 함수
function getCode() {
    try {
        var value = JSON.parse(prompt("다른 사람에게서 받은 코드를 입력해주세요."));
        for (var i in value["projectInfo"]) {
            document.getElementById(i).value = value["projectInfo"][i];
            editSave();
        }

        reloadTitle(value["title"])
        //적용 성공 팝업창 띄우기
        openPopup("코드 적용 완료!!", `코드를 잘 해석해서 적용했어요.
        혹시 mySquare가 업데이트되기 전 코드라면
        네모에 약간의 이상이 생길 수 있어요.
        
        혹여라도 코드를 잘 입력해도 문제가 생긴다면
        codingxibot@gmail.com으로 문의해주세요!`)

        return true;
    } catch(e) {
        //잘못된 코드 팝업창 띄우기
        openPopup("잘못된 코드입니다", `코드를 해석하려고 노력했지만 뭔가 잘 안돼요.
        제 생각에는 코드가 잘못된 것 같네요.
        알맞은 코드를 받아 다시 입력해주세요.
        
        혹시라도 알맞은 코드인데도 이 메세지가 계속 출력된다면
        codingxibot@gmail.com으로 문의해주세요!`)

        return false;
    }
}

//도형 편집 관련 함수와 변수
//변수 지정
var attributes = []; //addAttribute로 추가된 속성들이 담김

//함수 지정
function openEditWin() { //도형 편집 윈도우 열기
    document.getElementById("edit").hidden = false;
    for (var i in attributes) {
        attributes[i]["write"](document.getElementById("square"))
    }
}

function closeEditWin() { //도형 편집 윈도우 닫기
    document.getElementById("edit").hidden = true;
}

function editSave() {
    for (var i=0; i<attributes.length; i++) { //저장하며 네모에 반영하기
        attributes[i]["func"]();
    }
    for (var i in projectInfo) { //projectInfo에 내용 저장하기
        projectInfo[i] = document.getElementById(i).value;
    }
    code["projectInfo"] = projectInfo;
}

function addAttribute(info) {
    //div 추가
    var div = document.createElement("div");
    div.setAttribute("id", info["id"] + "Div");
    div.style.marginBottom = "0.5vh";
    document.getElementById("edit").appendChild(div);

    //레이블 추가:
    var text = document.createElement("span")
    text.innerText = info["name"] + ": ";
    text.style.fontSize = "1.2rem";
    text.style.marginLeft = "15px";
    document.getElementById(info["id"] + "Div").appendChild(text); //오브젝트 추가

    //input 추가
    var input = document.createElement("input");
    input.setAttribute("id", info["id"]);
    input.setAttribute("onkeypress", "if (event.keyCode == 13) {editSave()}");
    input.style.fontSize = "1.2rem";
    input.style.width = "100px";
    document.getElementById(info["id"] + "Div").appendChild(input);

    //set default value
    info.default(document.getElementById("square"));
    info.write(document.getElementById("square"));

    //배열에 push
    attributes.push(info);
    projectInfo[info["id"]] = document.getElementById(info["id"]).value;
}

//제목 관련 함수
function reloadTitle(value) {
    document.getElementById("title").innerText = value;
    title = value;
    code["title"] = title;
}

function fixTitle() {
    document.getElementById("popupBlack").hidden = false;
    document.getElementById("newName").hidden = false;
    document.getElementById("newNameInput").focus()
    document.getElementById("newNameInput").value = "";
}

function submitTitle() {
    reloadTitle(document.getElementById("newNameInput").value);
    noPopup();
}

//제목 새로고침
reloadTitle(title);

//allCode 새로고침
code["projectInfo"] = projectInfo;