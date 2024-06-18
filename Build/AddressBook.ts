import Contact from "./Contact";

class AddressBook{

    private contact:Contact[]=[];

    addContact(contact:Contact):void{
        this.contact.push(contact);
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





}
export default AddressBook;