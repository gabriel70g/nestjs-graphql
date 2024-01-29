import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Hola mundo es lo que retorna',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 1000;
  }

  @Query(() => Int, {
    name: 'randomFronZeroTo',
    description: 'from zero to argument To (default 6)',
  })
  getRandomFronZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 6
  ): number {
    return Math.floor(Math.random() * to);
  }
}
