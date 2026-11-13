export const POSTGRESQL_INVALID_TRANSACTION_STATE_SQLSTATE_ENUM = {
  INVALID_TRANSACTION_STATE: {
    code: "25000",
    name: "invalid_transaction_state",
  },
  ACTIVE_SQL_TRANSACTION: {
    code: "25001",
    name: "active_sql_transaction",
  },
} as const;
