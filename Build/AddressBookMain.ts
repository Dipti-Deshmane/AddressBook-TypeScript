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
    
     private editContact():void{

        const contactName=readlineSync.question("Please enter first and last name: ");
        const contact = this.addressbook.searchFirstAndLastName(contactName);

        if(contact){
        const newFirstName = readlineSync.question("Enter new first name: ")|| contact.getFirstName;
        const newLastname = readlineSync.question("Enter new last name: ")||contact.getLastName;
        const newAddress = readlineSync.question("Enter new Address: ")||contact.getAddress;
        const newCity = readlineSync.question("Enter new City: ")||contact.getCity;
        const newState = readlineSync.question("Enter new State: ")||contact.getState;
        const newZip = readlineSync.question("Enter new Zip: ")||contact.getZip;
        const newPhoneNo = readlineSync.question("Enter new Phone Number: ")||contact.getPhoneNo;
        const NewEmail = readlineSync.question("Enter new Email: ")||contact.getEmail;
        
        const updatedDetails= new Contact(newFirstName,newLastname,newAddress,newCity,newState,newZip,newPhoneNo,NewEmail);
        const index = this.addressbook.getAllContacts().indexOf(contact);
        if(index !=-1){
            this.addressbook.getAllContacts()[index]=updatedDetails;
            console.log("Data Edited succefully!");
        }else {
            console.log('Failed to update contact.');
        }
    } else {
        console.log('Contact not found.');
        
        }
        
        }

        private deleteContact():void{
            const name = readlineSync.question("Please enter first and last name to delete: ");
            const success = this.addressbook.deleteContact(name);
            if (success) {
                console.log("Contact deleted successfully!");
            } else {
                console.log("Contact not found.");
            }
        }

        private DispslayAllContacts():void{
            const contact = this.addressbook.getAllContacts();
            if(contact.length==0){
                console.log("Contact not found");
            }else{
                console.log("Contact Details:");
                 contact.forEach(contact => {
                console.log(contact.getDetails());
            });
            }
        }
  

     public start():void{
        while(true){
            console.log("Address Book Menu");
            console.log("1. Add Contact");
            console.log("2. Edit Contact");
            console.log("3. View All Contacts");
            console.log("4. Delete Contact");
            console.log("5. Exit");     
            const choice= readlineSync.question("Please enter your choice: ");   
            
            switch(choice){
                case `1`: this.addContact();
                        break;
                case `2`: this.editContact();
                        break;
                case `3`: this.DispslayAllContacts();
                        break;
                case `4`: this.deleteContact();
                        break;
                case `5`: console.log("Exiting the Address Book");
                        return;
                        

                default: console.log("Please enter valid number");
            }

        }
     }
}
const main = new AddressBookMain();
main.start();