"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LibroComponent = void 0;
var core_1 = require("@angular/core");
var libro_1 = require("src/app/models/libro");
var LibroComponent = /** @class */ (function () {
    function LibroComponent(libroService) {
        this.libroService = libroService;
        this.libros = [];
        this.libro = new libro_1.Libro();
    }
    LibroComponent.prototype.ngOnInit = function () {
        this.getLibros();
    };
    LibroComponent.prototype.getLibros = function () {
        var _this = this;
        this.libroService.getLibros().subscribe(function (res) {
            _this.libros = res[1];
            console.log(res);
        });
    };
    LibroComponent.prototype.crear = function (form) {
        var _this = this;
        if (this.libro._id) {
            this.libroService.putLibros(this.libro).subscribe(function (res) {
                _this.getLibros();
            });
            this.libro._id = "";
        }
        else {
            this.libroService.postLibros(this.libro).subscribe(function (res) {
                _this.getLibros();
            });
        }
        form.reset();
    };
    LibroComponent.prototype.elimnar = function (libr) {
        var _this = this;
        this.libroService.deleteLibros(libr._id).subscribe(function (res) {
            _this.getLibros();
        });
    };
    LibroComponent.prototype.editar = function (libr) {
        this.libro = libr;
    };
    LibroComponent = __decorate([
        core_1.Component({
            selector: 'app-libros',
            templateUrl: './libro.component.html',
            styleUrls: ['./libro.component.css']
        })
    ], LibroComponent);
    return LibroComponent;
}());
exports.LibroComponent = LibroComponent;
