export const POSTGRESQL_INSUFFICIENT_PRIVILEGE_SQLSTATE_ENUM = {
  CODE: "42501",
  NAME: "insufficient_privilege",
} as const;

export const POSTGRESQL_SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION_SQLSTATE_ENUM = {
  SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION: {
    CODE: "42000",
    NAME: "syntax_error_or_access_rule_violation",
  },
  SYNTAX_ERROR: {
    CODE: "42601",
    NAME: "syntax_error",
  },
  INSUFFICIENT_PRIVILEGE: POSTGRESQL_INSUFFICIENT_PRIVILEGE_SQLSTATE_ENUM,
  CANNOT_COERCE: {
    CODE: "42846",
    NAME: "cannot_coerce",
  },
  GROUPING_ERROR: {
    CODE: "42803",
    NAME: "grouping_error",
  },
  WINDOWING_ERROR: {
    CODE: "42P20",
    NAME: "windowing_error",
  },
  INVALID_RECURSION: {
    CODE: "42P19",
    NAME: "invalid_recursion",
  },
  INVALID_FOREIGN_KEY: {
    CODE: "42830",
    NAME: "invalid_foreign_key",
  },
  INVALID_NAME: {
    CODE: "42602",
    NAME: "invalid_name",
  },
  NAME_TOO_LONG: {
    CODE: "42622",
    NAME: "name_too_long",
  },
  RESERVED_NAME: {
    CODE: "42939",
    NAME: "reserved_name",
  },
  DATATYPE_MISMATCH: {
    CODE: "42804",
    NAME: "datatype_mismatch",
  },
  INDETERMINATE_DATATYPE: {
    CODE: "42P18",
    NAME: "indeterminate_datatype",
  },
  COLLATION_MISMATCH: {
    CODE: "42P21",
    NAME: "collation_mismatch",
  },
  INDETERMINATE_COLLATION: {
    CODE: "42P22",
    NAME: "indeterminate_collation",
  },
  WRONG_OBJECT_TYPE: {
    CODE: "42809",
    NAME: "wrong_object_type",
  },
  GENERATED_ALWAYS: {
    CODE: "428C9",
    NAME: "generated_always",
  },
  UNDEFINED_COLUMN: {
    CODE: "42703",
    NAME: "undefined_column",
  },
  UNDEFINED_FUNCTION: {
    CODE: "42883",
    NAME: "undefined_function",
  },
  UNDEFINED_TABLE: {
    CODE: "42P01",
    NAME: "undefined_table",
  },
  UNDEFINED_PARAMETER: {
    CODE: "42P02",
    NAME: "undefined_parameter",
  },
  UNDEFINED_OBJECT: {
    CODE: "42704",
    NAME: "undefined_object",
  },
  DUPLICATE_COLUMN: {
    CODE: "42701",
    NAME: "duplicate_column",
  },
  DUPLICATE_CURSOR: {
    CODE: "42P03",
    NAME: "duplicate_cursor",
  },
  DUPLICATE_DATABASE: {
    CODE: "42P04",
    NAME: "duplicate_database",
  },
  DUPLICATE_FUNCTION: {
    CODE: "42723",
    NAME: "duplicate_function",
  },
  DUPLICATE_PREPARED_STATEMENT: {
    CODE: "42P05",
    NAME: "duplicate_prepared_statement",
  },
  DUPLICATE_SCHEMA: {
    CODE: "42P06",
    NAME: "duplicate_schema",
  },
  DUPLICATE_TABLE: {
    CODE: "42P07",
    NAME: "duplicate_table",
  },
  DUPLICATE_ALIAS: {
    CODE: "42712",
    NAME: "duplicate_alias",
  },
  DUPLICATE_OBJECT: {
    CODE: "42710",
    NAME: "duplicate_object",
  },
  AMBIGUOUS_COLUMN: {
    CODE: "42702",
    NAME: "ambiguous_column",
  },
  AMBIGUOUS_FUNCTION: {
    CODE: "42725",
    NAME: "ambiguous_function",
  },
  AMBIGUOUS_PARAMETER: {
    CODE: "42P08",
    NAME: "ambiguous_parameter",
  },
  AMBIGUOUS_ALIAS: {
    CODE: "42P09",
    NAME: "ambiguous_alias",
  },
  INVALID_COLUMN_REFERENCE: {
    CODE: "42P10",
    NAME: "invalid_column_reference",
  },
  INVALID_COLUMN_DEFINITION: {
    CODE: "42611",
    NAME: "invalid_column_definition",
  },
  INVALID_CURSOR_DEFINITION: {
    CODE: "42P11",
    NAME: "invalid_cursor_definition",
  },
  INVALID_DATABASE_DEFINITION: {
    CODE: "42P12",
    NAME: "invalid_database_definition",
  },
  INVALID_FUNCTION_DEFINITION: {
    CODE: "42P13",
    NAME: "invalid_function_definition",
  },
  INVALID_PREPARED_STATEMENT_DEFINITION: {
    CODE: "42P14",
    NAME: "invalid_prepared_statement_definition",
  },
  INVALID_SCHEMA_DEFINITION: {
    CODE: "42P15",
    NAME: "invalid_schema_definition",
  },
  INVALID_TABLE_DEFINITION: {
    CODE: "42P16",
    NAME: "invalid_table_definition",
  },
  INVALID_OBJECT_DEFINITION: {
    CODE: "42P17",
    NAME: "invalid_object_definition",
  },
} as const;
