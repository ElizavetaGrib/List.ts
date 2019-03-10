import {expect} from 'chai';
import {SelfOrganizedList} from '../List';

describe('List', function () {
    describe('constructor', function () {
        it('should create an empty list', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            expect(list.length).to.equal(0);
            expect(list.head).to.equal(null);
        });
    });
    describe('add', function () {
        it( 'should add the first element', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            expect(list.size()).to.equal(1);
            expect(list.tostring()).to.equal('2');
        });
        it('should add elements if index > 0', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            expect(list.size()).to.equal(2);
            expect(list.tostring()).to.equal('2, 5');
        });
    });
    describe('remove', function () {
        it('should remove item from position 1', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            list.add(10, 2);
            list.remove(0);
            expect(list.size()).to.equal(2);
            expect(list.tostring()).to.equal('5, 10');
        });
        it('should remove the item from the middle', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            list.add(10, 2);
            list.remove(1);
            expect(list.size()).to.equal(2);
            expect(list.tostring()).to.equal('2, 10');
        });
        it('should remove the last item', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            list.add(10, 2);
            list.remove(2);
            expect(list.size()).to.equal(2);
            expect(list.tostring()).to.equal('2, 5');
        });
    });
    describe('get', function () {
        it('should get the first item', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            list.add(10, 2);
            expect(list.get(0)).to.equal(2);
        });
        it('should get the item from the middle', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            list.add(10, 2);
            expect(list.get(1)).to.equal(5);
        });
        it('should get the last item', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            list.add(10, 2);
            expect(list.get(2)).to.equal(10);
        });
        it('should return null if there is no element', function () {
            let list: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list.add(2, 0);
            list.add(5, 1);
            list.add(10, 2);
            expect(list.get(100)).to.equal(null);
        });
    });
    describe('equals', function () {
        it('comparing two identical lists: true', function () {
            let list1: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list1.add(2, 0);
            list1.add(5, 1);
            list1.add(10, 2);
            let list2: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list2.add(2, 0);
            list2.add(5, 1);
            list2.add(10, 2);
            expect(list1.equals(list2)).to.equal(true);
        });
        it('comparing two different lists: false', function () {
            let list1: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list1.add(2, 0);
            list1.add(5, 1);
            list1.add(10, 2);
            let list2: SelfOrganizedList<number> = new SelfOrganizedList<number>();
            list2.add(7, 0);
            list2.add(8, 1);
            list2.add(10, 2);
            expect(list1.equals(list2)).to.equal(false);
        });
    });
    describe('different types', function () {
        it('list with different types', function () {
            type types = string | number | boolean;
            let list: SelfOrganizedList<types> = new SelfOrganizedList<types>();
            list.add(111, 0);
            list.add("TypeScript", 1);
            list.add(true, 2);
            list.add(222, 3);
            list.remove(3);
            expect(list.size()).to.equal(3);
            expect(list.tostring()).to.equal("111, \"TypeScript\", true");
        });
    });
});
