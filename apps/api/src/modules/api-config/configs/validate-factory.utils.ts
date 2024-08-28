import { ClassConstructor } from "class-transformer/types/interfaces";
import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

export const validateFactory = <T>(dto: ClassConstructor<T>, namespace: string) =>
  function(config: Record<string, unknown>) {
    const validatedConfig = plainToInstance(
      dto,
      config,
      { enableImplicitConversion: true },
    );

    // @ts-ignore - This is a hack to get around the fact that the class-validator types are incorrect
    const errors = validateSync(validatedConfig, { skipMissingProperties: false });

    if (errors.length > 0) {
      throw new Error(`${namespace} environment variable are invalid: \n ${errors.join("\n")}`);
    }
    return validatedConfig;
  };
