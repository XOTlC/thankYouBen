declare module "*.module.scss" {
    const content: { [className: string]: string };

    export default content;
}

declare module "@components/*" {
    const content: ComponentType;

    export default content;
}

declare module "@styles/*" {
    const content: { [className: string]: string };

    export default content;
}