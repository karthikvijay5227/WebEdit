function run()
{
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;
    let ifr = document.getElementById("out");

    ifr.contentWindow.document.body.innerHTML = html+"<style>"+css+"</style>";
    ifr.contentWindow.eval(js-code);
    

}