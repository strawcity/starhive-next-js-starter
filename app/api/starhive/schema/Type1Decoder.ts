import {JsonDecoder} from '../client/JsonDecoder'
import {JsonAttributeValue} from '../client/JsonAttributeValue'
import {Type1} from './Type1'
import {Type1Builder} from './Type1'
export class Type1Decoder implements JsonDecoder<Type1> {
    private readonly builder: Type1Builder
    setId(id: string) {
        this.builder.id(id)
    }
    visitJsonAttribute(attributeId: string, values: JsonAttributeValue[]) {
        if (values.length == 0) {
          return;
        }
        if (attributeId == Type1.ATTRIBUTES_CREATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.created(parsedValues[0]);
        }
        if (attributeId == Type1.ATTRIBUTES_UPDATED) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.updated(parsedValues[0]);
        }
        if (attributeId == Type1.ATTRIBUTES_NAME) {
          const parsedValues = values.map(v => v.value)
          this.builder.name(parsedValues[0]);
        }
        if (attributeId == Type1.ATTRIBUTES_START) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.start(parsedValues[0]);
        }
        if (attributeId == Type1.ATTRIBUTES_END) {
          const parsedValues = values.map(v => new Date(v.value))
          this.builder.end(parsedValues[0]);
        }
    }
    build(): Type1 {
        return this.builder.build()
    }
    constructor() {
        this.builder = Type1.builder()
    }
}
