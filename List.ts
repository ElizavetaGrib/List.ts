import {ListNode} from "./ListNode";

export class SelfOrganizedList<T> {
    public head: ListNode<T>;
    public length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    public size(): number {
        return this.length;
    }

    public add(value: T, index: number): void {
        let node = new ListNode<T>(value);
        let current = this.head;
        if(index > -1 && index <= this.length) {
            if(index === 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                for(let i = 1; index != i; i++){
                    current = current.next;
                }
                let temp = current.next;
                node.next = temp;
                current.next = node;
            }
            this.length++;
        }
    }

    public get(index: number): T {
        let i = 0;
        let current = this.head;
        if(index < 0 || index > this.length - 1) {
            return null;
        }
        while(i != index) {
            current = current.next;
            i++;
        }
        return current.data;
    }

    public remove(index: number): void {
        let current = this.head;
        let previous;
        if(index > -1 && index < this.length) {
            if(index === 0) {
                this.head = current.next;
            }
            else {
                let i = 1;
                while(i != index + 1) {
                    previous = current;
                    current = current.next;
                    i++;
                }
                previous.next = current.next;
            }
            this.length--;
        }
    }

    public tostring(): string {
        let result: string = '';
        let i: number = 0;
        let current = this.head;
        while(i != this.length) {
            result += JSON.stringify(current.data) + ', ';
            current = current.next;
            i++;
        }
        return result.slice(0, result.length - 2);
    }

    public equals(list2: SelfOrganizedList<T>): boolean {
        return this.tostring() === list2.tostring();
    }
}