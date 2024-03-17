declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            environment: "dev" | "prod" | "debug";
        }
    }
}

export { };