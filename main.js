define([
    'domReady'
], function (domReady) {
    $(document).ready(function () {
        console.log(document);
        var childNodes = document.body.childNodes;
        console.log('childNodes number: ' + childNodes.length);
        for (var i = 0; i < childNodes.length; i++) {
            console.log(childNodes[i] + ': ' + childNodes[i].nodeType);
        }
        console.log('jquery domReady');
    });
    domReady(function () {
        console.log('requirejs domReady');
    });
});
