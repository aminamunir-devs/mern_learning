const xhr=new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.onload=function(){
    console.log(xhr.responseText)
}
xhr.send();