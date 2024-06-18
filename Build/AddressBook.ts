
import Contact from "./Contact";

class AddressBook{

    private contact:Contact[]=[];
    private addressBooks: { [name: string]: AddressBook } = {};

    addContact(contact: Contact): void {
        const existingContact = this.searchFirstAndLastName(contact.getFirstName() + " " + contact.getLastName());
        if (existingContact) {
            console.log("A contact with the same name already exists.");
        } else {
            this.contact.push(contact);
            console.log("Contact added successfully.");
        }
    };

    getAllContacts():Contact[]{
        return this.contact;
    }

    searchFirstAndLastName(name:string):Contact | null {
        const[firstName,lastName] = name.split(" ");
        for(const contact of this.contact){
            if(contact.getFirstName()===firstName && contact.getLastName()===lastName){
                return contact;
            }
        }
        return null;
    }

    deleteContact(name:string):boolean{
        const[firstName,lastName]=name.split(" ");
        const index=this.contact.findIndex(contact=>
            contact.getFirstName()===firstName && contact.getLastName()===lastName);
            if(index!==-1){
                this.contact.splice(index,1);
                return true;
            }else{
                return false;
            }
        

    }

    listContacts():void{
        this.contact.forEach((contact)=>{
            console.log(contact.getDetails());
        });
    };    




}
export default AddressBook;