export const POSTGRESQL_INTEGRITY_CONSTRAINT_VIOLATION_SQLSTATE_ENUM = {
  INTEGRITY_CONSTRAINT_VIOLATION: {
    code: "23000",
    name: "integrity_constraint_violation",
  },
  RESTRICT_VIOLATION: {
    code: "23001",
    name: "restrict_violation",
  },
  NOT_NULL_VIOLATION: {
    code: "23502",
    name: "not_null_violation",
  },
  FOREIGN_KEY_VIOLATION: {
    code: "23503",
    name: "foreign_key_violation",
  },
  UNIQUE_VIOLATION: {
    code: "23505",
    name: "unique_violation",
  },
  CHECK_VIOLATION: {
    code: "23514",
    name: "check_violation",
  },
  EXCLUSION_VIOLATION: {
    code: "23P01",
    name: "exclusion_violation",
  },
} as const;
