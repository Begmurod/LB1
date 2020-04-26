var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
    keyAPI = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";
    
document.querySelector('#jsonDiv').style.display = "none";
document.querySelector('#postDiv').style.display = "none";
document.querySelector('#urlDiv').style.display = "none";
document.querySelector('#keyDiv').style.display = "none";

document.querySelector('#translate').addEventListener('click', function() {
		document.querySelector('#jsonDiv').style.display = "";
    document.querySelector('#postDiv').style.display = "";
    document.querySelector('#urlDiv').style.display = "";
    document.querySelector('#keyDiv').style.display = "";
    let xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#source').value,
        langAPI = document.querySelector('#lang').value
        data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState==4 && this.status==200) {
            let res = this.responseText;
            document.querySelector('#json').innerHTML = res;
            document.querySelector('#postArea').innerHTML = data;
            document.querySelector('#urlArea').innerHTML = url;
            document.querySelector('#keyArea').innerHTML = keyAPI;
            let json = JSON.parse(res);
            if(json.code == 200) {
                document.querySelector('#output').innerHTML = json.text[0];
            }
            else {
                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
            }
        }
    }
}, false);