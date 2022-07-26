export type Subscriber<T = void> = (event: T) => void;

export class Subject<T = void> {
    private readonly subscribers: Subscriber<T>[] = [];

    subscribe(subscriber: Subscriber<T>) {
        this.subscribers.push(subscriber);

        const index = this.subscribers.length - 1;

        return () => {
            this.subscribers.splice(index, 1);
        }
    }

    notify(event: T) {
        this.subscribers.forEach(subscriber => subscriber(event));
    }
}