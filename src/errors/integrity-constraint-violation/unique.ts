import type { BaseErrorMeta } from "@little-nebulae/error";

import { BaseError } from "@little-nebulae/error";

import { POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM } from "@/constants/sqlstate/integrity-constraint-violation";

export class PostgreSqlUniqueConstraintViolationError<
  TCause,
  TMeta extends BaseErrorMeta,
> extends BaseError<
  "POSTGRESQL_UNIQUE_CONSTRAINT_VIOLATION_ERROR",
  TCause,
  TMeta
> {
  static readonly SQLSTATE =
    POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM.UNIQUE_VIOLATION;

  readonly name = "PostgreSqlUniqueConstraintViolationError";
  readonly code = "POSTGRESQL_UNIQUE_CONSTRAINT_VIOLATION_ERROR";
}
