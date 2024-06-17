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
    return Contact;
}());
exports.default = Contact;
