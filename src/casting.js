"use strict";
//!CASTING.JS
//*No typescript nao pode ter a mesma variavel em dois arquivos
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
})(casting || (casting = {}));
