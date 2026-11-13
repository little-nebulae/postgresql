export const POSTGRESQL_DATA_EXCEPTION_SQLSTATE_ENUM = {
  DATA_EXCEPTION: {
    code: "22000",
    name: "data_exception",
  },
  ARRAY_SUBSCRIPT_ERROR: {
    code: "2202E",
    name: "array_subscript_error",
  },
  CHARACTER_NOT_IN_REPERTOIRE: {
    code: "22021",
    name: "character_not_in_repertoire",
  },
  DATETIME_FIELD_OVERFLOW: {
    code: "22008",
    name: "datetime_field_overflow",
  },
  DIVISION_BY_ZERO: {
    code: "22012",
    name: "division_by_zero",
  },
  ERROR_IN_ASSIGNMENT: {
    code: "22005",
    name: "error_in_assignment",
  },
  ESCAPE_CHARACTER_CONFLICT: {
    code: "2200B",
    name: "escape_character_conflict",
  },
  INDICATOR_OVERFLOW: {
    code: "22022",
    name: "indicator_overflow",
  },
  INTERVAL_FIELD_OVERFLOW: {
    code: "22015",
    name: "interval_field_overflow",
  },
  INVALID_ARGUMENT_FOR_LOGARITHM: {
    code: "2201E",
    name: "invalid_argument_for_logarithm",
  },
  INVALID_ARGUMENT_FOR_NTILE_FUNCTION: {
    code: "22014",
    name: "invalid_argument_for_ntile_function",
  },
  INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION: {
    code: "22016",
    name: "invalid_argument_for_nth_value_function",
  },
  INVALID_ARGUMENT_FOR_POWER_FUNCTION: {
    code: "2201F",
    name: "invalid_argument_for_power_function",
  },
  INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION: {
    code: "2201G",
    name: "invalid_argument_for_width_bucket_function",
  },
  INVALID_CHARACTER_VALUE_FOR_CAST: {
    code: "22018",
    name: "invalid_character_value_for_cast",
  },
  INVALID_DATETIME_FORMAT: {
    code: "22007",
    name: "invalid_datetime_format",
  },
  INVALID_ESCAPE_CHARACTER: {
    code: "22019",
    name: "invalid_escape_character",
  },
  INVALID_ESCAPE_OCTET: {
    code: "2200D",
    name: "invalid_escape_octet",
  },
  INVALID_ESCAPE_SEQUENCE: {
    code: "22025",
    name: "invalid_escape_sequence",
  },
  NONSTANDARD_USE_OF_ESCAPE_CHARACTER: {
    code: "22P06",
    name: "nonstandard_use_of_escape_character",
  },
  INVALID_INDICATOR_PARAMETER_VALUE: {
    code: "22010",
    name: "invalid_indicator_parameter_value",
  },
  INVALID_PARAMETER_VALUE: {
    code: "22023",
    name: "invalid_parameter_value",
  },
  INVALID_PRECEDING_OR_FOLLOWING_SIZE: {
    code: "22013",
    name: "invalid_preceding_or_following_size",
  },
  INVALID_REGULAR_EXPRESSION: {
    code: "2201B",
    name: "invalid_regular_expression",
  },
  INVALID_ROW_COUNT_IN_LIMIT_CLAUSE: {
    code: "2201W",
    name: "invalid_row_count_in_limit_clause",
  },
  INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE: {
    code: "2201X",
    name: "invalid_row_count_in_result_offset_clause",
  },
  INVALID_TABLESAMPLE_ARGUMENT: {
    code: "2202H",
    name: "invalid_tablesample_argument",
  },
  INVALID_TABLESAMPLE_REPEAT: {
    code: "2202G",
    name: "invalid_tablesample_repeat",
  },
  INVALID_TIME_ZONE_DISPLACEMENT_VALUE: {
    code: "22009",
    name: "invalid_time_zone_displacement_value",
  },
  INVALID_USE_OF_ESCAPE_CHARACTER: {
    code: "2200C",
    name: "invalid_use_of_escape_character",
  },
  MOST_SPECIFIC_TYPE_MISMATCH: {
    code: "2200G",
    name: "most_specific_type_mismatch",
  },
  NULL_VALUE_NOT_ALLOWED: {
    code: "22004",
    name: "null_value_not_allowed",
  },
  NULL_VALUE_NO_INDICATOR_PARAMETER: {
    code: "22002",
    name: "null_value_no_indicator_parameter",
  },
  NUMERIC_VALUE_OUT_OF_RANGE: {
    code: "22003",
    name: "numeric_value_out_of_range",
  },
  SEQUENCE_GENERATOR_LIMIT_EXCEEDED: {
    code: "2200H",
    name: "sequence_generator_limit_exceeded",
  },
  STRING_DATA_LENGTH_MISMATCH: {
    code: "22026",
    name: "string_data_length_mismatch",
  },
  STRING_DATA_RIGHT_TRUNCATION: {
    code: "22001",
    name: "string_data_right_truncation",
  },
  SUBSTRING_ERROR: {
    code: "22011",
    name: "substring_error",
  },
  TRIM_ERROR: {
    code: "22027",
    name: "trim_error",
  },
  UNTERMINATED_C_STRING: {
    code: "22024",
    name: "unterminated_c_string",
  },
  ZERO_LENGTH_CHARACTER_STRING: {
    code: "2200F",
    name: "zero_length_character_string",
  },
  FLOATING_POINT_EXCEPTION: {
    code: "22P01",
    name: "floating_point_exception",
  },
  INVALID_TEXT_REPRESENTATION: {
    code: "22P02",
    name: "invalid_text_representation",
  },
  INVALID_BINARY_REPRESENTATION: {
    code: "22P03",
    name: "invalid_binary_representation",
  },
  BAD_COPY_FILE_FORMAT: {
    code: "22P04",
    name: "bad_copy_file_format",
  },
  UNTRANSLATABLE_CHARACTER: {
    code: "22P05",
    name: "untranslatable_character",
  },
  DATUM_VERSION_MISMATCH: {
    code: "22P07",
    name: "datum_version_mismatch",
  },
  NOT_AN_XML_DOCUMENT: {
    code: "2200L",
    name: "not_an_xml_document",
  },
  INVALID_XML_DOCUMENT: {
    code: "2200M",
    name: "invalid_xml_document",
  },
  INVALID_XML_CONTENT: {
    code: "2200N",
    name: "invalid_xml_content",
  },
  INVALID_XML_COMMENT: {
    code: "2200S",
    name: "invalid_xml_comment",
  },
  INVALID_XML_PROCESSING_INSTRUCTION: {
    code: "2200T",
    name: "invalid_xml_processing_instruction",
  },
  DUPLICATE_JSON_OBJECT_KEY_VALUE: {
    code: "22030",
    name: "duplicate_json_object_key_value",
  },
  INVALID_ARGUMENT_FOR_SQL_JSON_DATETIME_FUNCTION: {
    code: "22031",
    name: "invalid_argument_for_sql_json_datetime_function",
  },
  INVALID_JSON_TEXT: {
    code: "22032",
    name: "invalid_json_text",
  },
  INVALID_SQL_JSON_SUBSCRIPT: {
    code: "22033",
    name: "invalid_sql_json_subscript",
  },
  MORE_THAN_ONE_SQL_JSON_ITEM: {
    code: "22034",
    name: "more_than_one_sql_json_item",
  },
  NO_SQL_JSON_ITEM: {
    code: "22035",
    name: "no_sql_json_item",
  },
  NON_NUMERIC_SQL_JSON_ITEM: {
    code: "22036",
    name: "non_numeric_sql_json_item",
  },
  NON_UNIQUE_KEYS_IN_A_JSON_OBJECT: {
    code: "22037",
    name: "non_unique_keys_in_a_json_object",
  },
  SINGLETON_SQL_JSON_ITEM_REQUIRED: {
    code: "22038",
    name: "singleton_sql_json_item_required",
  },
  SQL_JSON_ARRAY_NOT_FOUND: {
    code: "22039",
    name: "sql_json_array_not_found",
  },
  SQL_JSON_MEMBER_NOT_FOUND: {
    code: "2203A",
    name: "sql_json_member_not_found",
  },
  SQL_JSON_NUMBER_NOT_FOUND: {
    code: "2203B",
    name: "sql_json_number_not_found",
  },
  SQL_JSON_OBJECT_NOT_FOUND: {
    code: "2203C",
    name: "sql_json_object_not_found",
  },
  TOO_MANY_JSON_ARRAY_ELEMENTS: {
    code: "2203D",
    name: "too_many_json_array_elements",
  },
  TOO_MANY_JSON_OBJECT_MEMBERS: {
    code: "2203E",
    name: "too_many_json_object_members",
  },
  SQL_JSON_SCALAR_REQUIRED: {
    code: "2203F",
    name: "sql_json_scalar_required",
  },
  SQL_JSON_ITEM_CANNOT_BE_CAST_TO_TARGET_TYPE: {
    code: "2203G",
    name: "sql_json_item_cannot_be_cast_to_target_type",
  },
} as const;
