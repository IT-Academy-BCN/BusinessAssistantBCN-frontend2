import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// MODELS
import { TodoItemNode } from "../models/todo-item-node";


/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
    dataChange = new BehaviorSubject<TodoItemNode[]>([]);

    get data(): TodoItemNode[] {
        return this.dataChange.value;
    }

    constructor(
        // @Inject('data') private dataToCheckList: {}
    ) {
        // this.initialize(this.dataToCheckList);
    }

    initialize(dataToSHow: {}) {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        // const data = this.buildFileTree(this.dataToCheckList, 0);
        const data = this.buildFileTree(dataToSHow, 0);

        // Notify the change.
        this.dataChange.next(data);
    }

    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
        return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
            const value = obj[key];
            const node = new TodoItemNode();
            node.item = key;

            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                } else {
                    node.item = value;
                }
            }

            return accumulator.concat(node);
        }, []);
    }

    /** Add an item to to-do list */
    insertItem(parent: TodoItemNode, name: string) {
        if (parent.children) {
            parent.children.push({ item: name } as TodoItemNode);
            this.dataChange.next(this.data);
        }
    }

    updateItem(node: TodoItemNode, name: string) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}