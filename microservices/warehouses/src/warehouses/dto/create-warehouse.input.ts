import { InputType, Field } from '@nestjs/graphql';
import { Length, Min, IsEnum, IsOptional } from 'class-validator';

import { HAZARDOUS, NON_HAZARDOUS, UNKNOWN } from '../../constants';

@InputType()
export class CreateWarehouseInput {
    @Length(3)
    @Field()
    name: string;

    @IsOptional()
    @IsEnum([HAZARDOUS, NON_HAZARDOUS, UNKNOWN])
    @Field()
    type: string;

    @Min(10)
    @Field()
    size: number;
}
