import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field(() => String, {description: 'Description to todo', nullable: true})
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    description?: string;

    @Field(() => String, {nullable: true})
    done?: boolean;

}
