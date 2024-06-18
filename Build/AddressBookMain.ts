import Contact from "./Contact";
import AddressBook from "./AddressBook";
import * as readlineSync from 'readline-sync';

class AddressBookMain{
   
     private addressbook = new AddressBook();
     private currentAddressBook: AddressBook | null = null;

     private createAddressBook(): void {
        const name = readlineSync.question('Enter the name of the new address book: ');
        if (this.addressbook[name]) {
            console.log('An address book with this name already exists.');
        } else {
            this.addressbook[name] = new AddressBook();
            console.log('Address book created successfully.');
        }
    }

    private selectAddressBook(): void {
        const name = readlineSync.question('Enter the name of the address book to select: ');
        if (this.addressbook[name]) {
            this.currentAddressBook = this.addressbook[name];
            console.log(`Address book "${name}" selected.`);
        } else {
            console.log('Address book not found.');
        }
    }

    private listAddressBooks(): void {
        console.log('Available address books:');
        for (const name in this.addressbook) {
            console.log(name);
        }
    }

    
    private addContact(): void {
        if (!this.currentAddressBook) {
            console.log('No address book selected.');
            return;
        }

        while (true) {
            const firstName = readlineSync.question("First Name: ");
            const lastName = readlineSync.question("Last Name: ");
            const address = readlineSync.question("Address: ");
            const city = readlineSync.question("City: ");
            const state = readlineSync.question("State: ");
            const zip = readlineSync.question("Zip: ");
            const phoneNo = readlineSync.question("Phone No: ");
            const email = readlineSync.question("Email: ");

            const contact = new Contact(firstName, lastName, address, city, state, zip, phoneNo, email);
            this.currentAddressBook.addContact(contact);

            const addAnother = readlineSync.question("Do you want to add another contact? (yes/no): ");
            if (addAnother.toLowerCase() !== 'yes') {
                break;
            }
        }
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
        private searchContactsByCity(): void {
            const city = readlineSync.question('Enter city to search: ');
        
            const results: Contact[] = [];
        
            Object.keys(this.addressbook).forEach(key => {
                const addressBook = this.addressbook[key];
                if (city) {
                    results.push(...addressBook.searchContactsByCity(city));
                }
            });
        
            if (results.length === 0) {
                console.log("No contacts found.");
            } else {
                console.log("Search Results:");
                results.forEach(contact => {
                    console.log(contact.getDetails());
                });
            }
        }

     public start():void{
        while(true){
            console.log("\nAddress Book Menu:");
            console.log("1. Create Address Book");
            console.log("2. Select Address Book");
            console.log("3. List Address Books");
            console.log("4. Add Contact");
            console.log("5. Edit Contact");
            console.log("6. View All Contacts");
            console.log("7. Delete Contact");
            console.log("8. Search Contacts by City");
            console.log("9. Exit");
            const choice= readlineSync.question("Please enter your choice: ");   
            
            switch(choice){
                case '1':
                    this.createAddressBook();
                    break;
                case '2':
                    this.selectAddressBook();
                    break;
                case '3':
                    this.listAddressBooks();
                    break;
                case '4':
                    this.addContact();
                    break;
                case '5':
                    this.editContact();
                    break;
                case '6':
                    this.DispslayAllContacts();
                    break;
                case '7':
                    this.deleteContact();
                    break;
                case '8':
                    this.searchContactsByCity();
                    break;
                case `9`: console.log("Exiting the Address Book");
                        return;
                        
                default: console.log("Please enter valid number");
            }

        }
     }
}
const main = new AddressBookMain();
main.start();