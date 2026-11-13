import type { BaseErrorMeta } from "@little-nebulae/error";

import { BaseError } from "@little-nebulae/error";

import { POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM } from "@/constants/sqlstate/integrity-constraint-violation";

export class PostgreSqlForeignKeyConstraintViolationError<
  TCause,
  TMeta extends BaseErrorMeta,
> extends BaseError<
  "POSTGRESQL_FOREIGN_KEY_CONSTRAINT_VIOLATION_ERROR",
  TCause,
  TMeta
> {
  static readonly SQLSTATE =
    POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM.FOREIGN_KEY_VIOLATION;

  readonly name = "PostgreSqlForeignKeyConstraintViolationError";
  readonly code = "POSTGRESQL_FOREIGN_KEY_CONSTRAINT_VIOLATION_ERROR";
}
