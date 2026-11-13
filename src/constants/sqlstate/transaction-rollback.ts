export const POSTGRESQL_TRANSACTION_ROLLBACK_SQLSTATE_ENUM = {
  TRANSACTION_ROLLBACK: {
    CODE: "40000",
    NAME: "transaction_rollback",
  },
  TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION: {
    CODE: "40002",
    NAME: "transaction_integrity_constraint_violation",
  },
  SERIALIZATION_FAILURE: {
    CODE: "40001",
    NAME: "serialization_failure",
  },
  STATEMENT_COMPLETION_UNKNOWN: {
    CODE: "40003",
    NAME: "statement_completion_unknown",
  },
  DEADLOCK_DETECTED: {
    CODE: "40P01",
    NAME: "deadlock_detected",
  },
} as const;
