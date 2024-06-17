"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contact = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        this.contact.push(contact);
    };
    ;
    return AddressBook;
}());
exports.default = AddressBook;
