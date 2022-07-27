export class SnapshotNode {
    previous: SnapshotNode | null = null;
    next: SnapshotNode | null = null;

    constructor(readonly value: string) {}
}