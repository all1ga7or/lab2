window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('a[href="#point"]').style.display = "block";
    } else {
        document.querySelector('a[href="#point"]').style.display = "none";
    }
};