webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n<!-- Diretiva estrutural ngIf aparece enquanto o jogoEmAndamento = true ELSE faz o apontamento para o template contento #fimDeJogo -->\n<div *ngIf=\"jogoEmAndamento; else fimDeJogo\">\n    <!-- Event Biding que será executado quando o component painel efetuar o @Output encerrarJogo-->\n    <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n</div>\n\n<ng-template #fimDeJogo>\n    <div *ngIf=\"tipoEncerramento === 'derrota'; else fimDeJogoVitoria\" class=\"container\" style=\"text-align: center; margin-top: 50px\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h3 style='color: red'>Game Over!!!</h3>\n                <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Reiniciar</button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #fimDeJogoVitoria>\n        <div class=\"container\" style=\"text-align: center; margin-top: 50px\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <h3 style='color: green'>Congratulations!!!</h3>\n                    <button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Reiniciar</button>\n                </div>\n            </div>\n        </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    };
    AppComponent.prototype.reiniciarJogo = function () {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__ = __webpack_require__("../../../../../src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__ = __webpack_require__("../../../../../src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progresso_progresso_component__ = __webpack_require__("../../../../../src/app/progresso/progresso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tentativas_tentativas_component__ = __webpack_require__("../../../../../src/app/tentativas/tentativas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__["a" /* TopoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__["a" /* PainelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__progresso_progresso_component__["a" /* ProgressoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tentativas_tentativas_component__["a" /* TentativasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/painel/frases.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
var FRASES = [
    { fraseEng: "I like to learn.", frasePtBr: "Eu gosto de aprender." },
    { fraseEng: "I watch TV.", frasePtBr: "Eu assisto TV." },
    { fraseEng: "How are you?", frasePtBr: "Como vai você?" },
    { fraseEng: "I eat bread.", frasePtBr: "Eu como pão." }
];


/***/ }),

/***/ "../../../../../src/app/painel/painel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n    margin-top: 20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n    <div class=\"col-sm-6\">\n        <!-- []=\"\" Envia valores do componente pai para o filho, nesse caso a variavel progresso, \n        do component progresso recebe o valor da variavel progresso do painel -->\n        <app-progresso [progresso]=\"progressoPainel\"></app-progresso>\n    </div>\n    <div class=\"col-sm-6\">\n        <app-tentativas [tentativas]=\"tentativasPainel\"></app-tentativas>\n    </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col\">\n        <h6>{{ instrucao }}</h6>\n        <p>{{ rodadaFrase.fraseEng }}</p>\n\n        <!-- (input) Event biding - Captura um evento do template e associa a uma função no component\n        [value]property-biding atualiza o valor contido no atributo value o valor da variavel resposta-->\n        <div class=\"form-group\">\n          <textarea \n          class=\"form-control\" \n          rows=\"1\"\n          (input)=\"atualizaResposta($event)\"\n          [value]=\"resposta\"></textarea>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"row\">\n      <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificarResposta()\">Verificar</button>\n          </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__frases_mock__ = __webpack_require__("../../../../../src/app/painel/frases.mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = (function () {
    //Ciclo de Vida - ngOnChanges() é desparado logo depois do constructor, podendo assim alterar
    //propriedades no momento da instancia do mesmo;
    //ngOnInit() - Neste momento a instancia do component já está completa, então pode-se realizar ações;
    //ngOnDestroy() - Executado quando o component deixa de existir (Ex.: Condições);
    function PainelComponent() {
        this.frases = __WEBPACK_IMPORTED_MODULE_1__frases_mock__["a" /* FRASES */];
        this.instrucao = "Traduza a Frase: ";
        this.resposta = "";
        this.rodada = 0;
        this.progressoPainel = 0;
        this.tentativasPainel = 3;
        //@Output é usado para comunicação do component filho para o pai, precisa ser importado do core do angular
        //O EventEmitter dispara um evento, onde, o tipo a ser trabalhado é uma string
        this.encerrarJogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.atualizaRodada();
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        //console.log("Painel foi Destruído!");
    };
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        //Esse é um elemento HTMLInputElement e assin é possivel acessar o value contigo no target do elemento
        this.resposta = resposta.target.value;
    };
    PainelComponent.prototype.verificarResposta = function () {
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //Trocar pergunta da rodada
            this.rodada++;
            this.progressoPainel = this.progressoPainel + (100 / this.frases.length);
            //Atualiza a frase a ser exibida
            this.atualizaRodada();
        }
        else {
            this.tentativasPainel--;
            if (this.tentativasPainel === -1) {
                this.encerrarJogo.emit("derrota");
            }
        }
    };
    PainelComponent.prototype.atualizaRodada = function () {
        //Inicia o component com uma frase de acordo com a rodada;
        if (this.rodada < this.frases.length) {
            this.rodadaFrase = this.frases[this.rodada];
        }
        else if (this.rodada === this.frases.length) {
            this.encerrarJogo.emit("vitoria");
        }
        //limpar resposta
        this.resposta = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-painel',
            template: __webpack_require__("../../../../../src/app/painel/painel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/painel/painel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress {\r\n    background: #EEF8DA;\r\n    border: solid 1px #99CE28; \r\n}\r\n\r\n.progress-bar {\r\n    background: #99CE28;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div class=\"progress-bar w-{{ progresso }}\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = (function () {
    function ProgressoComponent() {
        //Controla o aspecto visual da barra, onde por String Interpolation um valor da classe do bootstrap é alterada
        //@Input (Property binding) decora (decorator do core @angular) a variavel para que o atributo progresso possa receber um parametro quando este for instanciado
        this.progresso = 0;
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progresso',
            template: __webpack_require__("../../../../../src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__("../../../../../src/app/progresso/progresso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/coracao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coracao; });
var Coracao = (function () {
    function Coracao(cheio, urlCoracaoCheio, urlCoracaoVazio) {
        if (urlCoracaoCheio === void 0) { urlCoracaoCheio = "../assets/coracao_cheio.png"; }
        if (urlCoracaoVazio === void 0) { urlCoracaoVazio = "../assets/coracao_vazio.png"; }
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    };
    return Coracao;
}());



/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-end\">\n  <!-- Property Binding - Aletra o valor dos elementos das tag e setes precisam estar marcados com []\n  <img [src]='coracaoVazio' />\n  <img [src]='coracaoVazio' />\n  <img [src]='coracaoCheio' />\n  -->\n\n  <!-- Diretivas: Funcionalidades que manipulam o comportamento de elementos HTML no DOM\n  \"Modificação do template entregue ao brawser\" -->\n  <!-- ngFor (Diretiva Estrutural) Informa o elemento + ngFor=\"For Each(Java)\", Neste caso\n  estou perrcorrendo o array corações e a cada interação chamo o metodo exibe coracao do mesmo -->\n  <img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\" />\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__ = __webpack_require__("../../../../../src/app/shared/coracao.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = (function () {
    function TentativasComponent() {
        this.coracoes = [
            //No constructor existem 3 parametros porem dois já estão definidos como default,
            //então, posso passar apenas o que falta, mas poderia também sobrescrever os outros
            new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true), new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* Coracao */](true)
        ];
    }
    //Ciclo de Vida - Metodo executado durante o processo de decoração (input dos dados) de um component pai para filho
    TentativasComponent.prototype.ngOnChanges = function () {
        //Nesse caso sempre que o valor de tentativas for atualizado essa informação irá aparecer
        //console.log(this.tentativas);
        //Se o total de tentativas for diferente do tamanho do array de tentativas
        //então, diminuo do total de elementos do array a quantidade de tentativas menos 1 porque o array começa de zero.
        if (this.tentativas !== this.coracoes.length) {
            var indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
        }
    };
    //Esse metodo é executado apenas uma unica vez quando o component é instanciado
    TentativasComponent.prototype.ngOnInit = function () {
        //Essa instrução é inserida aqui para que o processo de decoração de variavel
        //de tentativas seja executado, o que não acontece dentro do constructor, pois,
        //as propriedades do objeto só são alteradas no metodo ngOnChangs depois do constructor.
        //console.log(this.tentativas);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tentativas',
            template: __webpack_require__("../../../../../src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tentativas/tentativas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topo/topo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    background: #1CB0F6;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark\">\n  <span class=\"navbar-brand mb-0 h1\">{{titulo}}</span>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopoComponent = (function () {
    function TopoComponent() {
        //One-Way-Binding (Comunicação da classe para o template) / String Interpolation {{}} (Permite a inclusão de atribtos em qualquer lugar do template e também realiza expressões)
        this.titulo = "Aprendendo Inglês";
    }
    TopoComponent.prototype.ngOnInit = function () {
    };
    TopoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-topo',
            template: __webpack_require__("../../../../../src/app/topo/topo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topo/topo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map