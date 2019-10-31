!function (win, doc) {
    var docEle = doc.documentElement,
        dpr = win.devicePixelRatio || 1;

    // dpr = 1;
    // alert(navigator.userAgent);
    //红米手机缩放属性进行设置的时候有兼容性问题，所以在红米手机下使用1dpr，网页不进行缩放
    // var ex = /Android/g;
    // if(navigator.userAgent.match(ex)){
    //     dpr = 1;
    // }
    dpr = 1;
    /*var al = /NCE-AL10/g;
    if(navigator.userAgent.match(al)){
        dpr = 1;
    }*/

    var isRegularDpr = dpr.toString().match(/^[1-9]\d*$/g);
    if(isRegularDpr){
        if (dpr >= 3) {
            dpr = 3;
        } else if (dpr >= 2) {
            dpr = 2;
        } else {
            dpr = 1;
        }
    }else{
        dpr = 1;
    }
    

    var metaEl = docEle.querySelector('meta[name=viewport]');

    if(!metaEl){
        metaEl = doc.createElement('meta');
        var scale = 1 / dpr;
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEle.firstElementChild) {
            docEle.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            documen.write(wrap.innerHTML);
        }
    }

    function bodyFontSize() {
        doc.body ?
            doc.body.style.fontSize = 16 * dpr + "px" :
            doc.addEventListener("DOMContentLoaded", bodyFontSize)
    }
    function htmlFontSize() {
        var oneRem = docEle.clientWidth / 10;
        if(oneRem > 108){
            oneRem = 108;
        }
        docEle.style.fontSize = oneRem + "px";
        docEle.dataset.dpr = dpr;
    }

    bodyFontSize();
    htmlFontSize();

    win.addEventListener("resize", htmlFontSize);
    win.addEventListener("pageshow", function (e) {
        e.persisted && htmlFontSize()
    });

    /* if (dpr >= 2) {
        var a = t.createElement("body"), s = t.createElement("div");
        s.style.border = ".5px solid transparent",
        a.appendChild(s),
        i.appendChild(a),
        1 === s.offsetHeight && i.classList.add("hairlines"),
        i.removeChild(a);
    } */
}(window, document);
