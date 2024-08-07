import Realm from "realm";

export default class UserDetai extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  avatar!: string;

  static schema: Realm.ObjectSchema = {
    name: 'UserDetai',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: { type: 'string', optional: true },
      email: { type: 'string', optional: true },
      avatar: { type: 'string', optional: true },
    },
  };
}