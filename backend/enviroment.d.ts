declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_NAME: string;
            DATABASE_USER: string;
            DATABASE_PASSWORD: string;
            DATABASE_HOST: string;
            DATABASE_PORT: number;
            PORT: number;
            environment: "dev" | "prod" | "debug";
        }
    }
}

export { };