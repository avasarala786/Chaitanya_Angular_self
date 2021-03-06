"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
let StarComponent = class StarComponent {
    constructor() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    ngOnChanges() {
        this.starWidth = this.rating * 86 / 5;
    }
    starClicked() {
        console.log(`Star of rating ${this.rating} is clicked!`);
        this.ratingClicked.emit(`Star of rating ${this.rating} is clicked!`);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StarComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = __decorate([
    core_1.Component({
        selector: 'pm-star',
        templateUrl: 'app/Rating/star.component.html',
        styleUrls: ['app/Rating/star.component.css']
    })
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map