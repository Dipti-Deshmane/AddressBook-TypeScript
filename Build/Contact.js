"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact = /** @class */ (function () {
    function Contact(firstName, lastName, address, city, state, zip, phoneNo, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.email = email;
    }
    Contact.prototype.getDetails = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.address, ", ").concat(this.city, ", ").concat(this.state, ",").concat(this.zip, " ,").concat(this.phoneNo, ", ").concat(this.email);
    };
    Contact.prototype.firstAndLastName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Contact.prototype.getFirstName = function () {
        return this.firstName;
    };
    Contact.prototype.getLastName = function () {
        return this.lastName;
    };
    Contact.prototype.getAddress = function () {
        return this.address;
    };
    Contact.prototype.getCity = function () {
        return this.city;
    };
    Contact.prototype.getState = function () {
        return this.state;
    };
    Contact.prototype.getZip = function () {
        return this.zip;
    };
    Contact.prototype.getPhoneNo = function () {
        return this.phoneNo;
    };
    Contact.prototype.getEmail = function () {
        return this.email;
    };
    return Contact;
}());
exports.default = Contact;
