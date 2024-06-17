"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_1 = require("./Contact");
var AddressBook_1 = require("./AddressBook");
var readlineSync = require("readline-sync");
var AddressBookMain = /** @class */ (function () {
    function AddressBookMain() {
        this.addressbook = new AddressBook_1.default();
    }
    AddressBookMain.prototype.addContact = function () {
        var firstName = readlineSync.question("FirstName: ");
        var lastName = readlineSync.question("LastName: ");
        var address = readlineSync.question("Address: ");
        var city = readlineSync.question("City: ");
        var state = readlineSync.question("State: ");
        var zip = readlineSync.question("Zip: ");
        var phoneNo = readlineSync.question("PhoneNo: ");
        var email = readlineSync.question("Email: ");
        var contact = new Contact_1.default(firstName, lastName, address, city, state, zip, phoneNo, email);
        this.addressbook.addContact(contact);
    };
    AddressBookMain.prototype.start = function () {
        while (true) {
            console.log("Address Book Menu");
            console.log("1. Add Contact");
            console.log("2. Exit");
            var choice = readlineSync.question("Please enter your choice: ");
            switch (choice) {
                case "1":
                    this.addContact();
                    break;
                case "2":
                    console.log("Exiting the Address Book");
                    return;
                default: console.log("Please enter valid number");
            }
        }
    };
    return AddressBookMain;
}());
var main = new AddressBookMain();
main.start();
