import type { BaseErrorMeta } from "@little-nebulae/error";

import { BaseError } from "@little-nebulae/error";

export class PostgreSqlUniqueConstraintViolationError<
  TCause,
  TMeta extends BaseErrorMeta,
> extends BaseError<
  "POSTGRESQL_UNIQUE_CONSTRAINT_VIOLATION_ERROR",
  TCause,
  TMeta
> {
  readonly name = "PostgreSqlUniqueConstraintViolationError";
  readonly code = "POSTGRESQL_UNIQUE_CONSTRAINT_VIOLATION_ERROR";
}
