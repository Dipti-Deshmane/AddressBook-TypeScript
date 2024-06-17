import Contact from "./Contact";
import AddressBook from "./AddressBook";
import * as readlineSync from 'readline-sync';

class AddressBookMain{
   
     addressbook = new AddressBook();

     private addContact():void{
        const firstName = readlineSync.question("FirstName: ");
        const lastName = readlineSync.question("LastName: ");
        const address = readlineSync.question("Address: ");
        const city = readlineSync.question("City: ");
        const state = readlineSync.question("State: ");
        const zip = readlineSync.question("Zip: ");
        const phoneNo = readlineSync.question("PhoneNo: ");
        const email = readlineSync.question("Email: ");

        const contact= new Contact(firstName,lastName,address,city,state,zip,phoneNo,email);
        this.addressbook.addContact(contact);
        console.log("Contact saved successfully!");

     }
    

     public start():void{
        while(true){
            console.log("Address Book Menu");
            console.log("1. Add Contact");
            console.log("2. Exit");     
            const choice= readlineSync.question("Please enter your choice: ");   
            
            switch(choice){
                case `1`: this.addContact();
                        break;
                case `2`: console.log("Exiting the Address Book");
                        return;
                default: console.log("Please enter valid number");
            }

        }
     }
}
const main = new AddressBookMain();
main.start();