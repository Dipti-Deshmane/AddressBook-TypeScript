import Contact from "./Contact";

class AddressBook{

    private contact:Contact[]=[];

    addContact(contact:Contact):void{
        this.contact.push(contact);
    };

}
export default AddressBook;