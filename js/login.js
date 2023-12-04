$(function () {  
    const redirectTo = (url) => {
        window.location.href = url;
    }

    $("#backToHome").click(function (e) { 
        e.preventDefault();
        redirectTo('index.html');
    });
})