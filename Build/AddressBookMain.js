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
        console.log("Contact saved successfully!");
    };
    AddressBookMain.prototype.editContact = function () {
        var contactName = readlineSync.question("Please enter first and last name");
        var contact = this.addressbook.searchFirstAndLastName(contactName);
        if (contact) {
            var newFirstName = readlineSync.question("Enter new first name: ") || contact.getFirstName;
            var newLastname = readlineSync.question("Enter new last name: ") || contact.getLastName;
            var newAddress = readlineSync.question("Enter new Address: ") || contact.getAddress;
            var newCity = readlineSync.question("Enter new City: ") || contact.getCity;
            var newState = readlineSync.question("Enter new State: ") || contact.getState;
            var newZip = readlineSync.question("Enter new Zip: ") || contact.getZip;
            var newPhoneNo = readlineSync.question("Enter new Phone Number: ") || contact.getPhoneNo;
            var NewEmail = readlineSync.question("Enter new Email: ") || contact.getEmail;
            var updatedDetails = new Contact_1.default(newFirstName, newLastname, newAddress, newCity, newState, newZip, newPhoneNo, NewEmail);
            var index = this.addressbook.getAllContacts().indexOf(contact);
            if (index != -1) {
                this.addressbook.getAllContacts()[index] = updatedDetails;
                console.log("Data Edited succefully!");
            }
            else {
                console.log('Failed to update contact.');
            }
        }
        else {
            console.log('Contact not found.');
        }
    };
    AddressBookMain.prototype.DispslayAllContacts = function () {
        var contact = this.addressbook.getAllContacts();
        if (contact.length == 0) {
            console.log("Contact not found");
        }
        else {
            console.log("Contact Details:");
            contact.forEach(function (contact) {
                console.log(contact.getDetails());
            });
        }
    };
    AddressBookMain.prototype.start = function () {
        while (true) {
            console.log("Address Book Menu");
            console.log("1. Add Contact");
            console.log("2. Edit Contact");
            console.log("3. View All Contacts");
            console.log("4. Exit");
            var choice = readlineSync.question("Please enter your choice: ");
            switch (choice) {
                case "1":
                    this.addContact();
                    break;
                case "2":
                    this.editContact();
                    break;
                case "3":
                    this.DispslayAllContacts();
                    break;
                case "4":
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
