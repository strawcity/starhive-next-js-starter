import {JsonDecoder} from '../client/JsonDecoder'
import {Type1} from './Type1'
import {Type1Decoder} from './Type1Decoder'
export const JSON_DECODERS: Map<string, () => JsonDecoder<any>> = new Map<string, () => JsonDecoder<any>>([
  [Type1.TYPE_ID, () => new Type1Decoder()]
])
