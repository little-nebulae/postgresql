export const POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM = {
  INTEGRITY_CONSTRAINT_VIOLATION: {
    CODE: "23000",
    NAME: "integrity_constraint_violation",
  },
  RESTRICT_VIOLATION: {
    CODE: "23001",
    NAME: "restrict_violation",
  },
  NOT_NULL_VIOLATION: {
    CODE: "23502",
    NAME: "not_null_violation",
  },
  FOREIGN_KEY_VIOLATION: {
    CODE: "23503",
    NAME: "foreign_key_violation",
  },
  UNIQUE_VIOLATION: {
    CODE: "23505",
    NAME: "unique_violation",
  },
  CHECK_VIOLATION: {
    CODE: "23514",
    NAME: "check_violation",
  },
  EXCLUSION_VIOLATION: {
    CODE: "23P01",
    NAME: "exclusion_violation",
  },
} as const;
