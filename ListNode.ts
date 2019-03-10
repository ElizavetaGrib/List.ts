export class ListNode<T> {
    public data: T;
    public next: ListNode<T>;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}