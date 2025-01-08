import {AttributeVisitor} from '../client/AttributeVisitor'
import {StarhiveObject} from '../client/StarhiveObject'
import {StreamData} from '../client/StreamData'
export class Type1 implements StarhiveObject {
    static readonly TYPE_ID: string = 'b2f0039a-008d-4886-a85e-1440b7e99bce'
    static readonly ATTRIBUTES_CREATED: string = '242b54f6-a319-4eb8-9b08-caa95b229a57'
    static readonly ATTRIBUTES_UPDATED: string = '62a47082-f1aa-4722-ba1f-e2eaa322c1f2'
    static readonly ATTRIBUTES_AVATAR: string = '27291915-8d9c-4051-90af-4fa29579405e'
    static readonly ATTRIBUTES_NAME: string = 'c965c323-8399-40b3-8329-f0b42ff664e4'
    static readonly ATTRIBUTES_START: string = '26487774-7d64-4b55-9004-27694c24bb52'
    static readonly ATTRIBUTES_END: string = '7834a477-1efa-4ccb-b11a-335417c41afe'
    private readonly _id?: string
    getId(): string | undefined {
        return this._id
    }
    private readonly _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    private readonly _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    private readonly _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    private readonly _avatarContentKey?: string | null
    private readonly _name?: string
    getName(): string | undefined {
        return this._name
    }
    private readonly _start?: Date
    getStart(): Date | undefined {
        return this._start
    }
    private readonly _end?: Date
    getEnd(): Date | undefined {
        return this._end
    }
    accept(visitor: AttributeVisitor) {
        if (this._avatarContentKey !== undefined && this._avatarContentKey !== null) {
          visitor.visitTextAttribute(Type1.ATTRIBUTES_AVATAR, [this._avatarContentKey]);
        } else if (this._avatarContentKey === null) {
          visitor.visitTextAttribute(Type1.ATTRIBUTES_AVATAR, []);
        }
        if (this._name !== undefined) {
          visitor.visitTextAttribute(Type1.ATTRIBUTES_NAME, [this._name]);
        } else {
          visitor.visitTextAttribute(Type1.ATTRIBUTES_NAME, []);
        }
        if (this._start !== undefined) {
          visitor.visitDatetimeAttribute(Type1.ATTRIBUTES_START, [this._start]);
        } else {
          visitor.visitDatetimeAttribute(Type1.ATTRIBUTES_START, []);
        }
        if (this._end !== undefined) {
          visitor.visitDateAttribute(Type1.ATTRIBUTES_END, [this._end]);
        } else {
          visitor.visitDateAttribute(Type1.ATTRIBUTES_END, []);
        }
    }
    getTypeId(): string {
        return 'b2f0039a-008d-4886-a85e-1440b7e99bce'
    }
    static builder(): Type1Builder {
        return new Type1Builder()
    }
    constructor(builder: Type1Builder) {
        this._id = builder.getId()
        this._created = builder.getCreated()
        this._updated = builder.getUpdated()
        this._avatar = builder.getAvatar()
        this._avatarContentKey = builder.getAvatarContentKey()
        this._name = builder.getName()
        this._start = builder.getStart()
        this._end = builder.getEnd()
    }
    toBuilder(): Type1Builder {
        const builder = Type1.builder()
        if (this._id) {
          builder.id(this._id)
        }
        if (this._created) {
          builder.created(this._created)
        }
        if (this._updated) {
          builder.updated(this._updated)
        }
        if (this._avatar) {
          builder.avatar(this._avatar)
        }
        if (this._name) {
          builder.name(this._name)
        }
        if (this._start) {
          builder.start(this._start)
        }
        if (this._end) {
          builder.end(this._end)
        }
        return builder
    }
}
export class Type1Builder {
    private _id?: string
    private _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    created(value: Date): Type1Builder {
        this._created = value
        return this
    }
    private _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    updated(value: Date): Type1Builder {
        this._updated = value
        return this
    }
    private _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    avatar(value: string): Type1Builder {
        this._avatar = value
        return this
    }
    private _avatarContentKey?: string | null
    getAvatarContentKey(): string | null | undefined {
        return this._avatarContentKey
    }
    avatarData(value: StreamData): Type1Builder {
        this._avatarContentKey = value.contentKey
        return this
    }
    removeAvatarData(): Type1Builder {
        this._avatarContentKey = null
        return this
    }
    private _name?: string
    getName(): string | undefined {
        return this._name
    }
    name(value: string): Type1Builder {
        this._name = value
        return this
    }
    private _start?: Date
    getStart(): Date | undefined {
        return this._start
    }
    start(value: Date): Type1Builder {
        this._start = value
        return this
    }
    private _end?: Date
    getEnd(): Date | undefined {
        return this._end
    }
    end(value: Date): Type1Builder {
        this._end = value
        return this
    }
    getId(): string | undefined {
        return this._id
    }
    id(value: string): Type1Builder {
        this._id = value
        return this
    }
    build(): Type1 {
        return new Type1(this);
    }
}
