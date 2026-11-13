export const POSTGRESQL_INVALID_TRANSACTION_STATE_SQLSTATE_ENUM = {
  INVALID_TRANSACTION_STATE: {
    code: "25000",
    name: "invalid_transaction_state",
  },
  ACTIVE_SQL_TRANSACTION: {
    code: "25001",
    name: "active_sql_transaction",
  },
  BRANCH_TRANSACTION_ALREADY_ACTIVE: {
    code: "25002",
    name: "branch_transaction_already_active",
  },
  HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL: {
    code: "25008",
    name: "held_cursor_requires_same_isolation_level",
  },
  INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION: {
    code: "25003",
    name: "inappropriate_access_mode_for_branch_transaction",
  },
  INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION: {
    code: "25004",
    name: "inappropriate_isolation_level_for_branch_transaction",
  },
  NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION: {
    code: "25005",
    name: "no_active_sql_transaction_for_branch_transaction",
  },
  READ_ONLY_SQL_TRANSACTION: {
    code: "25006",
    name: "read_only_sql_transaction",
  },
  SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED: {
    code: "25007",
    name: "schema_and_data_statement_mixing_not_supported",
  },
  NO_ACTIVE_SQL_TRANSACTION: {
    code: "25P01",
    name: "no_active_sql_transaction",
  },
  IN_FAILED_SQL_TRANSACTION: {
    code: "25P02",
    name: "in_failed_sql_transaction",
  },
  IDLE_IN_TRANSACTION_SESSION_TIMEOUT: {
    code: "25P03",
    name: "idle_in_transaction_session_timeout",
  },
  TRANSACTION_TIMEOUT: {
    code: "25P04",
    name: "transaction_timeout",
  },
} as const;
