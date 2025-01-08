import {JsonDecoder} from '../client/JsonDecoder'
import {Owner} from './Owner'
import {OwnerDecoder} from './OwnerDecoder'
import {Contact} from './Contact'
import {ContactDecoder} from './ContactDecoder'
export const JSON_DECODERS: Map<string, () => JsonDecoder<any>> = new Map<string, () => JsonDecoder<any>>([
  [Owner.TYPE_ID, () => new OwnerDecoder()],
  [Contact.TYPE_ID, () => new ContactDecoder()]
])
