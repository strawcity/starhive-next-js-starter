import {AttributeVisitor} from '../client/AttributeVisitor'
import {StarhiveObject} from '../client/StarhiveObject'
import {StreamData} from '../client/StreamData'
export class Contact implements StarhiveObject {
    static readonly TYPE_ID: string = 'e789005a-d3b2-4d21-bac4-421d30eef6fd'
    static readonly ATTRIBUTES_CREATED: string = '76bb4994-880a-41ab-a041-a570c173de0b'
    static readonly ATTRIBUTES_UPDATED: string = '8056a0c8-77ba-40ed-95c6-75af17122a4c'
    static readonly ATTRIBUTES_AVATAR: string = 'd0549dfb-54f6-4f9c-9869-068f2139c09d'
    static readonly ATTRIBUTES_NAME: string = '8fa6f3d3-82d6-42e8-b1a1-b08b167902c8'
    static readonly ATTRIBUTES_EMAIL: string = '109a6a50-de3b-4c19-a061-4d447a31b2a6'
    static readonly ATTRIBUTES_MESSAGE: string = 'd37769df-e333-4f57-a648-aeac888d7567'
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
    private readonly _email?: string
    getEmail(): string | undefined {
        return this._email
    }
    private readonly _message?: string
    getMessage(): string | undefined {
        return this._message
    }
    accept(visitor: AttributeVisitor) {
        if (this._avatarContentKey !== undefined && this._avatarContentKey !== null) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_AVATAR, [this._avatarContentKey]);
        } else if (this._avatarContentKey === null) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_AVATAR, []);
        }
        if (this._name !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NAME, [this._name]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_NAME, []);
        }
        if (this._email !== undefined) {
          visitor.visitEmailAttribute(Contact.ATTRIBUTES_EMAIL, [this._email]);
        } else {
          visitor.visitEmailAttribute(Contact.ATTRIBUTES_EMAIL, []);
        }
        if (this._message !== undefined) {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_MESSAGE, [this._message]);
        } else {
          visitor.visitTextAttribute(Contact.ATTRIBUTES_MESSAGE, []);
        }
    }
    getTypeId(): string {
        return Contact.TYPE_ID
    }
    static builder(): ContactBuilder {
        return new ContactBuilder()
    }
    constructor(builder: ContactBuilder) {
        this._id = builder.getId()
        this._created = builder.getCreated()
        this._updated = builder.getUpdated()
        this._avatar = builder.getAvatar()
        this._avatarContentKey = builder.getAvatarContentKey()
        this._name = builder.getName()
        this._email = builder.getEmail()
        this._message = builder.getMessage()
    }
    toBuilder(): ContactBuilder {
        const builder = Contact.builder()
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
        if (this._email) {
          builder.email(this._email)
        }
        if (this._message) {
          builder.message(this._message)
        }
        return builder
    }
}
export class ContactBuilder {
    private _id?: string
    private _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    created(value: Date): ContactBuilder {
        this._created = value
        return this
    }
    private _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    updated(value: Date): ContactBuilder {
        this._updated = value
        return this
    }
    private _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    avatar(value: string): ContactBuilder {
        this._avatar = value
        return this
    }
    private _avatarContentKey?: string | null
    getAvatarContentKey(): string | null | undefined {
        return this._avatarContentKey
    }
    avatarData(value: StreamData): ContactBuilder {
        this._avatarContentKey = value.contentKey
        return this
    }
    removeAvatarData(): ContactBuilder {
        this._avatarContentKey = null
        return this
    }
    private _name?: string
    getName(): string | undefined {
        return this._name
    }
    name(value: string): ContactBuilder {
        this._name = value
        return this
    }
    private _email?: string
    getEmail(): string | undefined {
        return this._email
    }
    email(value: string): ContactBuilder {
        this._email = value
        return this
    }
    private _message?: string
    getMessage(): string | undefined {
        return this._message
    }
    message(value: string): ContactBuilder {
        this._message = value
        return this
    }
    getId(): string | undefined {
        return this._id
    }
    id(value: string): ContactBuilder {
        this._id = value
        return this
    }
    build(): Contact {
        return new Contact(this);
    }
}
