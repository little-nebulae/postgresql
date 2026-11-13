import type { BaseErrorMeta } from "@little-nebulae/error";

import { BaseError } from "@little-nebulae/error";

import { POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM } from "@/constants/sqlstate/integrity-constraint-violation";

export class PostgreSqlCheckConstraintViolationError<
  TCause,
  TMeta extends BaseErrorMeta,
> extends BaseError<
  "POSTGRESQL_CHECK_CONSTRAINT_VIOLATION_ERROR",
  TCause,
  TMeta
> {
  static readonly SQLSTATE =
    POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM.CHECK_VIOLATION;

  readonly name = "PostgreSqlCheckConstraintViolationError";
  readonly code = "POSTGRESQL_CHECK_CONSTRAINT_VIOLATION_ERROR";
}
