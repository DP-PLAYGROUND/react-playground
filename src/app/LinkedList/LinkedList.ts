import { ListNode } from "./ListNode";

export class LinkedList<T = any> {
    get head() {
        return this._head;
    }

    get tail() {
        if (!this.head) {
            return null;
        }

        let tail = this.head;

        while (tail.next) {
            tail = tail.next;
        }

        return tail;
    }

    constructor(private _head: ListNode<T> | null = null) {}

    add(value: T) {
        const node = new ListNode(value);
        const tail = this.tail;

        if (tail) {
            node.previous = tail;
            tail.next = node;
            return;
        }

        this._head = node;
    }
}