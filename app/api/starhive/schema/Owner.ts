import {AttributeVisitor} from '../client/AttributeVisitor'
import {StarhiveObject} from '../client/StarhiveObject'
import {StreamData} from '../client/StreamData'
export class Owner implements StarhiveObject {
    static readonly TYPE_ID: string = 'b2f0039a-008d-4886-a85e-1440b7e99bce'
    static readonly ATTRIBUTES_CREATED: string = '242b54f6-a319-4eb8-9b08-caa95b229a57'
    static readonly ATTRIBUTES_UPDATED: string = '62a47082-f1aa-4722-ba1f-e2eaa322c1f2'
    static readonly ATTRIBUTES_AVATAR: string = '27291915-8d9c-4051-90af-4fa29579405e'
    static readonly ATTRIBUTES_NAME: string = 'c965c323-8399-40b3-8329-f0b42ff664e4'
    static readonly ATTRIBUTES_TITLE: string = 'aa0477d5-f8bf-4c26-87b7-b72725068621'
    static readonly ATTRIBUTES_BIO: string = 'dbb10e0e-7033-4416-b86c-68baa1e42b54'
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
    private readonly _title?: string
    getTitle(): string | undefined {
        return this._title
    }
    private readonly _bio?: string
    getBio(): string | undefined {
        return this._bio
    }
    accept(visitor: AttributeVisitor) {
        if (this._avatarContentKey !== undefined && this._avatarContentKey !== null) {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_AVATAR, [this._avatarContentKey]);
        } else if (this._avatarContentKey === null) {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_AVATAR, []);
        }
        if (this._name !== undefined) {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_NAME, [this._name]);
        } else {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_NAME, []);
        }
        if (this._title !== undefined) {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_TITLE, [this._title]);
        } else {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_TITLE, []);
        }
        if (this._bio !== undefined) {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_BIO, [this._bio]);
        } else {
          visitor.visitTextAttribute(Owner.ATTRIBUTES_BIO, []);
        }
    }
    getTypeId(): string {
        return Owner.TYPE_ID
    }
    static builder(): OwnerBuilder {
        return new OwnerBuilder()
    }
    constructor(builder: OwnerBuilder) {
        this._id = builder.getId()
        this._created = builder.getCreated()
        this._updated = builder.getUpdated()
        this._avatar = builder.getAvatar()
        this._avatarContentKey = builder.getAvatarContentKey()
        this._name = builder.getName()
        this._title = builder.getTitle()
        this._bio = builder.getBio()
    }
    toBuilder(): OwnerBuilder {
        const builder = Owner.builder()
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
        if (this._title) {
          builder.title(this._title)
        }
        if (this._bio) {
          builder.bio(this._bio)
        }
        return builder
    }
}
export class OwnerBuilder {
    private _id?: string
    private _created?: Date
    getCreated(): Date | undefined {
        return this._created
    }
    created(value: Date): OwnerBuilder {
        this._created = value
        return this
    }
    private _updated?: Date
    getUpdated(): Date | undefined {
        return this._updated
    }
    updated(value: Date): OwnerBuilder {
        this._updated = value
        return this
    }
    private _avatar?: string
    getAvatar(): string | undefined {
        return this._avatar
    }
    avatar(value: string): OwnerBuilder {
        this._avatar = value
        return this
    }
    private _avatarContentKey?: string | null
    getAvatarContentKey(): string | null | undefined {
        return this._avatarContentKey
    }
    avatarData(value: StreamData): OwnerBuilder {
        this._avatarContentKey = value.contentKey
        return this
    }
    removeAvatarData(): OwnerBuilder {
        this._avatarContentKey = null
        return this
    }
    private _name?: string
    getName(): string | undefined {
        return this._name
    }
    name(value: string): OwnerBuilder {
        this._name = value
        return this
    }
    private _title?: string
    getTitle(): string | undefined {
        return this._title
    }
    title(value: string): OwnerBuilder {
        this._title = value
        return this
    }
    private _bio?: string
    getBio(): string | undefined {
        return this._bio
    }
    bio(value: string): OwnerBuilder {
        this._bio = value
        return this
    }
    getId(): string | undefined {
        return this._id
    }
    id(value: string): OwnerBuilder {
        this._id = value
        return this
    }
    build(): Owner {
        return new Owner(this);
    }
}
