/**
 * Responsible for mounting UI components.
 */
export class Renderer {

    private readonly root: HTMLDivElement;

    public constructor(root: HTMLDivElement) {

        this.root = root;

    }

    public mount(element: HTMLElement): void {

        this.root.replaceChildren(element);

    }

}