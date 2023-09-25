import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
export class AddonDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly category: string;
}
