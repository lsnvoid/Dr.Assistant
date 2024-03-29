import { Password, UniqueId } from "./common.model";
import { AilmentDescription } from "./patient.model";

export class GuestProfile {
    uid: UniqueId = new UniqueId('guest');
    fullName: string = null;
    email: string = null;
    password: Password = new Password();
    ailment: AilmentDescription = new AilmentDescription();
}