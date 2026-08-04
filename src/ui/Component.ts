/**
 * Base class for every UI component.
 */
export abstract class Component<T extends HTMLElement> {

    public readonly element: T;

    protected constructor(element: T) {

        this.element = element;

    }

    /**
     * Called after construction to build the component.
     */
    public abstract render(): void;

}