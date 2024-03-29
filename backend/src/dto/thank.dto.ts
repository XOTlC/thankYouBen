import { IsNotEmpty } from "class-validator";

export class ThankDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly message: string;
}