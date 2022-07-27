export class SnapshotNode<T = any> {
    previous: SnapshotNode<T> | null = null;
    next: SnapshotNode<T> | null = null;

    constructor(readonly value: T) {}
}