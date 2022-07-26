export class ListNode<T = any> {
    previous: ListNode<T> | null = null;
    next: ListNode<T> | null = null;

    constructor(private readonly value: T) {}
}