"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LibroService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var LibroService = /** @class */ (function () {
    // libro: Libro[];
    //selectedLibro: Libro;
    function LibroService(http) {
        this.http = http;
        // this.selectedLibro= new Libro();
    }
    LibroService.prototype.getLibros = function () {
        var headers = new http_1.HttpHeaders({
            'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
        });
        return this.http.get('https://ramosproyectodb.herokuapp.com/api/libros', { headers: headers }).pipe(operators_1.map(function (res) {
            return Object.values(res);
        }));
    };
    LibroService.prototype.postLibros = function (libro) {
        console.log("libro");
        console.log(libro);
        var headers = new http_1.HttpHeaders({
            'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
        });
        var trm = __assign({}, libro);
        delete trm._id;
        return this.http.post('https://ramosproyectodb.herokuapp.com/api/libros', trm, { headers: headers })
            .pipe(operators_1.map(function (res) {
            return Object.values(res);
        }));
    };
    LibroService.prototype.putLibros = function (libro) {
        var headers = new http_1.HttpHeaders({
            'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
        });
        return this.http.put("https://ramosproyectodb.herokuapp.com/api/libros/" + libro._id, libro, { headers: headers }).pipe(operators_1.map(function (res) {
            return Object.values(res);
        }));
    };
    LibroService.prototype.deleteLibros = function (id) {
        var headers = new http_1.HttpHeaders({
            'x-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM2NTE1MWQ3MmQ4ZjAwMTdhZTc3ZTEiLCJpYXQiOjE2MDY4MzI0NjYsImV4cCI6MTYwNjg3NTY2Nn0._JHmDdb0EhV6_YXFd1RnrntwEF1fLi_zT7Jay4Jmu4c"
        });
        return this.http["delete"]("https://ramosproyectodb.herokuapp.com/api/libros/" + id, { headers: headers });
    };
    LibroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LibroService);
    return LibroService;
}());
exports.LibroService = LibroService;
