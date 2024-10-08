import {
  Injectable,
  PipeTransform,
  ValidationError,
  ValidationPipe as BaseValidationPipe,
} from "@nestjs/common";
import { CustomValidationException } from "../filters/validation/custom-validation.exception";

@Injectable()
export class CustomValidationPipe
  extends BaseValidationPipe
  implements PipeTransform<unknown> {
  constructor() {
    super({
      transform: true,
      whitelist: true,
      skipMissingProperties: false,
      exceptionFactory: (errors: ValidationError[]) =>
        new CustomValidationException(errors),
    });
  }
}
