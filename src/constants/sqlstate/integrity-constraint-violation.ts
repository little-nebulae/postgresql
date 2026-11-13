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
} as const;
