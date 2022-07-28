export class SignatureSnapshot {
    previous: SignatureSnapshot | null = null;
    next: SignatureSnapshot | null = null;

    constructor(readonly value: ImageData) {}
}