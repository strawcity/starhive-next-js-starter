import {JsonDecoder} from '../client/JsonDecoder'
import {JsonAttributeValue} from '../client/JsonAttributeValue'
import {Contact} from './Contact'
import {ContactBuilder} from './Contact'
export class ContactDecoder implements JsonDecoder<Contact> {
    private readonly builder: ContactBuilder
    setId(id: string) {
        this.builder.id(id)
    }
    visitJsonAttribute(attributeId: string, values: JsonAttributeValue[]) {
        if (values.length == 0) {
          return;
        }
        if (attributeId == Contact.ATTRIBUTES_CREATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.created(parsedValues[0]);
        }
        if (attributeId == Contact.ATTRIBUTES_UPDATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.updated(parsedValues[0]);
        }
        if (attributeId == Contact.ATTRIBUTES_AVATAR) {
          const parsedValues = values.map(v => v.value)
          this.builder.avatar(parsedValues[0]);
        }
        if (attributeId == Contact.ATTRIBUTES_NAME) {
          const parsedValues = values.map(v => v.value)
          this.builder.name(parsedValues[0]);
        }
        if (attributeId == Contact.ATTRIBUTES_EMAIL) {
          const parsedValues = values.map(v => v.value)
          this.builder.email(parsedValues[0]);
        }
        if (attributeId == Contact.ATTRIBUTES_MESSAGE) {
          const parsedValues = values.map(v => v.value)
          this.builder.message(parsedValues[0]);
        }
        if (attributeId == Contact.ATTRIBUTES_HAVE_I_RESPONDED) {
          const parsedValues = values.map(v => JSON.parse(v.value))
          this.builder.haveIResponded(parsedValues[0]);
        }
        if (attributeId == Contact.ATTRIBUTES_NOTES) {
          const parsedValues = values.map(v => v.value)
          this.builder.notes(parsedValues[0]);
        }
    }
    build(): Contact {
        return this.builder.build()
    }
    constructor() {
        this.builder = Contact.builder()
    }
}
