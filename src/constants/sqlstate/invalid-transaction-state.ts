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
} as const;
