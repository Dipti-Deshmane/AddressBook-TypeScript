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
    AddressBook.prototype.getAllContacts = function () {
        return this.contact;
    };
    AddressBook.prototype.searchFirstAndLastName = function (name) {
        var _a = name.split(" "), firstName = _a[0], lastName = _a[1];
        for (var _i = 0, _b = this.contact; _i < _b.length; _i++) {
            var contact = _b[_i];
            if (contact.getFirstName() === firstName && contact.getLastName() === lastName) {
                return contact;
            }
        }
        return null;
    };
    return AddressBook;
}());
exports.default = AddressBook;
