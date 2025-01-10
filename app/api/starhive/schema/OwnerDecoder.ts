import {JsonDecoder} from '../client/JsonDecoder'
import {JsonAttributeValue} from '../client/JsonAttributeValue'
import {Owner} from './Owner'
import {OwnerBuilder} from './Owner'
export class OwnerDecoder implements JsonDecoder<Owner> {
    private readonly builder: OwnerBuilder
    setId(id: string) {
        this.builder.id(id)
    }
    visitJsonAttribute(attributeId: string, values: JsonAttributeValue[]) {
        if (values.length == 0) {
          return;
        }
        if (attributeId == Owner.ATTRIBUTES_CREATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.created(parsedValues[0]);
        }
        if (attributeId == Owner.ATTRIBUTES_UPDATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.updated(parsedValues[0]);
        }
        if (attributeId == Owner.ATTRIBUTES_AVATAR) {
          const parsedValues = values.map(v => v.value)
          this.builder.avatar(parsedValues[0]);
        }
        if (attributeId == Owner.ATTRIBUTES_NAME) {
          const parsedValues = values.map(v => v.value)
          this.builder.name(parsedValues[0]);
        }
        if (attributeId == Owner.ATTRIBUTES_TITLE) {
          const parsedValues = values.map(v => v.value)
          this.builder.title(parsedValues[0]);
        }
        if (attributeId == Owner.ATTRIBUTES_BIO) {
          const parsedValues = values.map(v => v.value)
          this.builder.bio(parsedValues[0]);
        }
    }
    build(): Owner {
        return this.builder.build()
    }
    constructor() {
        this.builder = Owner.builder()
    }
}
