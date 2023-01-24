function download1(){
    window.open("https://github.com/Kockiee/KockieOptimizer/archive/refs/heads/Version-1.0.zip");
}
function download2(){
    window.open("https://github.com/Kockiee/Kockie-Optimizer-C-Sharp/releases/download/V-1.4.0/Kockie.Optimizer.-.x64.64bit.zip");
}
function download3(){
    window.open("https://github.com/Kockiee/Kockie-Optimizer-C-Sharp/releases/download/V-1.4.0/Kockie.Optimizer.-.x84.32bit.zip");
}
function opendownloadpage(){
    window.location.href = "templates/download.html";
}

window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
        var adsDivs = document.getElementsByClassName('Ads');
        var vLines = document.getElementsByClassName('verticalLines');
        var pgmDiv = document.getElementsByClassName('programa3');

        window.document.removeChild(adsDivs);
        vLines.style.transform = "rotate(90deg)";
        pgmDiv.style.transform = "flex-direction: column";
    }
} 