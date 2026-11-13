export const POSTGRESQL_INVALID_TRANSACTION_STATE_SQLSTATE_ENUM = {
  INVALID_TRANSACTION_STATE: {
    CODE: "25000",
    NAME: "invalid_transaction_state",
  },
  ACTIVE_SQL_TRANSACTION: {
    CODE: "25001",
    NAME: "active_sql_transaction",
  },
  BRANCH_TRANSACTION_ALREADY_ACTIVE: {
    CODE: "25002",
    NAME: "branch_transaction_already_active",
  },
  HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL: {
    CODE: "25008",
    NAME: "held_cursor_requires_same_isolation_level",
  },
  INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION: {
    CODE: "25003",
    NAME: "inappropriate_access_mode_for_branch_transaction",
  },
  INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION: {
    CODE: "25004",
    NAME: "inappropriate_isolation_level_for_branch_transaction",
  },
  NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION: {
    CODE: "25005",
    NAME: "no_active_sql_transaction_for_branch_transaction",
  },
  READ_ONLY_SQL_TRANSACTION: {
    CODE: "25006",
    NAME: "read_only_sql_transaction",
  },
  SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED: {
    CODE: "25007",
    NAME: "schema_and_data_statement_mixing_not_supported",
  },
  NO_ACTIVE_SQL_TRANSACTION: {
    CODE: "25P01",
    NAME: "no_active_sql_transaction",
  },
  IN_FAILED_SQL_TRANSACTION: {
    CODE: "25P02",
    NAME: "in_failed_sql_transaction",
  },
  IDLE_IN_TRANSACTION_SESSION_TIMEOUT: {
    CODE: "25P03",
    NAME: "idle_in_transaction_session_timeout",
  },
  TRANSACTION_TIMEOUT: {
    CODE: "25P04",
    NAME: "transaction_timeout",
  },
} as const;
