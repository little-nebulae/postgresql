export const POSTGRESQL_DATA_EXCEPTION_SQLSTATE_ENUM = {
  DATA_EXCEPTION: {
    CODE: "22000",
    NAME: "data_exception",
  },
  ARRAY_SUBSCRIPT_ERROR: {
    CODE: "2202E",
    NAME: "array_subscript_error",
  },
  CHARACTER_NOT_IN_REPERTOIRE: {
    CODE: "22021",
    NAME: "character_not_in_repertoire",
  },
  DATETIME_FIELD_OVERFLOW: {
    CODE: "22008",
    NAME: "datetime_field_overflow",
  },
  DIVISION_BY_ZERO: {
    CODE: "22012",
    NAME: "division_by_zero",
  },
  ERROR_IN_ASSIGNMENT: {
    CODE: "22005",
    NAME: "error_in_assignment",
  },
  ESCAPE_CHARACTER_CONFLICT: {
    CODE: "2200B",
    NAME: "escape_character_conflict",
  },
  INDICATOR_OVERFLOW: {
    CODE: "22022",
    NAME: "indicator_overflow",
  },
  INTERVAL_FIELD_OVERFLOW: {
    CODE: "22015",
    NAME: "interval_field_overflow",
  },
  INVALID_ARGUMENT_FOR_LOGARITHM: {
    CODE: "2201E",
    NAME: "invalid_argument_for_logarithm",
  },
  INVALID_ARGUMENT_FOR_NTILE_FUNCTION: {
    CODE: "22014",
    NAME: "invalid_argument_for_ntile_function",
  },
  INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION: {
    CODE: "22016",
    NAME: "invalid_argument_for_nth_value_function",
  },
  INVALID_ARGUMENT_FOR_POWER_FUNCTION: {
    CODE: "2201F",
    NAME: "invalid_argument_for_power_function",
  },
  INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION: {
    CODE: "2201G",
    NAME: "invalid_argument_for_width_bucket_function",
  },
  INVALID_CHARACTER_VALUE_FOR_CAST: {
    CODE: "22018",
    NAME: "invalid_character_value_for_cast",
  },
  INVALID_DATETIME_FORMAT: {
    CODE: "22007",
    NAME: "invalid_datetime_format",
  },
  INVALID_ESCAPE_CHARACTER: {
    CODE: "22019",
    NAME: "invalid_escape_character",
  },
  INVALID_ESCAPE_OCTET: {
    CODE: "2200D",
    NAME: "invalid_escape_octet",
  },
  INVALID_ESCAPE_SEQUENCE: {
    CODE: "22025",
    NAME: "invalid_escape_sequence",
  },
  NONSTANDARD_USE_OF_ESCAPE_CHARACTER: {
    CODE: "22P06",
    NAME: "nonstandard_use_of_escape_character",
  },
  INVALID_INDICATOR_PARAMETER_VALUE: {
    CODE: "22010",
    NAME: "invalid_indicator_parameter_value",
  },
  INVALID_PARAMETER_VALUE: {
    CODE: "22023",
    NAME: "invalid_parameter_value",
  },
  INVALID_PRECEDING_OR_FOLLOWING_SIZE: {
    CODE: "22013",
    NAME: "invalid_preceding_or_following_size",
  },
  INVALID_REGULAR_EXPRESSION: {
    CODE: "2201B",
    NAME: "invalid_regular_expression",
  },
  INVALID_ROW_COUNT_IN_LIMIT_CLAUSE: {
    CODE: "2201W",
    NAME: "invalid_row_count_in_limit_clause",
  },
  INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE: {
    CODE: "2201X",
    NAME: "invalid_row_count_in_result_offset_clause",
  },
  INVALID_TABLESAMPLE_ARGUMENT: {
    CODE: "2202H",
    NAME: "invalid_tablesample_argument",
  },
  INVALID_TABLESAMPLE_REPEAT: {
    CODE: "2202G",
    NAME: "invalid_tablesample_repeat",
  },
  INVALID_TIME_ZONE_DISPLACEMENT_VALUE: {
    CODE: "22009",
    NAME: "invalid_time_zone_displacement_value",
  },
  INVALID_USE_OF_ESCAPE_CHARACTER: {
    CODE: "2200C",
    NAME: "invalid_use_of_escape_character",
  },
  MOST_SPECIFIC_TYPE_MISMATCH: {
    CODE: "2200G",
    NAME: "most_specific_type_mismatch",
  },
  NULL_VALUE_NOT_ALLOWED: {
    CODE: "22004",
    NAME: "null_value_not_allowed",
  },
  NULL_VALUE_NO_INDICATOR_PARAMETER: {
    CODE: "22002",
    NAME: "null_value_no_indicator_parameter",
  },
  NUMERIC_VALUE_OUT_OF_RANGE: {
    CODE: "22003",
    NAME: "numeric_value_out_of_range",
  },
  SEQUENCE_GENERATOR_LIMIT_EXCEEDED: {
    CODE: "2200H",
    NAME: "sequence_generator_limit_exceeded",
  },
  STRING_DATA_LENGTH_MISMATCH: {
    CODE: "22026",
    NAME: "string_data_length_mismatch",
  },
  STRING_DATA_RIGHT_TRUNCATION: {
    CODE: "22001",
    NAME: "string_data_right_truncation",
  },
  SUBSTRING_ERROR: {
    CODE: "22011",
    NAME: "substring_error",
  },
  TRIM_ERROR: {
    CODE: "22027",
    NAME: "trim_error",
  },
  UNTERMINATED_C_STRING: {
    CODE: "22024",
    NAME: "unterminated_c_string",
  },
  ZERO_LENGTH_CHARACTER_STRING: {
    CODE: "2200F",
    NAME: "zero_length_character_string",
  },
  FLOATING_POINT_EXCEPTION: {
    CODE: "22P01",
    NAME: "floating_point_exception",
  },
  INVALID_TEXT_REPRESENTATION: {
    CODE: "22P02",
    NAME: "invalid_text_representation",
  },
  INVALID_BINARY_REPRESENTATION: {
    CODE: "22P03",
    NAME: "invalid_binary_representation",
  },
  BAD_COPY_FILE_FORMAT: {
    CODE: "22P04",
    NAME: "bad_copy_file_format",
  },
  UNTRANSLATABLE_CHARACTER: {
    CODE: "22P05",
    NAME: "untranslatable_character",
  },
  DATUM_VERSION_MISMATCH: {
    CODE: "22P07",
    NAME: "datum_version_mismatch",
  },
  NOT_AN_XML_DOCUMENT: {
    CODE: "2200L",
    NAME: "not_an_xml_document",
  },
  INVALID_XML_DOCUMENT: {
    CODE: "2200M",
    NAME: "invalid_xml_document",
  },
  INVALID_XML_CONTENT: {
    CODE: "2200N",
    NAME: "invalid_xml_content",
  },
  INVALID_XML_COMMENT: {
    CODE: "2200S",
    NAME: "invalid_xml_comment",
  },
  INVALID_XML_PROCESSING_INSTRUCTION: {
    CODE: "2200T",
    NAME: "invalid_xml_processing_instruction",
  },
  DUPLICATE_JSON_OBJECT_KEY_VALUE: {
    CODE: "22030",
    NAME: "duplicate_json_object_key_value",
  },
  INVALID_ARGUMENT_FOR_SQL_JSON_DATETIME_FUNCTION: {
    CODE: "22031",
    NAME: "invalid_argument_for_sql_json_datetime_function",
  },
  INVALID_JSON_TEXT: {
    CODE: "22032",
    NAME: "invalid_json_text",
  },
  INVALID_SQL_JSON_SUBSCRIPT: {
    CODE: "22033",
    NAME: "invalid_sql_json_subscript",
  },
  MORE_THAN_ONE_SQL_JSON_ITEM: {
    CODE: "22034",
    NAME: "more_than_one_sql_json_item",
  },
  NO_SQL_JSON_ITEM: {
    CODE: "22035",
    NAME: "no_sql_json_item",
  },
  NON_NUMERIC_SQL_JSON_ITEM: {
    CODE: "22036",
    NAME: "non_numeric_sql_json_item",
  },
  NON_UNIQUE_KEYS_IN_A_JSON_OBJECT: {
    CODE: "22037",
    NAME: "non_unique_keys_in_a_json_object",
  },
  SINGLETON_SQL_JSON_ITEM_REQUIRED: {
    CODE: "22038",
    NAME: "singleton_sql_json_item_required",
  },
  SQL_JSON_ARRAY_NOT_FOUND: {
    CODE: "22039",
    NAME: "sql_json_array_not_found",
  },
  SQL_JSON_MEMBER_NOT_FOUND: {
    CODE: "2203A",
    NAME: "sql_json_member_not_found",
  },
  SQL_JSON_NUMBER_NOT_FOUND: {
    CODE: "2203B",
    NAME: "sql_json_number_not_found",
  },
  SQL_JSON_OBJECT_NOT_FOUND: {
    CODE: "2203C",
    NAME: "sql_json_object_not_found",
  },
  TOO_MANY_JSON_ARRAY_ELEMENTS: {
    CODE: "2203D",
    NAME: "too_many_json_array_elements",
  },
  TOO_MANY_JSON_OBJECT_MEMBERS: {
    CODE: "2203E",
    NAME: "too_many_json_object_members",
  },
  SQL_JSON_SCALAR_REQUIRED: {
    CODE: "2203F",
    NAME: "sql_json_scalar_required",
  },
  SQL_JSON_ITEM_CANNOT_BE_CAST_TO_TARGET_TYPE: {
    CODE: "2203G",
    NAME: "sql_json_item_cannot_be_cast_to_target_type",
  },
} as const;
