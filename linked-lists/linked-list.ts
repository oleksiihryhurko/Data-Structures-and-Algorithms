class Node<T> {
    private _next: Node<T> | null;
    private _value: T;

    constructor(value: T, next: Node<T> | null = null) {
        this._value = value;
        this._next = next;
    };

    get next(): Node<T> | null {
        return this._next;
    };

    set next(next: Node<T> | null) {
        this._next = next;
    };

    get value(): T {
        return this._value;
    };

    set value(value: T) {
        this.value = value;
    };
};

class IndexOutOfBoundException extends Error {
    constructor(index: number) {
        super("[IndexOutOfBoundException] index: " + index);
    };
}

export class LinkedList<T> {
    private _size: number = 0;
    private _head: Node<T> | null;
    private _tail: Node<T> | null;

    constructor(...values: Array<T>) {
        //TODO: set all nodes to list
    };

    get size(): number {
        return this._size;
    };

    get head(): Node<T> | null {
        return this._head;
    };

    get tail(): Node<T> | null {
        return this._tail;
    };

    /**
     * @throws {<IndexOutOfBoundException>}
     */
    public add(value: T, index?: number): void {
        if (index)
            this.validateIndex(index);

    };

    /**
     * @returns If Node does not exist by index returns false
     */
    public set(value: T, index: number): boolean {
        this.validateIndex(index);
        return false;
    };

    /**
     * @throws {<IndexOutOfBoundException>}
     */
    public get(index: number): T {
        this.validateIndex(index);
        
    }

    private validateIndex(index: number): void {
        if (index < 0 || index > this.size)
            throw new IndexOutOfBoundException(index);
    };
};
