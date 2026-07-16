// AUTO-GENERATED from docs/public-api/openapi.json by scripts/generate-tools.mjs.
// Do NOT edit by hand — run `npm run gen:tools` to regenerate after the API changes.
import type { ToolDef } from "./types.js";

export const GENERATED_TOOLS: ToolDef[] = [
  {
    "name": "ping",
    "description": "Ping",
    "pathTemplate": "/ping",
    "method": "GET",
    "args": [],
    "outputSchema": {
      "properties": {
        "status": {
          "type": "string",
          "title": "Status"
        },
        "org_id": {
          "type": "string",
          "title": "Org Id"
        },
        "org_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Org Name"
        }
      },
      "type": "object",
      "required": [
        "status",
        "org_id"
      ],
      "title": "Ping",
      "$defs": {
        "Ping": {
          "properties": {
            "status": {
              "type": "string",
              "title": "Status"
            },
            "org_id": {
              "type": "string",
              "title": "Org Id"
            },
            "org_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Org Name"
            }
          },
          "type": "object",
          "required": [
            "status",
            "org_id"
          ],
          "title": "Ping"
        }
      }
    }
  },
  {
    "name": "get_me",
    "description": "Get Me",
    "pathTemplate": "/me",
    "method": "GET",
    "args": [],
    "outputSchema": {
      "properties": {
        "org_id": {
          "type": "string",
          "title": "Org Id"
        },
        "org_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Org Name"
        },
        "org_slug": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Org Slug"
        },
        "scopes": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Scopes",
          "default": []
        }
      },
      "type": "object",
      "required": [
        "org_id"
      ],
      "title": "Me",
      "$defs": {
        "Me": {
          "properties": {
            "org_id": {
              "type": "string",
              "title": "Org Id"
            },
            "org_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Org Name"
            },
            "org_slug": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Org Slug"
            },
            "scopes": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Scopes",
              "default": []
            }
          },
          "type": "object",
          "required": [
            "org_id"
          ],
          "title": "Me"
        }
      }
    }
  },
  {
    "name": "list_sessions",
    "description": "List Sessions",
    "pathTemplate": "/sessions",
    "method": "GET",
    "args": [
      {
        "name": "status",
        "description": "Filter by status: completed, scheduled, cancelled, pending, etc.",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "tutor_id",
        "description": "Filter by tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "student_id",
        "description": "Filter by student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "starts_at >= this ISO date, e.g. 2026-05-01",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "starts_at <= this ISO date, e.g. 2026-05-31",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Session"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Session]",
      "$defs": {
        "Page_Session_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Session"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Session]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Session": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "starts_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Starts At"
            },
            "ends_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Ends At"
            },
            "duration_minutes": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Duration Minutes"
            },
            "tutor_pay_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Pay Rate Cents"
            },
            "student_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Rate Cents"
            },
            "amount_owed_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Owed Cents"
            },
            "mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Mode"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "completed_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Completed At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Session"
        }
      }
    }
  },
  {
    "name": "create_session",
    "description": "Create Session",
    "pathTemplate": "/sessions",
    "method": "POST",
    "args": []
  },
  {
    "name": "get_session",
    "description": "Get Session",
    "pathTemplate": "/sessions/{session_id}",
    "method": "GET",
    "args": [
      {
        "name": "session_id",
        "description": "Session UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Title"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "starts_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Starts At"
        },
        "ends_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Ends At"
        },
        "duration_minutes": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Duration Minutes"
        },
        "tutor_pay_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Pay Rate Cents"
        },
        "student_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Rate Cents"
        },
        "amount_owed_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Owed Cents"
        },
        "mode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Mode"
        },
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "completed_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Completed At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Session",
      "$defs": {
        "Session": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "starts_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Starts At"
            },
            "ends_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Ends At"
            },
            "duration_minutes": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Duration Minutes"
            },
            "tutor_pay_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Pay Rate Cents"
            },
            "student_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Rate Cents"
            },
            "amount_owed_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Owed Cents"
            },
            "mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Mode"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "completed_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Completed At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Session"
        }
      }
    }
  },
  {
    "name": "update_session",
    "description": "Update Session",
    "pathTemplate": "/sessions/{session_id}",
    "method": "PUT",
    "args": [
      {
        "name": "session_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Title"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "starts_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Starts At"
        },
        "ends_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Ends At"
        },
        "duration_minutes": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Duration Minutes"
        },
        "tutor_pay_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Pay Rate Cents"
        },
        "student_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Rate Cents"
        },
        "amount_owed_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Owed Cents"
        },
        "mode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Mode"
        },
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "completed_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Completed At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Session",
      "$defs": {
        "Session": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "starts_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Starts At"
            },
            "ends_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Ends At"
            },
            "duration_minutes": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Duration Minutes"
            },
            "tutor_pay_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Pay Rate Cents"
            },
            "student_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Rate Cents"
            },
            "amount_owed_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Owed Cents"
            },
            "mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Mode"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "completed_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Completed At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Session"
        }
      }
    }
  },
  {
    "name": "delete_session",
    "description": "Delete Session",
    "pathTemplate": "/sessions/{session_id}",
    "method": "DELETE",
    "args": [
      {
        "name": "session_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "complete_session",
    "description": "Complete Session",
    "pathTemplate": "/sessions/{session_id}/complete",
    "method": "PUT",
    "args": [
      {
        "name": "session_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Title"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "starts_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Starts At"
        },
        "ends_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Ends At"
        },
        "duration_minutes": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Duration Minutes"
        },
        "tutor_pay_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Pay Rate Cents"
        },
        "student_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Rate Cents"
        },
        "amount_owed_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Owed Cents"
        },
        "mode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Mode"
        },
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "completed_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Completed At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Session",
      "$defs": {
        "Session": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "starts_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Starts At"
            },
            "ends_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Ends At"
            },
            "duration_minutes": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Duration Minutes"
            },
            "tutor_pay_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Pay Rate Cents"
            },
            "student_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Rate Cents"
            },
            "amount_owed_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Owed Cents"
            },
            "mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Mode"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "completed_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Completed At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Session"
        }
      }
    }
  },
  {
    "name": "lookup_user",
    "description": "Lookup User",
    "pathTemplate": "/users",
    "method": "GET",
    "args": [
      {
        "name": "email",
        "description": "Exact email (case-insensitive)",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "phone",
        "description": "Exact phone number",
        "in": "query",
        "required": false,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "first_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "First Name"
        },
        "last_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Last Name"
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        },
        "account_type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Account Type"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "UserLookup",
      "description": "GET /v1/users — a user (staff or org-affiliated student/parent) matched by\nemail or phone. The lookup never leaks cross-org existence (404 otherwise).",
      "$defs": {
        "UserLookup": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "account_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Account Type"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "UserLookup",
          "description": "GET /v1/users — a user (staff or org-affiliated student/parent) matched by\nemail or phone. The lookup never leaks cross-org existence (404 otherwise)."
        }
      }
    }
  },
  {
    "name": "bulk_invite_users",
    "description": "Bulk Invite Users",
    "pathTemplate": "/users/bulk-invite",
    "method": "POST",
    "args": [],
    "outputSchema": {
      "properties": {
        "results": {
          "items": {
            "$ref": "#/$defs/BulkInviteResultItem"
          },
          "type": "array",
          "title": "Results",
          "default": []
        },
        "summary": {
          "$ref": "#/$defs/BulkInviteSummary"
        }
      },
      "type": "object",
      "title": "BulkInviteResponse",
      "description": "POST /v1/users/bulk-invite response — `results` is per-row (same order as the\nrequest) and `summary` rolls up the counts.",
      "$defs": {
        "BulkInviteResponse": {
          "properties": {
            "results": {
              "items": {
                "$ref": "#/$defs/BulkInviteResultItem"
              },
              "type": "array",
              "title": "Results",
              "default": []
            },
            "summary": {
              "$ref": "#/$defs/BulkInviteSummary"
            }
          },
          "type": "object",
          "title": "BulkInviteResponse",
          "description": "POST /v1/users/bulk-invite response — `results` is per-row (same order as the\nrequest) and `summary` rolls up the counts."
        },
        "BulkInviteSummary": {
          "properties": {
            "total": {
              "type": "integer",
              "title": "Total",
              "default": 0
            },
            "ok": {
              "type": "integer",
              "title": "Ok",
              "default": 0
            },
            "exists": {
              "type": "integer",
              "title": "Exists",
              "default": 0
            },
            "errors": {
              "type": "integer",
              "title": "Errors",
              "default": 0
            },
            "created": {
              "type": "integer",
              "title": "Created",
              "default": 0
            }
          },
          "type": "object",
          "title": "BulkInviteSummary",
          "description": "Roll-up counts for a bulk invite (`ok` + `exists` + `errors` == `total`)."
        },
        "BulkInviteResultItem": {
          "properties": {
            "index": {
              "type": "integer",
              "title": "Index"
            },
            "type": {
              "type": "string",
              "title": "Type"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "status": {
              "type": "string",
              "enum": [
                "ok",
                "exists",
                "error"
              ],
              "title": "Status"
            },
            "id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Id"
            },
            "created": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created"
            },
            "invited": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Invited"
            },
            "error": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Error"
            }
          },
          "type": "object",
          "required": [
            "index",
            "type",
            "status"
          ],
          "title": "BulkInviteResultItem",
          "description": "The outcome of one bulk-invite row, positionally aligned to the request `users`\narray by `index`. `status`: `ok` = newly provisioned (`created` says whether a new\nlogin was made), `exists` = already an accepted member of this org (idempotent\nno-op), `error` = could not provision (`error` carries the reason)."
        }
      }
    }
  },
  {
    "name": "update_student",
    "description": "Update Student",
    "pathTemplate": "/students/{student_id}",
    "method": "PATCH",
    "args": [
      {
        "name": "student_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "first_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "First Name"
        },
        "last_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Last Name"
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        },
        "placeholder_email": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Placeholder Email"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "parent_ids": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Parent Ids",
          "default": []
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Student",
      "$defs": {
        "Student": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "parent_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Parent Ids",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Student"
        }
      }
    }
  },
  {
    "name": "get_student",
    "description": "Get Student",
    "pathTemplate": "/students/{student_id}",
    "method": "GET",
    "args": [
      {
        "name": "student_id",
        "description": "Student UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "first_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "First Name"
        },
        "last_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Last Name"
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        },
        "placeholder_email": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Placeholder Email"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "parent_ids": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Parent Ids",
          "default": []
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Student",
      "$defs": {
        "Student": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "parent_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Parent Ids",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Student"
        }
      }
    }
  },
  {
    "name": "link_parent_student",
    "description": "Link Parent Student",
    "pathTemplate": "/parents/{parent_id}/link-student",
    "method": "POST",
    "args": [
      {
        "name": "parent_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "parent_id": {
          "type": "string",
          "title": "Parent Id"
        },
        "student_id": {
          "type": "string",
          "title": "Student Id"
        },
        "linked_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Linked At"
        }
      },
      "type": "object",
      "required": [
        "parent_id",
        "student_id"
      ],
      "title": "ParentStudentLink",
      "description": "A parent<->student link (parent_student_links).",
      "$defs": {
        "ParentStudentLink": {
          "properties": {
            "parent_id": {
              "type": "string",
              "title": "Parent Id"
            },
            "student_id": {
              "type": "string",
              "title": "Student Id"
            },
            "linked_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Linked At"
            }
          },
          "type": "object",
          "required": [
            "parent_id",
            "student_id"
          ],
          "title": "ParentStudentLink",
          "description": "A parent<->student link (parent_student_links)."
        }
      }
    }
  },
  {
    "name": "cancel_session",
    "description": "Cancel Session",
    "pathTemplate": "/sessions/{session_id}/cancel",
    "method": "POST",
    "args": [
      {
        "name": "session_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Title"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "starts_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Starts At"
        },
        "ends_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Ends At"
        },
        "duration_minutes": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Duration Minutes"
        },
        "tutor_pay_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Pay Rate Cents"
        },
        "student_rate_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Rate Cents"
        },
        "amount_owed_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Owed Cents"
        },
        "mode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Mode"
        },
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "completed_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Completed At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Session",
      "$defs": {
        "Session": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "starts_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Starts At"
            },
            "ends_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Ends At"
            },
            "duration_minutes": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Duration Minutes"
            },
            "tutor_pay_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Pay Rate Cents"
            },
            "student_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Rate Cents"
            },
            "amount_owed_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Owed Cents"
            },
            "mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Mode"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "completed_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Completed At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Session"
        }
      }
    }
  },
  {
    "name": "list_tutors",
    "description": "List Tutors",
    "pathTemplate": "/tutors",
    "method": "GET",
    "args": [
      {
        "name": "is_published",
        "description": "Filter by public-listing state. `true` returns only publicly-listed tutors (what a public tutor grid wants); a member with no tutor profile counts as not-published and is excluded. `false` returns the non-published remainder. Omit to return all staff.",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Tutor"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Tutor]",
      "$defs": {
        "Page_Tutor_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Tutor"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Tutor]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Tutor": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "full_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Full Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "role": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Role"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "bio": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Bio"
            },
            "teaching_mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Teaching Mode"
            },
            "is_published": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Published"
            },
            "avatar_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Avatar Url"
            },
            "handle": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Handle"
            },
            "subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Subjects"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "home_suburb": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Suburb"
            },
            "home_postcode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Postcode"
            },
            "home_lat": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lat"
            },
            "home_lng": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lng"
            },
            "service_postcodes": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Service Postcodes",
              "default": []
            },
            "serves_all_areas": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Serves All Areas"
            },
            "max_travel_km": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Max Travel Km"
            },
            "in_person_arrangements": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "In Person Arrangements",
              "default": []
            },
            "tutor_subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tutor Subjects",
              "default": []
            },
            "specialisations": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Specialisations"
            },
            "distance_km": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Distance Km"
            },
            "covers_area": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Covers Area"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Tutor"
        }
      }
    }
  },
  {
    "name": "create_tutor",
    "description": "Create Tutor",
    "pathTemplate": "/tutors",
    "method": "POST",
    "args": []
  },
  {
    "name": "get_tutor",
    "description": "Get Tutor",
    "pathTemplate": "/tutors/{tutor_id}",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Tutor UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "first_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "First Name"
        },
        "last_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Last Name"
        },
        "full_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Full Name"
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        },
        "placeholder_email": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Placeholder Email"
        },
        "role": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Role"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "bio": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Bio"
        },
        "teaching_mode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Teaching Mode"
        },
        "is_published": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Is Published"
        },
        "avatar_url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Avatar Url"
        },
        "handle": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Handle"
        },
        "subjects": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Subjects"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "home_suburb": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Suburb"
        },
        "home_postcode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Postcode"
        },
        "home_lat": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Lat"
        },
        "home_lng": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Lng"
        },
        "service_postcodes": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Service Postcodes",
          "default": []
        },
        "serves_all_areas": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Serves All Areas"
        },
        "max_travel_km": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Max Travel Km"
        },
        "in_person_arrangements": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "In Person Arrangements",
          "default": []
        },
        "tutor_subjects": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Tutor Subjects",
          "default": []
        },
        "specialisations": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Specialisations"
        },
        "distance_km": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Distance Km"
        },
        "covers_area": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Covers Area"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Tutor",
      "$defs": {
        "Tutor": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "full_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Full Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "role": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Role"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "bio": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Bio"
            },
            "teaching_mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Teaching Mode"
            },
            "is_published": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Published"
            },
            "avatar_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Avatar Url"
            },
            "handle": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Handle"
            },
            "subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Subjects"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "home_suburb": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Suburb"
            },
            "home_postcode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Postcode"
            },
            "home_lat": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lat"
            },
            "home_lng": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lng"
            },
            "service_postcodes": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Service Postcodes",
              "default": []
            },
            "serves_all_areas": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Serves All Areas"
            },
            "max_travel_km": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Max Travel Km"
            },
            "in_person_arrangements": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "In Person Arrangements",
              "default": []
            },
            "tutor_subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tutor Subjects",
              "default": []
            },
            "specialisations": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Specialisations"
            },
            "distance_km": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Distance Km"
            },
            "covers_area": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Covers Area"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Tutor"
        }
      }
    }
  },
  {
    "name": "update_tutor",
    "description": "Update Tutor",
    "pathTemplate": "/tutors/{tutor_id}",
    "method": "PUT",
    "args": [
      {
        "name": "tutor_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "first_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "First Name"
        },
        "last_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Last Name"
        },
        "full_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Full Name"
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        },
        "placeholder_email": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Placeholder Email"
        },
        "role": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Role"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "bio": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Bio"
        },
        "teaching_mode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Teaching Mode"
        },
        "is_published": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Is Published"
        },
        "avatar_url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Avatar Url"
        },
        "handle": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Handle"
        },
        "subjects": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Subjects"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "home_suburb": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Suburb"
        },
        "home_postcode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Postcode"
        },
        "home_lat": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Lat"
        },
        "home_lng": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Home Lng"
        },
        "service_postcodes": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Service Postcodes",
          "default": []
        },
        "serves_all_areas": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Serves All Areas"
        },
        "max_travel_km": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Max Travel Km"
        },
        "in_person_arrangements": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "In Person Arrangements",
          "default": []
        },
        "tutor_subjects": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Tutor Subjects",
          "default": []
        },
        "specialisations": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Specialisations"
        },
        "distance_km": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Distance Km"
        },
        "covers_area": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Covers Area"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Tutor",
      "$defs": {
        "Tutor": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "full_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Full Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "role": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Role"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "bio": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Bio"
            },
            "teaching_mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Teaching Mode"
            },
            "is_published": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Published"
            },
            "avatar_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Avatar Url"
            },
            "handle": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Handle"
            },
            "subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Subjects"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "home_suburb": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Suburb"
            },
            "home_postcode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Postcode"
            },
            "home_lat": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lat"
            },
            "home_lng": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lng"
            },
            "service_postcodes": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Service Postcodes",
              "default": []
            },
            "serves_all_areas": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Serves All Areas"
            },
            "max_travel_km": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Max Travel Km"
            },
            "in_person_arrangements": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "In Person Arrangements",
              "default": []
            },
            "tutor_subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tutor Subjects",
              "default": []
            },
            "specialisations": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Specialisations"
            },
            "distance_km": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Distance Km"
            },
            "covers_area": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Covers Area"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Tutor"
        }
      }
    }
  },
  {
    "name": "tutor_available_slots",
    "description": "Tutor Available Slots",
    "pathTemplate": "/tutors/{tutor_id}/available-slots",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Tutor UUID",
        "in": "path",
        "required": true,
        "type": "string"
      },
      {
        "name": "from",
        "description": "Window start, ISO date e.g. 2026-07-01",
        "in": "query",
        "required": true,
        "type": "string"
      },
      {
        "name": "to",
        "description": "Window end, ISO date e.g. 2026-07-07",
        "in": "query",
        "required": true,
        "type": "string"
      },
      {
        "name": "duration",
        "description": "Slot length in minutes (default 60)",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "tutor_id": {
          "type": "string",
          "title": "Tutor Id"
        },
        "duration_minutes": {
          "type": "integer",
          "title": "Duration Minutes"
        },
        "from_date": {
          "type": "string",
          "title": "From Date"
        },
        "to_date": {
          "type": "string",
          "title": "To Date"
        },
        "slots": {
          "items": {
            "$ref": "#/$defs/AvailableSlot"
          },
          "type": "array",
          "title": "Slots",
          "default": []
        }
      },
      "type": "object",
      "required": [
        "tutor_id",
        "duration_minutes",
        "from_date",
        "to_date"
      ],
      "title": "AvailableSlots",
      "description": "GET /v1/tutors/{tutor_id}/available-slots — free slots in the window, computed\nby subtracting scheduled sessions from the tutor's weekly availability rules.",
      "$defs": {
        "AvailableSlots": {
          "properties": {
            "tutor_id": {
              "type": "string",
              "title": "Tutor Id"
            },
            "duration_minutes": {
              "type": "integer",
              "title": "Duration Minutes"
            },
            "from_date": {
              "type": "string",
              "title": "From Date"
            },
            "to_date": {
              "type": "string",
              "title": "To Date"
            },
            "slots": {
              "items": {
                "$ref": "#/$defs/AvailableSlot"
              },
              "type": "array",
              "title": "Slots",
              "default": []
            }
          },
          "type": "object",
          "required": [
            "tutor_id",
            "duration_minutes",
            "from_date",
            "to_date"
          ],
          "title": "AvailableSlots",
          "description": "GET /v1/tutors/{tutor_id}/available-slots — free slots in the window, computed\nby subtracting scheduled sessions from the tutor's weekly availability rules."
        },
        "AvailableSlot": {
          "properties": {
            "starts_at": {
              "type": "string",
              "title": "Starts At"
            },
            "ends_at": {
              "type": "string",
              "title": "Ends At"
            }
          },
          "type": "object",
          "required": [
            "starts_at",
            "ends_at"
          ],
          "title": "AvailableSlot",
          "description": "One free bookable time slot from GET /v1/tutors/{id}/available-slots."
        }
      }
    }
  },
  {
    "name": "offboard_student",
    "description": "Offboard Student",
    "pathTemplate": "/students/{student_id}/offboard",
    "method": "POST",
    "args": [
      {
        "name": "student_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "success": {
          "type": "boolean",
          "title": "Success",
          "default": true
        },
        "scope": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Scope"
        },
        "archived_relationships": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Archived Relationships"
        },
        "classrooms_removed": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Classrooms Removed"
        },
        "coverage_revoked": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Coverage Revoked"
        },
        "reason": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Reason"
        }
      },
      "type": "object",
      "title": "OffboardResult",
      "description": "Result of POST /v1/students/{id}/offboard — moves a student to the soft,\nread-only 'alumni' tier. The student keeps their account and their own past\nwork, loses org-provided premium/AI access, and can request to resume. Counts\nreflect what the bundling RPC changed; `reason` is set only on failure.",
      "$defs": {
        "OffboardResult": {
          "properties": {
            "success": {
              "type": "boolean",
              "title": "Success",
              "default": true
            },
            "scope": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scope"
            },
            "archived_relationships": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Archived Relationships"
            },
            "classrooms_removed": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classrooms Removed"
            },
            "coverage_revoked": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Coverage Revoked"
            },
            "reason": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Reason"
            }
          },
          "type": "object",
          "title": "OffboardResult",
          "description": "Result of POST /v1/students/{id}/offboard — moves a student to the soft,\nread-only 'alumni' tier. The student keeps their account and their own past\nwork, loses org-provided premium/AI access, and can request to resume. Counts\nreflect what the bundling RPC changed; `reason` is set only on failure."
        }
      }
    }
  },
  {
    "name": "tutor_earnings",
    "description": "Tutor Earnings",
    "pathTemplate": "/tutors/{tutor_id}/earnings",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Tutor UUID",
        "in": "path",
        "required": true,
        "type": "string"
      },
      {
        "name": "from",
        "description": "Session starts_at >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "Session starts_at <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "tutor_id": {
          "type": "string",
          "title": "Tutor Id"
        },
        "sessions_count": {
          "type": "integer",
          "title": "Sessions Count",
          "default": 0
        },
        "period_start": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Period Start"
        },
        "period_end": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Period End"
        },
        "earned_cents": {
          "type": "integer",
          "title": "Earned Cents",
          "default": 0
        },
        "paid_out_cents": {
          "type": "integer",
          "title": "Paid Out Cents",
          "default": 0
        },
        "unpaid_cents": {
          "type": "integer",
          "title": "Unpaid Cents",
          "default": 0
        }
      },
      "type": "object",
      "required": [
        "tutor_id"
      ],
      "title": "TutorEarnings",
      "$defs": {
        "TutorEarnings": {
          "properties": {
            "tutor_id": {
              "type": "string",
              "title": "Tutor Id"
            },
            "sessions_count": {
              "type": "integer",
              "title": "Sessions Count",
              "default": 0
            },
            "period_start": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Period Start"
            },
            "period_end": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Period End"
            },
            "earned_cents": {
              "type": "integer",
              "title": "Earned Cents",
              "default": 0
            },
            "paid_out_cents": {
              "type": "integer",
              "title": "Paid Out Cents",
              "default": 0
            },
            "unpaid_cents": {
              "type": "integer",
              "title": "Unpaid Cents",
              "default": 0
            }
          },
          "type": "object",
          "required": [
            "tutor_id"
          ],
          "title": "TutorEarnings"
        }
      }
    }
  },
  {
    "name": "list_payments",
    "description": "List Payments",
    "pathTemplate": "/payments",
    "method": "GET",
    "args": [
      {
        "name": "student_id",
        "description": "Filter by student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "tutor_id",
        "description": "Filter by tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "status",
        "description": "succeeded, pending, refunded, failed, ...",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "created_at >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "created_at <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Payment"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Payment]",
      "$defs": {
        "Page_Payment_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Payment"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Payment]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Payment": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "refund_amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Refund Amount Cents"
            },
            "currency": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Currency"
            },
            "payment_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Payment Type"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "stripe_payment_intent_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Stripe Payment Intent Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Payment"
        }
      }
    }
  },
  {
    "name": "create_payment",
    "description": "Create Payment",
    "pathTemplate": "/payments",
    "method": "POST",
    "args": []
  },
  {
    "name": "get_payment",
    "description": "Get Payment",
    "pathTemplate": "/payments/{payment_id}",
    "method": "GET",
    "args": [
      {
        "name": "payment_id",
        "description": "Payment UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "session_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Session Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "amount_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Cents"
        },
        "refund_amount_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Refund Amount Cents"
        },
        "currency": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Currency"
        },
        "payment_type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Payment Type"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "stripe_payment_intent_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Stripe Payment Intent Id"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Payment",
      "$defs": {
        "Payment": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "refund_amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Refund Amount Cents"
            },
            "currency": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Currency"
            },
            "payment_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Payment Type"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "stripe_payment_intent_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Stripe Payment Intent Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Payment"
        }
      }
    }
  },
  {
    "name": "list_invoices",
    "description": "List Invoices",
    "pathTemplate": "/invoices",
    "method": "GET",
    "args": [
      {
        "name": "student_id",
        "description": "Filter by student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "status",
        "description": "draft, open, paid, void, uncollectible",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "created_at >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "created_at <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Invoice"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Invoice]",
      "$defs": {
        "Page_Invoice_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Invoice"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Invoice]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Invoice": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "invoice_number": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Invoice Number"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "amount_due_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Due Cents"
            },
            "amount_paid_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Paid Cents"
            },
            "currency": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Currency"
            },
            "due_date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Due Date"
            },
            "sent_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Sent At"
            },
            "paid_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Paid At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "line_items": {
              "items": {
                "$ref": "#/$defs/LineItem"
              },
              "type": "array",
              "title": "Line Items",
              "default": []
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Invoice"
        },
        "LineItem": {
          "properties": {
            "description": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Description"
            },
            "quantity": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Quantity"
            },
            "unit_amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Unit Amount Cents"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "item_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Item Type"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            }
          },
          "type": "object",
          "title": "LineItem"
        }
      }
    }
  },
  {
    "name": "get_invoice",
    "description": "Get Invoice",
    "pathTemplate": "/invoices/{invoice_id}",
    "method": "GET",
    "args": [
      {
        "name": "invoice_id",
        "description": "Invoice UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "invoice_number": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Invoice Number"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "amount_due_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Due Cents"
        },
        "amount_paid_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Paid Cents"
        },
        "currency": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Currency"
        },
        "due_date": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Due Date"
        },
        "sent_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Sent At"
        },
        "paid_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Paid At"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "line_items": {
          "items": {
            "$ref": "#/$defs/LineItem"
          },
          "type": "array",
          "title": "Line Items",
          "default": []
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Invoice",
      "$defs": {
        "Invoice": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "invoice_number": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Invoice Number"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "amount_due_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Due Cents"
            },
            "amount_paid_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Paid Cents"
            },
            "currency": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Currency"
            },
            "due_date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Due Date"
            },
            "sent_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Sent At"
            },
            "paid_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Paid At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "line_items": {
              "items": {
                "$ref": "#/$defs/LineItem"
              },
              "type": "array",
              "title": "Line Items",
              "default": []
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Invoice"
        },
        "LineItem": {
          "properties": {
            "description": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Description"
            },
            "quantity": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Quantity"
            },
            "unit_amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Unit Amount Cents"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "item_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Item Type"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            }
          },
          "type": "object",
          "title": "LineItem"
        }
      }
    }
  },
  {
    "name": "list_students",
    "description": "List Students",
    "pathTemplate": "/students",
    "method": "GET",
    "args": [
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Student"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Student]",
      "$defs": {
        "Page_Student_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Student"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Student]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Student": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "parent_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Parent Ids",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Student"
        }
      }
    }
  },
  {
    "name": "create_student",
    "description": "Create Student",
    "pathTemplate": "/students",
    "method": "POST",
    "args": []
  },
  {
    "name": "list_parents",
    "description": "List Parents",
    "pathTemplate": "/parents",
    "method": "GET",
    "args": [
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Parent"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Parent]",
      "$defs": {
        "Page_Parent_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Parent"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Parent]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Parent": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "student_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Student Ids",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Parent"
        }
      }
    }
  },
  {
    "name": "create_parent",
    "description": "Create Parent",
    "pathTemplate": "/parents",
    "method": "POST",
    "args": []
  },
  {
    "name": "get_parent",
    "description": "Get Parent",
    "pathTemplate": "/parents/{parent_id}",
    "method": "GET",
    "args": [
      {
        "name": "parent_id",
        "description": "Parent UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "first_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "First Name"
        },
        "last_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Last Name"
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        },
        "placeholder_email": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Placeholder Email"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "student_ids": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Student Ids",
          "default": []
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Parent",
      "$defs": {
        "Parent": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "student_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Student Ids",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Parent"
        }
      }
    }
  },
  {
    "name": "parent_balance",
    "description": "Parent Balance",
    "pathTemplate": "/parents/{parent_id}/balance",
    "method": "GET",
    "args": [
      {
        "name": "parent_id",
        "description": "Parent UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "parent_id": {
          "type": "string",
          "title": "Parent Id"
        },
        "total_invoiced_cents": {
          "type": "integer",
          "title": "Total Invoiced Cents",
          "default": 0
        },
        "total_paid_cents": {
          "type": "integer",
          "title": "Total Paid Cents",
          "default": 0
        },
        "outstanding_cents": {
          "type": "integer",
          "title": "Outstanding Cents",
          "default": 0
        },
        "open_invoices_count": {
          "type": "integer",
          "title": "Open Invoices Count",
          "default": 0
        }
      },
      "type": "object",
      "required": [
        "parent_id"
      ],
      "title": "ParentBalance",
      "$defs": {
        "ParentBalance": {
          "properties": {
            "parent_id": {
              "type": "string",
              "title": "Parent Id"
            },
            "total_invoiced_cents": {
              "type": "integer",
              "title": "Total Invoiced Cents",
              "default": 0
            },
            "total_paid_cents": {
              "type": "integer",
              "title": "Total Paid Cents",
              "default": 0
            },
            "outstanding_cents": {
              "type": "integer",
              "title": "Outstanding Cents",
              "default": 0
            },
            "open_invoices_count": {
              "type": "integer",
              "title": "Open Invoices Count",
              "default": 0
            }
          },
          "type": "object",
          "required": [
            "parent_id"
          ],
          "title": "ParentBalance"
        }
      }
    }
  },
  {
    "name": "list_subjects",
    "description": "List Subjects",
    "pathTemplate": "/subjects",
    "method": "GET",
    "args": [],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Subject"
          },
          "type": "array",
          "title": "Data"
        }
      },
      "type": "object",
      "required": [
        "data"
      ],
      "title": "SubjectList",
      "description": "`/v1/subjects` returns just `{ \"data\": [...] }` (no pagination).",
      "$defs": {
        "SubjectList": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Subject"
              },
              "type": "array",
              "title": "Data"
            }
          },
          "type": "object",
          "required": [
            "data"
          ],
          "title": "SubjectList",
          "description": "`/v1/subjects` returns just `{ \"data\": [...] }` (no pagination)."
        },
        "Subject": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Subject"
        }
      }
    }
  },
  {
    "name": "list_lesson_plans",
    "description": "List Lesson Plans",
    "pathTemplate": "/lesson-plans",
    "method": "GET",
    "args": [
      {
        "name": "status",
        "description": "draft, ready, delivered",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "scope",
        "description": "classroom, group, student",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "student_id",
        "description": "Filter by target student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/LessonPlan"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[LessonPlan]",
      "$defs": {
        "Page_LessonPlan_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/LessonPlan"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[LessonPlan]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "LessonPlan": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "created_by": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created By"
            },
            "scope": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scope"
            },
            "classroom_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classroom Id"
            },
            "group_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Group Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "math_level_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Math Level Id"
            },
            "curriculum_level_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Curriculum Level Ids",
              "default": []
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "plan_data": {
              "$ref": "#/$defs/PlanData"
            },
            "scheduled_for": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scheduled For"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "LessonPlan"
        },
        "PlanData": {
          "properties": {},
          "additionalProperties": true,
          "type": "object",
          "title": "PlanData",
          "description": "Free-form lesson-plan body (learning_objectives, lesson_hook, activities,\nworked_examples, exit_ticket, notes, …). Arbitrary keys are preserved. Shared\nby the read + write lesson-plan models so the OpenAPI has a single `PlanData`\ncomponent — SDK generators choke on duplicate inline object schemas."
        }
      }
    }
  },
  {
    "name": "create_lesson_plan",
    "description": "Create Lesson Plan",
    "pathTemplate": "/lesson-plans",
    "method": "POST",
    "args": []
  },
  {
    "name": "update_lesson_plan",
    "description": "Update Lesson Plan",
    "pathTemplate": "/lesson-plans/{plan_id}",
    "method": "PUT",
    "args": [
      {
        "name": "plan_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "created_by": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created By"
        },
        "scope": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Scope"
        },
        "classroom_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Classroom Id"
        },
        "group_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Group Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "session_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Session Id"
        },
        "math_level_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Math Level Id"
        },
        "curriculum_level_ids": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Curriculum Level Ids",
          "default": []
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Title"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "plan_data": {
          "$ref": "#/$defs/PlanData"
        },
        "scheduled_for": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Scheduled For"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Updated At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "LessonPlan",
      "$defs": {
        "LessonPlan": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "created_by": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created By"
            },
            "scope": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scope"
            },
            "classroom_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classroom Id"
            },
            "group_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Group Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "math_level_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Math Level Id"
            },
            "curriculum_level_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Curriculum Level Ids",
              "default": []
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "plan_data": {
              "$ref": "#/$defs/PlanData"
            },
            "scheduled_for": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scheduled For"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "LessonPlan"
        },
        "PlanData": {
          "properties": {},
          "additionalProperties": true,
          "type": "object",
          "title": "PlanData",
          "description": "Free-form lesson-plan body (learning_objectives, lesson_hook, activities,\nworked_examples, exit_ticket, notes, …). Arbitrary keys are preserved. Shared\nby the read + write lesson-plan models so the OpenAPI has a single `PlanData`\ncomponent — SDK generators choke on duplicate inline object schemas."
        }
      }
    }
  },
  {
    "name": "list_homework",
    "description": "List Homework",
    "pathTemplate": "/homework",
    "method": "GET",
    "args": [
      {
        "name": "homework_type",
        "description": "text or exam",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "scope",
        "description": "classroom, group, student",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "student_id",
        "description": "Filter by assigned student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Homework"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Homework]",
      "$defs": {
        "Page_Homework_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Homework"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Homework]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Homework": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "assigned_by": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Assigned By"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "description": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Description"
            },
            "homework_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Homework Type"
            },
            "scope": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scope"
            },
            "classroom_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classroom Id"
            },
            "group_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Group Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "due_date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Due Date"
            },
            "files": {
              "items": {},
              "type": "array",
              "title": "Files",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Homework"
        }
      }
    }
  },
  {
    "name": "list_files",
    "description": "List Files",
    "pathTemplate": "/files",
    "method": "GET",
    "args": [
      {
        "name": "resource_type",
        "description": "file, link, video, google_drive",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "scope",
        "description": "private, classroom, group, personal, org",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Resource"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Resource]",
      "$defs": {
        "Page_Resource_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Resource"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Resource]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Resource": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "owner_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Owner Id"
            },
            "scope": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scope"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "resource_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Resource Type"
            },
            "file_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "File Url"
            },
            "link_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Link Url"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "classroom_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classroom Id"
            },
            "group_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Group Id"
            },
            "folder_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Folder Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Resource"
        }
      }
    }
  },
  {
    "name": "list_questions",
    "description": "List Questions",
    "pathTemplate": "/questions",
    "method": "GET",
    "args": [
      {
        "name": "source",
        "description": "Filter by source. A catalogue source (VCAA, EquateIt, Bank) returns only that catalogue; 'own' returns only this org's authored questions. Omit to get the full catalogue PLUS this org's own questions.",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "topic",
        "description": "Filter by topic name",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "curriculum_level_id",
        "description": "Only questions with a part tagged to this curriculum level",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Question"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Question]",
      "$defs": {
        "Page_Question_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Question"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Question]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Question": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "source": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Source"
            },
            "topic": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Topic"
            },
            "tags": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tags",
              "default": []
            },
            "intro_text": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Intro Text"
            },
            "is_official_vce": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Official Vce"
            },
            "is_current_study_design": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Current Study Design"
            },
            "question_number": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Question Number"
            },
            "total_marks": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total Marks"
            },
            "owned_by_org": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Owned By Org"
            },
            "author_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Author Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Question"
        }
      }
    }
  },
  {
    "name": "create_question",
    "description": "Create Question",
    "pathTemplate": "/questions",
    "method": "POST",
    "args": []
  },
  {
    "name": "list_student_groups",
    "description": "List Student Groups",
    "pathTemplate": "/student-groups",
    "method": "GET",
    "args": [
      {
        "name": "subject_id",
        "description": "Filter by subject id, e.g. methods_34",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "classroom_id",
        "description": "Filter by parent classroom UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/StudentGroup"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[StudentGroup]",
      "$defs": {
        "Page_StudentGroup_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/StudentGroup"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[StudentGroup]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "StudentGroup": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "classroom_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classroom Id"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "rate_per_student_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Rate Per Student Cents"
            },
            "color": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Color"
            },
            "avatar_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Avatar Url"
            },
            "student_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Student Ids",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "StudentGroup"
        }
      }
    }
  },
  {
    "name": "get_student_group",
    "description": "Get Student Group",
    "pathTemplate": "/student-groups/{group_id}",
    "method": "GET",
    "args": [
      {
        "name": "group_id",
        "description": "Student group UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Name"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "classroom_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Classroom Id"
        },
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "rate_per_student_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Rate Per Student Cents"
        },
        "color": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Color"
        },
        "avatar_url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Avatar Url"
        },
        "student_ids": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Student Ids",
          "default": []
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Updated At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "StudentGroup",
      "$defs": {
        "StudentGroup": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "classroom_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classroom Id"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "rate_per_student_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Rate Per Student Cents"
            },
            "color": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Color"
            },
            "avatar_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Avatar Url"
            },
            "student_ids": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Student Ids",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "StudentGroup"
        }
      }
    }
  },
  {
    "name": "list_results",
    "description": "List Results",
    "pathTemplate": "/results",
    "method": "GET",
    "args": [
      {
        "name": "student_id",
        "description": "Filter by student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "status",
        "description": "not_started, in_progress, submitted, completed",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "mode",
        "description": "vce_exam, topic_practice, sac, homework",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "completed_at >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "completed_at <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Result"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Result]",
      "$defs": {
        "Page_Result_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Result"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Result]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Result": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "grade": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Grade"
            },
            "mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Mode"
            },
            "vce_exam_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Vce Exam Id"
            },
            "curriculum_level_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Curriculum Level Id"
            },
            "homework_assignment_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Homework Assignment Id"
            },
            "started_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Started At"
            },
            "completed_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Completed At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Result"
        }
      }
    }
  },
  {
    "name": "get_result",
    "description": "Get Result",
    "pathTemplate": "/results/{result_id}",
    "method": "GET",
    "args": [
      {
        "name": "result_id",
        "description": "Result UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "grade": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "type": "null"
            }
          ],
          "title": "Grade"
        },
        "mode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Mode"
        },
        "vce_exam_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Vce Exam Id"
        },
        "curriculum_level_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Curriculum Level Id"
        },
        "homework_assignment_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Homework Assignment Id"
        },
        "started_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Started At"
        },
        "completed_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Completed At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Result",
      "$defs": {
        "Result": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "grade": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Grade"
            },
            "mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Mode"
            },
            "vce_exam_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Vce Exam Id"
            },
            "curriculum_level_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Curriculum Level Id"
            },
            "homework_assignment_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Homework Assignment Id"
            },
            "started_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Started At"
            },
            "completed_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Completed At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Result"
        }
      }
    }
  },
  {
    "name": "list_session_feedback",
    "description": "List Session Feedback",
    "pathTemplate": "/session-feedback",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Filter by tutor user UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "public_only",
        "description": "Only feedback the author made public",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "anonymize",
        "description": "Return reviewer initials instead of full names",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/SessionFeedback"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[SessionFeedback]",
      "$defs": {
        "Page_SessionFeedback_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/SessionFeedback"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[SessionFeedback]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "SessionFeedback": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "rating": {
              "type": "integer",
              "title": "Rating"
            },
            "recommend": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Recommend"
            },
            "prepared": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Prepared"
            },
            "positive_tags": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Positive Tags",
              "default": []
            },
            "improve_tags": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Improve Tags",
              "default": []
            },
            "comment": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Comment"
            },
            "is_public": {
              "type": "boolean",
              "title": "Is Public",
              "default": false
            },
            "reviewer_role": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Reviewer Role"
            },
            "reviewer_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Reviewer Name"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id",
            "rating"
          ],
          "title": "SessionFeedback"
        }
      }
    }
  },
  {
    "name": "list_tutor_reviews",
    "description": "List Tutor Reviews",
    "pathTemplate": "/tutors/{tutor_id}/reviews",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Tutor UUID",
        "in": "path",
        "required": true,
        "type": "string"
      },
      {
        "name": "anonymize",
        "description": "Return reviewer initials instead of full names",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/TutorReview"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[TutorReview]",
      "$defs": {
        "Page_TutorReview_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/TutorReview"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[TutorReview]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "TutorReview": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "rating": {
              "type": "integer",
              "title": "Rating"
            },
            "comment": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Comment"
            },
            "reviewer_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Reviewer Name"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id",
            "rating"
          ],
          "title": "TutorReview",
          "description": "Public-facing subset: a feedback record whose author chose to publish it."
        }
      }
    }
  },
  {
    "name": "list_classrooms",
    "description": "List Classrooms",
    "pathTemplate": "/classrooms",
    "method": "GET",
    "args": [
      {
        "name": "subject_id",
        "description": "Filter by subject id, e.g. methods_34",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Classroom"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Classroom]",
      "$defs": {
        "Page_Classroom_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Classroom"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Classroom]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Classroom": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "join_code": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Join Code"
            },
            "price_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Price Cents"
            },
            "billing_interval": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Billing Interval"
            },
            "group_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Group Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Classroom"
        }
      }
    }
  },
  {
    "name": "create_classroom",
    "description": "Create Classroom",
    "pathTemplate": "/classrooms",
    "method": "POST",
    "args": []
  },
  {
    "name": "get_classroom",
    "description": "Get Classroom",
    "pathTemplate": "/classrooms/{classroom_id}",
    "method": "GET",
    "args": [
      {
        "name": "classroom_id",
        "description": "Classroom UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Name"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "join_code": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Join Code"
        },
        "price_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Price Cents"
        },
        "billing_interval": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Billing Interval"
        },
        "group_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Group Id"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Updated At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Classroom",
      "$defs": {
        "Classroom": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "join_code": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Join Code"
            },
            "price_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Price Cents"
            },
            "billing_interval": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Billing Interval"
            },
            "group_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Group Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Classroom"
        }
      }
    }
  },
  {
    "name": "create_group",
    "description": "Create Group",
    "pathTemplate": "/groups",
    "method": "POST",
    "args": []
  },
  {
    "name": "add_student_to_classroom",
    "description": "Add Student To Classroom",
    "pathTemplate": "/classrooms/{classroom_id}/students",
    "method": "POST",
    "args": [
      {
        "name": "classroom_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "member_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Member Id"
        }
      },
      "type": "object",
      "title": "MemberAddResult",
      "$defs": {
        "MemberAddResult": {
          "properties": {
            "member_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Member Id"
            }
          },
          "type": "object",
          "title": "MemberAddResult"
        }
      }
    }
  },
  {
    "name": "add_tutor_to_classroom",
    "description": "Add Tutor To Classroom",
    "pathTemplate": "/classrooms/{classroom_id}/tutors",
    "method": "POST",
    "args": [
      {
        "name": "classroom_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "member_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Member Id"
        }
      },
      "type": "object",
      "title": "MemberAddResult",
      "$defs": {
        "MemberAddResult": {
          "properties": {
            "member_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Member Id"
            }
          },
          "type": "object",
          "title": "MemberAddResult"
        }
      }
    }
  },
  {
    "name": "add_student_to_group",
    "description": "Add Student To Group",
    "pathTemplate": "/groups/{group_id}/students",
    "method": "POST",
    "args": [
      {
        "name": "group_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "member_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Member Id"
        }
      },
      "type": "object",
      "title": "MemberAddResult",
      "$defs": {
        "MemberAddResult": {
          "properties": {
            "member_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Member Id"
            }
          },
          "type": "object",
          "title": "MemberAddResult"
        }
      }
    }
  },
  {
    "name": "add_tutor_to_group",
    "description": "Add Tutor To Group",
    "pathTemplate": "/groups/{group_id}/tutors",
    "method": "POST",
    "args": [
      {
        "name": "group_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "member_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Member Id"
        }
      },
      "type": "object",
      "title": "MemberAddResult",
      "$defs": {
        "MemberAddResult": {
          "properties": {
            "member_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Member Id"
            }
          },
          "type": "object",
          "title": "MemberAddResult"
        }
      }
    }
  },
  {
    "name": "list_mileage",
    "description": "List Mileage",
    "pathTemplate": "/mileage",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Filter by tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "status",
        "description": "logged, approved, rejected, reimbursed",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "trip_date >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "trip_date <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/MileageTrip"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[MileageTrip]",
      "$defs": {
        "Page_MileageTrip_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/MileageTrip"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[MileageTrip]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "MileageTrip": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "trip_date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Trip Date"
            },
            "destination": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Destination"
            },
            "distance_km": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Distance Km"
            },
            "duration_minutes": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Duration Minutes"
            },
            "vehicle": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Vehicle"
            },
            "tracking_method": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tracking Method"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Rate Cents"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "approved_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Approved At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "MileageTrip"
        }
      }
    }
  },
  {
    "name": "list_expenses",
    "description": "List Expenses",
    "pathTemplate": "/expenses",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Filter by tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "status",
        "description": "logged, approved, rejected, reimbursed",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "category",
        "description": "parking, tolls, materials, training, other",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "expense_date >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "expense_date <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/ExpenseClaim"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[ExpenseClaim]",
      "$defs": {
        "Page_ExpenseClaim_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/ExpenseClaim"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[ExpenseClaim]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "ExpenseClaim": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "expense_date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Expense Date"
            },
            "category": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Category"
            },
            "vendor": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Vendor"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "approved_amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Approved Amount Cents"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "receipt_photo_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Receipt Photo Url"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "approved_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Approved At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "ExpenseClaim"
        }
      }
    }
  },
  {
    "name": "list_adjustments",
    "description": "List Adjustments",
    "pathTemplate": "/adjustments",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Filter by tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "include_voided",
        "description": "Include voided adjustments (default false)",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "period_start >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "period_start <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Adjustment"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Adjustment]",
      "$defs": {
        "Page_Adjustment_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Adjustment"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Adjustment]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Adjustment": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "period_start": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Period Start"
            },
            "period_end": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Period End"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "note": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Note"
            },
            "voided": {
              "type": "boolean",
              "title": "Voided",
              "default": false
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Adjustment"
        }
      }
    }
  },
  {
    "name": "create_adjustment",
    "description": "Create Adjustment",
    "pathTemplate": "/adjustments",
    "method": "POST",
    "args": []
  },
  {
    "name": "create_invite",
    "description": "Create Invite",
    "pathTemplate": "/invites",
    "method": "POST",
    "args": []
  },
  {
    "name": "send_student_invite",
    "description": "Send Student Invite",
    "pathTemplate": "/students/{student_id}/send-invite",
    "method": "POST",
    "args": [
      {
        "name": "student_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "sent": {
          "type": "boolean",
          "title": "Sent",
          "default": false
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        }
      },
      "type": "object",
      "title": "AccountInviteSent",
      "description": "Result of POST /v1/students|parents/{id}/send-invite. `sent` is true when a set-password\nemail was dispatched; `email` is the address it went to.",
      "$defs": {
        "AccountInviteSent": {
          "properties": {
            "sent": {
              "type": "boolean",
              "title": "Sent",
              "default": false
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            }
          },
          "type": "object",
          "title": "AccountInviteSent",
          "description": "Result of POST /v1/students|parents/{id}/send-invite. `sent` is true when a set-password\nemail was dispatched; `email` is the address it went to."
        }
      }
    }
  },
  {
    "name": "send_parent_invite",
    "description": "Send Parent Invite",
    "pathTemplate": "/parents/{parent_id}/send-invite",
    "method": "POST",
    "args": [
      {
        "name": "parent_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "sent": {
          "type": "boolean",
          "title": "Sent",
          "default": false
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        }
      },
      "type": "object",
      "title": "AccountInviteSent",
      "description": "Result of POST /v1/students|parents/{id}/send-invite. `sent` is true when a set-password\nemail was dispatched; `email` is the address it went to.",
      "$defs": {
        "AccountInviteSent": {
          "properties": {
            "sent": {
              "type": "boolean",
              "title": "Sent",
              "default": false
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            }
          },
          "type": "object",
          "title": "AccountInviteSent",
          "description": "Result of POST /v1/students|parents/{id}/send-invite. `sent` is true when a set-password\nemail was dispatched; `email` is the address it went to."
        }
      }
    }
  },
  {
    "name": "org_join_link",
    "description": "Org Join Link",
    "pathTemplate": "/org/join-link",
    "method": "GET",
    "args": [],
    "outputSchema": {
      "properties": {
        "student_code": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Code"
        },
        "student_url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Url"
        },
        "tutor_code": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Code"
        },
        "tutor_url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Url"
        }
      },
      "type": "object",
      "title": "OrgJoinLink",
      "description": "GET /v1/org/join-link — the org's reusable self-signup join links/codes (share via\nFacebook/Instagram/WhatsApp; no email needed from you). `student_*` adds the person as a\nstudent, `tutor_*` as a tutor. Codes are minted on first read if unset.",
      "$defs": {
        "OrgJoinLink": {
          "properties": {
            "student_code": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Code"
            },
            "student_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Url"
            },
            "tutor_code": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Code"
            },
            "tutor_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Url"
            }
          },
          "type": "object",
          "title": "OrgJoinLink",
          "description": "GET /v1/org/join-link — the org's reusable self-signup join links/codes (share via\nFacebook/Instagram/WhatsApp; no email needed from you). `student_*` adds the person as a\nstudent, `tutor_*` as a tutor. Codes are minted on first read if unset."
        }
      }
    }
  },
  {
    "name": "list_conversations",
    "description": "List Conversations",
    "pathTemplate": "/conversations",
    "method": "GET",
    "args": [
      {
        "name": "type",
        "description": "Filter by type: direct | triad | group | classroom_feed",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Conversation"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Conversation]",
      "$defs": {
        "Page_Conversation_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Conversation"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Conversation]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Conversation": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Type"
            },
            "classroom_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Classroom Id"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "last_message_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Message At"
            },
            "participants": {
              "items": {
                "$ref": "#/$defs/ConversationParticipant"
              },
              "type": "array",
              "title": "Participants",
              "default": []
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Conversation",
          "description": "A message thread. `type` is direct | triad | group | classroom_feed.\n`participants` lists only currently-active members (left_at is null)."
        },
        "ConversationParticipant": {
          "properties": {
            "user_id": {
              "type": "string",
              "title": "User Id"
            },
            "role": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Role"
            }
          },
          "type": "object",
          "required": [
            "user_id"
          ],
          "title": "ConversationParticipant",
          "description": "An active participant of a conversation. `role` is teacher | student | parent."
        }
      }
    }
  },
  {
    "name": "list_conversation_messages",
    "description": "List Conversation Messages",
    "pathTemplate": "/conversations/{conversation_id}/messages",
    "method": "GET",
    "args": [
      {
        "name": "conversation_id",
        "description": "Conversation UUID",
        "in": "path",
        "required": true,
        "type": "string"
      },
      {
        "name": "since",
        "description": "created_at >= this ISO timestamp",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 50, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Message"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Message]",
      "$defs": {
        "Page_Message_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Message"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Message]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Message": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "conversation_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Conversation Id"
            },
            "sender_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Sender Id"
            },
            "content": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Content"
            },
            "message_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Message Type"
            },
            "visibility": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Visibility"
            },
            "reply_to_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Reply To Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Message",
          "description": "One message in a thread. Only `visibility='everyone'` (non-deleted) messages\nare exposed by the read endpoints — family-private (`student_only`/`parent_only`)\nmessages are never returned."
        }
      }
    }
  },
  {
    "name": "list_org_inbox",
    "description": "List Org Inbox",
    "pathTemplate": "/org-inbox",
    "method": "GET",
    "args": [
      {
        "name": "status",
        "description": "Filter by status: unread | read | archived",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/OrgInboxMessage"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[OrgInboxMessage]",
      "$defs": {
        "Page_OrgInboxMessage_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/OrgInboxMessage"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[OrgInboxMessage]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "OrgInboxMessage": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "org_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Org Id"
            },
            "subject_tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Tutor Id"
            },
            "from_user_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "From User Id"
            },
            "guest_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Guest Name"
            },
            "guest_email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Guest Email"
            },
            "message": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Message"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "OrgInboxMessage",
          "description": "An inbound visitor/stranger inquiry to the org's admin inbox (contact-only\ntutor cards + the inquiry-routing shadow). Distinct from the conversation system."
        }
      }
    }
  },
  {
    "name": "create_message",
    "description": "Create Message",
    "pathTemplate": "/messages",
    "method": "POST",
    "args": []
  },
  {
    "name": "reports_summary",
    "description": "Reports Summary",
    "pathTemplate": "/reports/summary",
    "method": "GET",
    "args": [],
    "outputSchema": {
      "properties": {
        "active_tutors": {
          "type": "integer",
          "title": "Active Tutors",
          "default": 0
        },
        "active_students": {
          "type": "integer",
          "title": "Active Students",
          "default": 0
        },
        "sessions_today": {
          "type": "integer",
          "title": "Sessions Today",
          "default": 0
        },
        "settled_this_week_cents": {
          "type": "integer",
          "title": "Settled This Week Cents",
          "default": 0
        },
        "outstanding_cents": {
          "type": "integer",
          "title": "Outstanding Cents",
          "default": 0
        },
        "pending_approvals": {
          "$ref": "#/$defs/PendingApprovals"
        }
      },
      "type": "object",
      "required": [
        "pending_approvals"
      ],
      "title": "Summary",
      "$defs": {
        "Summary": {
          "properties": {
            "active_tutors": {
              "type": "integer",
              "title": "Active Tutors",
              "default": 0
            },
            "active_students": {
              "type": "integer",
              "title": "Active Students",
              "default": 0
            },
            "sessions_today": {
              "type": "integer",
              "title": "Sessions Today",
              "default": 0
            },
            "settled_this_week_cents": {
              "type": "integer",
              "title": "Settled This Week Cents",
              "default": 0
            },
            "outstanding_cents": {
              "type": "integer",
              "title": "Outstanding Cents",
              "default": 0
            },
            "pending_approvals": {
              "$ref": "#/$defs/PendingApprovals"
            }
          },
          "type": "object",
          "required": [
            "pending_approvals"
          ],
          "title": "Summary"
        },
        "PendingApprovals": {
          "properties": {
            "mileage": {
              "type": "integer",
              "title": "Mileage",
              "default": 0
            },
            "expenses": {
              "type": "integer",
              "title": "Expenses",
              "default": 0
            },
            "total": {
              "type": "integer",
              "title": "Total",
              "default": 0
            }
          },
          "type": "object",
          "title": "PendingApprovals"
        }
      }
    }
  },
  {
    "name": "list_booking_requests",
    "description": "List Booking Requests",
    "pathTemplate": "/booking-requests",
    "method": "GET",
    "args": [
      {
        "name": "status",
        "description": "pending, matched, declined, expired",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "subject_id",
        "description": "Filter by requested subject id",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/BookingRequest"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[BookingRequest]",
      "$defs": {
        "Page_BookingRequest_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/BookingRequest"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[BookingRequest]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "BookingRequest": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "student_display_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Display Name"
            },
            "preferred_mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Preferred Mode"
            },
            "preferred_days": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Preferred Days",
              "default": []
            },
            "preferred_times": {
              "additionalProperties": true,
              "type": "object",
              "title": "Preferred Times",
              "default": {}
            },
            "duration_minutes": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Duration Minutes"
            },
            "message": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Message"
            },
            "matched_session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Matched Session Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "BookingRequest"
        }
      }
    }
  },
  {
    "name": "recommend_tutors",
    "description": "Recommend Tutors",
    "pathTemplate": "/booking-requests/{request_id}/recommended-tutors",
    "method": "GET",
    "args": [
      {
        "name": "request_id",
        "description": "Booking request UUID",
        "in": "path",
        "required": true,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Max tutors to return (default 10, max 50)",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "request_id": {
          "type": "string",
          "title": "Request Id"
        },
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "data": {
          "items": {
            "$ref": "#/$defs/RecommendedTutor"
          },
          "type": "array",
          "title": "Data"
        }
      },
      "type": "object",
      "required": [
        "request_id",
        "data"
      ],
      "title": "RecommendedTutors",
      "$defs": {
        "RecommendedTutors": {
          "properties": {
            "request_id": {
              "type": "string",
              "title": "Request Id"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "data": {
              "items": {
                "$ref": "#/$defs/RecommendedTutor"
              },
              "type": "array",
              "title": "Data"
            }
          },
          "type": "object",
          "required": [
            "request_id",
            "data"
          ],
          "title": "RecommendedTutors"
        },
        "RecommendedTutor": {
          "properties": {
            "tutor_id": {
              "type": "string",
              "title": "Tutor Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "score": {
              "type": "number",
              "title": "Score",
              "default": 0
            },
            "breakdown": {
              "$ref": "#/$defs/ScoreBreakdown"
            },
            "reasons": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Reasons",
              "default": []
            },
            "upcoming_sessions_count": {
              "type": "integer",
              "title": "Upcoming Sessions Count",
              "default": 0
            },
            "teaches_subject": {
              "type": "boolean",
              "title": "Teaches Subject",
              "default": false
            },
            "distance_km": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Distance Km"
            },
            "nearby": {
              "type": "boolean",
              "title": "Nearby",
              "default": false
            },
            "road_km": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Road Km"
            },
            "road_minutes": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Road Minutes"
            }
          },
          "type": "object",
          "required": [
            "tutor_id",
            "breakdown"
          ],
          "title": "RecommendedTutor"
        },
        "ScoreBreakdown": {
          "properties": {
            "subject": {
              "type": "number",
              "title": "Subject",
              "default": 0
            },
            "availability": {
              "type": "number",
              "title": "Availability",
              "default": 0
            },
            "mode": {
              "type": "number",
              "title": "Mode",
              "default": 0
            },
            "capacity": {
              "type": "number",
              "title": "Capacity",
              "default": 0
            },
            "distance": {
              "type": "number",
              "title": "Distance",
              "default": 0
            }
          },
          "type": "object",
          "title": "ScoreBreakdown",
          "description": "Per-signal point contributions (sum to `score`, 0–100)."
        }
      }
    }
  },
  {
    "name": "coverage_tutors",
    "description": "Coverage Tutors",
    "pathTemplate": "/coverage/tutors",
    "method": "GET",
    "args": [
      {
        "name": "subject",
        "description": "Filter to tutors who teach this subject id",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "mode",
        "description": "online | in_person | either (default: all)",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "arrangement",
        "description": "In-person arrangement gate (applies only when mode=in_person)",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "postcode",
        "description": "Meeting-point postcode; sets each tutor's covers_area + distance_km",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 100, max 500)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Tutor"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Tutor]",
      "$defs": {
        "Page_Tutor_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Tutor"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Tutor]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Tutor": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "first_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "First Name"
            },
            "last_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Last Name"
            },
            "full_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Full Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "placeholder_email": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Placeholder Email"
            },
            "role": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Role"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "bio": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Bio"
            },
            "teaching_mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Teaching Mode"
            },
            "is_published": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Published"
            },
            "avatar_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Avatar Url"
            },
            "handle": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Handle"
            },
            "subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Subjects"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "home_suburb": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Suburb"
            },
            "home_postcode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Postcode"
            },
            "home_lat": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lat"
            },
            "home_lng": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Home Lng"
            },
            "service_postcodes": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Service Postcodes",
              "default": []
            },
            "serves_all_areas": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Serves All Areas"
            },
            "max_travel_km": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Max Travel Km"
            },
            "in_person_arrangements": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "In Person Arrangements",
              "default": []
            },
            "tutor_subjects": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tutor Subjects",
              "default": []
            },
            "specialisations": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Specialisations"
            },
            "distance_km": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Distance Km"
            },
            "covers_area": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Covers Area"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Tutor"
        }
      }
    }
  },
  {
    "name": "coverage_summary",
    "description": "Coverage Summary",
    "pathTemplate": "/coverage/summary",
    "method": "GET",
    "args": [
      {
        "name": "subject",
        "description": "Restrict the counts to this subject id",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "postcode",
        "description": "Meeting-point postcode; covering_area counts tutors within reach",
        "in": "query",
        "required": false,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "subject_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject Id"
        },
        "postcode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Postcode"
        },
        "total": {
          "type": "integer",
          "title": "Total",
          "default": 0
        },
        "in_person": {
          "type": "integer",
          "title": "In Person",
          "default": 0
        },
        "online": {
          "type": "integer",
          "title": "Online",
          "default": 0
        },
        "covering_area": {
          "type": "integer",
          "title": "Covering Area",
          "default": 0
        }
      },
      "type": "object",
      "title": "CoverageSummaryResult",
      "description": "Counts for /v1/coverage/summary. `covering_area` is the subset of `total`\nwithin reach of `postcode` (equals `total` when no postcode is supplied —\ngeography is then ignored). A tutor offering 'both' modes counts toward both\n`in_person` and `online`.",
      "$defs": {
        "CoverageSummaryResult": {
          "properties": {
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "postcode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Postcode"
            },
            "total": {
              "type": "integer",
              "title": "Total",
              "default": 0
            },
            "in_person": {
              "type": "integer",
              "title": "In Person",
              "default": 0
            },
            "online": {
              "type": "integer",
              "title": "Online",
              "default": 0
            },
            "covering_area": {
              "type": "integer",
              "title": "Covering Area",
              "default": 0
            }
          },
          "type": "object",
          "title": "CoverageSummaryResult",
          "description": "Counts for /v1/coverage/summary. `covering_area` is the subset of `total`\nwithin reach of `postcode` (equals `total` when no postcode is supplied —\ngeography is then ignored). A tutor offering 'both' modes counts toward both\n`in_person` and `online`."
        }
      }
    }
  },
  {
    "name": "coverage_gaps",
    "description": "Coverage Gaps",
    "pathTemplate": "/coverage/gaps",
    "method": "GET",
    "args": [
      {
        "name": "subject",
        "description": "Restrict demand + supply to this subject id",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "min_tutors",
        "description": "A postcode is a gap when fewer than this many tutors cover it",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "limit",
        "description": "Max gap rows to return (default 50, max 200)",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/CoverageGapItem"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[CoverageGapItem]",
      "$defs": {
        "Page_CoverageGapItem_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/CoverageGapItem"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[CoverageGapItem]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "CoverageGapItem": {
          "properties": {
            "postcode": {
              "type": "string",
              "title": "Postcode"
            },
            "suburb": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Suburb"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "demand_score": {
              "type": "number",
              "title": "Demand Score",
              "default": 0
            },
            "request_count": {
              "type": "integer",
              "title": "Request Count",
              "default": 0
            },
            "supply_count": {
              "type": "integer",
              "title": "Supply Count",
              "default": 0
            }
          },
          "type": "object",
          "required": [
            "postcode"
          ],
          "title": "CoverageGapItem",
          "description": "One under-served (postcode, subject) cell from /v1/coverage/gaps: demand\noutweighing covering supply. `demand_score` is the status-weighted booking-request\nsignal (pending weighs most; declined/expired/matched less); `supply_count` is the\nnumber of distinct tutors who cover this postcode for the subject."
        }
      }
    }
  },
  {
    "name": "refresh_isochrones",
    "description": "Refresh Isochrones",
    "pathTemplate": "/coverage/isochrones/refresh",
    "method": "POST",
    "args": [
      {
        "name": "subject",
        "description": "Only refresh tutors who teach this subject id",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "minutes",
        "description": "Drive-time contour in minutes (default from config)",
        "in": "query",
        "required": false,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "enabled": {
          "type": "boolean",
          "title": "Enabled",
          "default": false
        },
        "considered": {
          "type": "integer",
          "title": "Considered",
          "default": 0
        },
        "computed": {
          "type": "integer",
          "title": "Computed",
          "default": 0
        },
        "cached": {
          "type": "integer",
          "title": "Cached",
          "default": 0
        },
        "failed": {
          "type": "integer",
          "title": "Failed",
          "default": 0
        }
      },
      "type": "object",
      "title": "IsochroneRefreshResult",
      "description": "Outcome of POST /v1/coverage/isochrones/refresh. `enabled` is false when no\nMAPBOX_TOKEN is configured (nothing was computed; the map uses radius circles).\n`computed` were fetched from Mapbox, `cached` were already fresh (skip-guard),\n`failed` errored, `considered` is how many in-person tutors were in scope.",
      "$defs": {
        "IsochroneRefreshResult": {
          "properties": {
            "enabled": {
              "type": "boolean",
              "title": "Enabled",
              "default": false
            },
            "considered": {
              "type": "integer",
              "title": "Considered",
              "default": 0
            },
            "computed": {
              "type": "integer",
              "title": "Computed",
              "default": 0
            },
            "cached": {
              "type": "integer",
              "title": "Cached",
              "default": 0
            },
            "failed": {
              "type": "integer",
              "title": "Failed",
              "default": 0
            }
          },
          "type": "object",
          "title": "IsochroneRefreshResult",
          "description": "Outcome of POST /v1/coverage/isochrones/refresh. `enabled` is false when no\nMAPBOX_TOKEN is configured (nothing was computed; the map uses radius circles).\n`computed` were fetched from Mapbox, `cached` were already fresh (skip-guard),\n`failed` errored, `considered` is how many in-person tutors were in scope."
        }
      }
    }
  },
  {
    "name": "list_lesson_participants",
    "description": "List Lesson Participants",
    "pathTemplate": "/lesson-participants",
    "method": "GET",
    "args": [
      {
        "name": "session_id",
        "description": "Filter by session UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "student_id",
        "description": "Filter by student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "status",
        "description": "pending, accepted, declined, cancelled, removed",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "attendance",
        "description": "attended, no_show, excused",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/LessonParticipant"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[LessonParticipant]",
      "$defs": {
        "Page_LessonParticipant_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/LessonParticipant"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[LessonParticipant]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "LessonParticipant": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "attendance": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Attendance"
            },
            "cancelled_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Cancelled At"
            },
            "invited_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Invited At"
            },
            "responded_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Responded At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "LessonParticipant",
          "description": "A per-student attendance row on a (group/classroom) session. Billing-state\nfields (rate_snapshot_cents, settlement_state, stripe_payment_id,\nreported_payment_method) are deliberately NOT exposed."
        }
      }
    }
  },
  {
    "name": "get_lesson_participant",
    "description": "Get Lesson Participant",
    "pathTemplate": "/lesson-participants/{participant_id}",
    "method": "GET",
    "args": [
      {
        "name": "participant_id",
        "description": "Lesson participant UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "session_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Session Id"
        },
        "student_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Student Id"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "attendance": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Attendance"
        },
        "cancelled_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Cancelled At"
        },
        "invited_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Invited At"
        },
        "responded_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Responded At"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "LessonParticipant",
      "description": "A per-student attendance row on a (group/classroom) session. Billing-state\nfields (rate_snapshot_cents, settlement_state, stripe_payment_id,\nreported_payment_method) are deliberately NOT exposed.",
      "$defs": {
        "LessonParticipant": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "student_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Id"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "attendance": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Attendance"
            },
            "cancelled_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Cancelled At"
            },
            "invited_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Invited At"
            },
            "responded_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Responded At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "LessonParticipant",
          "description": "A per-student attendance row on a (group/classroom) session. Billing-state\nfields (rate_snapshot_cents, settlement_state, stripe_payment_id,\nreported_payment_method) are deliberately NOT exposed."
        }
      }
    }
  },
  {
    "name": "list_availabilities",
    "description": "List Availabilities",
    "pathTemplate": "/availabilities",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Filter by tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "day_of_week",
        "description": "Filter by day of week (0=Sunday … 6=Saturday)",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Availability"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Availability]",
      "$defs": {
        "Page_Availability_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Availability"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Availability]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Availability": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "day_of_week": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Day Of Week"
            },
            "start_time": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Start Time"
            },
            "end_time": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "End Time"
            },
            "timezone": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Timezone"
            },
            "schedule_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Schedule Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Availability",
          "description": "A tutor's recurring weekly availability rule. `day_of_week` is 0–6 (Sunday=0)."
        }
      }
    }
  },
  {
    "name": "get_availability",
    "description": "Get Availability",
    "pathTemplate": "/availabilities/{availability_id}",
    "method": "GET",
    "args": [
      {
        "name": "availability_id",
        "description": "Availability rule UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "day_of_week": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Day Of Week"
        },
        "start_time": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Start Time"
        },
        "end_time": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "End Time"
        },
        "timezone": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Timezone"
        },
        "schedule_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Schedule Id"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Availability",
      "description": "A tutor's recurring weekly availability rule. `day_of_week` is 0–6 (Sunday=0).",
      "$defs": {
        "Availability": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "day_of_week": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Day Of Week"
            },
            "start_time": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Start Time"
            },
            "end_time": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "End Time"
            },
            "timezone": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Timezone"
            },
            "schedule_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Schedule Id"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Availability",
          "description": "A tutor's recurring weekly availability rule. `day_of_week` is 0–6 (Sunday=0)."
        }
      }
    }
  },
  {
    "name": "list_locations",
    "description": "List Locations",
    "pathTemplate": "/locations",
    "method": "GET",
    "args": [
      {
        "name": "owner_type",
        "description": "Filter by owner type: org, tutor, student",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "tutor_id",
        "description": "Filter by owning tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "student_id",
        "description": "Filter by owning student UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Location"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Location]",
      "$defs": {
        "Page_Location_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Location"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Location]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Location": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "owner_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Owner Type"
            },
            "owner_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Owner Id"
            },
            "label": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Label"
            },
            "suburb": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Suburb"
            },
            "state": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "State"
            },
            "postcode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Postcode"
            },
            "is_default": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Default"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Location",
          "description": "A saved location owned by the org, one of its tutors, or one of its\nstudents. `owner_type` is resolved from whichever owner column is set."
        }
      }
    }
  },
  {
    "name": "get_location",
    "description": "Get Location",
    "pathTemplate": "/locations/{location_id}",
    "method": "GET",
    "args": [
      {
        "name": "location_id",
        "description": "Location UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "owner_type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Owner Type"
        },
        "owner_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Owner Id"
        },
        "label": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Label"
        },
        "suburb": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Suburb"
        },
        "state": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "State"
        },
        "postcode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Postcode"
        },
        "is_default": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Is Default"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Location",
      "description": "A saved location owned by the org, one of its tutors, or one of its\nstudents. `owner_type` is resolved from whichever owner column is set.",
      "$defs": {
        "Location": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "owner_type": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Owner Type"
            },
            "owner_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Owner Id"
            },
            "label": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Label"
            },
            "suburb": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Suburb"
            },
            "state": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "State"
            },
            "postcode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Postcode"
            },
            "is_default": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Default"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Location",
          "description": "A saved location owned by the org, one of its tutors, or one of its\nstudents. `owner_type` is resolved from whichever owner column is set."
        }
      }
    }
  },
  {
    "name": "list_payouts",
    "description": "List Payouts",
    "pathTemplate": "/payouts",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "Filter by tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "paid_at >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "paid_at <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Payout"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Payout]",
      "$defs": {
        "Page_Payout_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Payout"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Payout]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Payout": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "currency": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Currency"
            },
            "is_group": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Group"
            },
            "paid_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Paid At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Payout",
          "description": "A completed tutor payout (wage-payment ledger). Notification-plumbing\ncolumns (ledger_id, digest_sent_at, immediate_sent_at) are not exposed; the\ntable carries no bank fields."
        }
      }
    }
  },
  {
    "name": "get_payout",
    "description": "Get Payout",
    "pathTemplate": "/payouts/{payout_id}",
    "method": "GET",
    "args": [
      {
        "name": "payout_id",
        "description": "Payout UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Tutor Id"
        },
        "session_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Session Id"
        },
        "amount_cents": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "title": "Amount Cents"
        },
        "currency": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Currency"
        },
        "is_group": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Is Group"
        },
        "paid_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Paid At"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Payout",
      "description": "A completed tutor payout (wage-payment ledger). Notification-plumbing\ncolumns (ledger_id, digest_sent_at, immediate_sent_at) are not exposed; the\ntable carries no bank fields.",
      "$defs": {
        "Payout": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Id"
            },
            "session_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Id"
            },
            "amount_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Amount Cents"
            },
            "currency": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Currency"
            },
            "is_group": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Group"
            },
            "paid_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Paid At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Payout",
          "description": "A completed tutor payout (wage-payment ledger). Notification-plumbing\ncolumns (ledger_id, digest_sent_at, immediate_sent_at) are not exposed; the\ntable carries no bank fields."
        }
      }
    }
  },
  {
    "name": "list_rate_cells",
    "description": "List Rate Cells",
    "pathTemplate": "/rate-cells",
    "method": "GET",
    "args": [
      {
        "name": "band_id",
        "description": "Filter by rate band UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "tutor_tier_id",
        "description": "Filter by tutor tier UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "subject_id",
        "description": "Filter by subject id, e.g. methods_34",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "session_kind",
        "description": "1on1_online, 1on1_inperson, group, classroom",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "include_pay",
        "description": "Include pay-sensitive tutor-pay fields (tutor_pay_mode, tutor_pay_pct, tutor_flat_rate_cents). Default false.",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/RateCell"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[RateCell]",
      "$defs": {
        "Page_RateCell_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/RateCell"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[RateCell]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "RateCell": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "band_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Band Id"
            },
            "tutor_tier_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Tier Id"
            },
            "subject_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject Id"
            },
            "session_kind": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Session Kind"
            },
            "student_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Student Rate Cents"
            },
            "inperson_surcharge_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Inperson Surcharge Cents"
            },
            "tutor_pay_mode": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Pay Mode"
            },
            "tutor_pay_pct": {
              "anyOf": [
                {
                  "type": "number"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Pay Pct"
            },
            "tutor_flat_rate_cents": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Tutor Flat Rate Cents"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "RateCell",
          "description": "One cell of the org rate matrix (band × tier × subject × session_kind).\nTutor-pay fields (tutor_pay_mode, tutor_pay_pct, tutor_flat_rate_cents) are\npay-sensitive and only populated when `include_pay=true`."
        }
      }
    }
  },
  {
    "name": "list_rate_bands",
    "description": "List Rate Bands",
    "pathTemplate": "/rate-bands",
    "method": "GET",
    "args": [
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/RateBand"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[RateBand]",
      "$defs": {
        "Page_RateBand_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/RateBand"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[RateBand]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "RateBand": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "sort_order": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Sort Order"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "RateBand",
          "description": "A named student price band (Teachworks Services parity)."
        }
      }
    }
  },
  {
    "name": "list_tutor_tiers",
    "description": "List Tutor Tiers",
    "pathTemplate": "/tutor-tiers",
    "method": "GET",
    "args": [
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/TutorTier"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[TutorTier]",
      "$defs": {
        "Page_TutorTier_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/TutorTier"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[TutorTier]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "TutorTier": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "badge_label": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Badge Label"
            },
            "description": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Description"
            },
            "sort_order": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Sort Order"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "TutorTier",
          "description": "A tutor pay/qualification tier (Teachworks Wage Tiers parity). Names and\nlabels only — no money."
        }
      }
    }
  },
  {
    "name": "list_leads",
    "description": "List Leads",
    "pathTemplate": "/leads",
    "method": "GET",
    "args": [
      {
        "name": "status",
        "description": "new, contacted, consultation_booked, converted, lost",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "assigned_tutor_id",
        "description": "Filter by assigned tutor UUID",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "from",
        "description": "created_at >= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "to",
        "description": "created_at <= ISO date",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 20, max 100)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "properties": {
        "data": {
          "items": {
            "$ref": "#/$defs/Lead"
          },
          "type": "array",
          "title": "Data"
        },
        "meta": {
          "$ref": "#/$defs/PageMeta"
        }
      },
      "type": "object",
      "required": [
        "data",
        "meta"
      ],
      "title": "Page[Lead]",
      "$defs": {
        "Page_Lead_": {
          "properties": {
            "data": {
              "items": {
                "$ref": "#/$defs/Lead"
              },
              "type": "array",
              "title": "Data"
            },
            "meta": {
              "$ref": "#/$defs/PageMeta"
            }
          },
          "type": "object",
          "required": [
            "data",
            "meta"
          ],
          "title": "Page[Lead]"
        },
        "PageMeta": {
          "properties": {
            "limit": {
              "type": "integer",
              "title": "Limit"
            },
            "offset": {
              "type": "integer",
              "title": "Offset"
            },
            "count": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Count"
            },
            "total": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Total"
            }
          },
          "type": "object",
          "required": [
            "limit",
            "offset"
          ],
          "title": "PageMeta",
          "description": "Pagination envelope metadata. `count` is the size of the returned page;\n`total` (when present) is the full result-set size for offset paging."
        },
        "Lead": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "form_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Form Id"
            },
            "source_form_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Source Form Name"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "phone": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Phone"
            },
            "subject": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "assigned_tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Assigned Tutor Id"
            },
            "source_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Source Url"
            },
            "notes": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Notes"
            },
            "converted_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Converted At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Lead",
          "description": "An inbound lead captured by an org lead form. The free-form `payload` is\nNOT exposed; only a safe subset (name/email/phone/subject) is flattened."
        }
      }
    }
  },
  {
    "name": "create_lead",
    "description": "Create Lead",
    "pathTemplate": "/leads",
    "method": "POST",
    "args": []
  },
  {
    "name": "get_lead",
    "description": "Get Lead",
    "pathTemplate": "/leads/{lead_id}",
    "method": "GET",
    "args": [
      {
        "name": "lead_id",
        "description": "Lead UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "form_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Form Id"
        },
        "source_form_name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Source Form Name"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Name"
        },
        "email": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Email"
        },
        "phone": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Phone"
        },
        "subject": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Subject"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "assigned_tutor_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Assigned Tutor Id"
        },
        "source_url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Source Url"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Notes"
        },
        "converted_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Converted At"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Updated At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "Lead",
      "description": "An inbound lead captured by an org lead form. The free-form `payload` is\nNOT exposed; only a safe subset (name/email/phone/subject) is flattened.",
      "$defs": {
        "Lead": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "form_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Form Id"
            },
            "source_form_name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Source Form Name"
            },
            "name": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Name"
            },
            "email": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Email"
            },
            "phone": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Phone"
            },
            "subject": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Subject"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "assigned_tutor_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Assigned Tutor Id"
            },
            "source_url": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Source Url"
            },
            "notes": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Notes"
            },
            "converted_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Converted At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "Lead",
          "description": "An inbound lead captured by an org lead form. The free-form `payload` is\nNOT exposed; only a safe subset (name/email/phone/subject) is flattened."
        }
      }
    }
  },
  {
    "name": "create_blog_post",
    "description": "Create Blog Post",
    "pathTemplate": "/blog-posts",
    "method": "POST",
    "args": []
  },
  {
    "name": "list_blog_posts",
    "description": "List Blog Posts",
    "pathTemplate": "/blog-posts",
    "method": "GET",
    "args": [
      {
        "name": "brand",
        "description": "Filter by brand (equateit | classquill).",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "status",
        "description": "Filter by status (draft | published).",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "target",
        "description": "Filter by target (platform | org).",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "limit",
        "description": "Records per page (default 50, max 200)",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "Pagination offset",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ],
    "outputSchema": {
      "type": "object",
      "properties": {
        "items": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/BlogPost"
          },
          "title": "Response List Blog Posts V1 Blog Posts Get"
        }
      },
      "required": [
        "items"
      ],
      "$defs": {
        "BlogPost": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "target": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Target"
            },
            "brand": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Brand"
            },
            "organization_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Organization Id"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "slug": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Slug"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "excerpt": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Excerpt"
            },
            "content": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Content"
            },
            "author": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Author"
            },
            "tags": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tags",
              "default": []
            },
            "featured_image": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Featured Image"
            },
            "category": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Category"
            },
            "date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Date"
            },
            "publish_to_website": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Publish To Website"
            },
            "publish_to_portal": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Publish To Portal"
            },
            "is_pinned": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Pinned"
            },
            "published_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Published At"
            },
            "scheduled_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scheduled At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "BlogPost",
          "description": "A blog post row returned by /v1/blog-posts. `target` is derived from\norganization_id (NULL → 'platform', else 'org')."
        }
      }
    },
    "wrapArrayOutput": true
  },
  {
    "name": "update_blog_post",
    "description": "Update Blog Post",
    "pathTemplate": "/blog-posts/{post_id}",
    "method": "PATCH",
    "args": [
      {
        "name": "post_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "target": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Target"
        },
        "brand": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Brand"
        },
        "organization_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Organization Id"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Title"
        },
        "slug": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Slug"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "excerpt": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Excerpt"
        },
        "content": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Content"
        },
        "author": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Author"
        },
        "tags": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Tags",
          "default": []
        },
        "featured_image": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Featured Image"
        },
        "category": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Category"
        },
        "date": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Date"
        },
        "publish_to_website": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Publish To Website"
        },
        "publish_to_portal": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Publish To Portal"
        },
        "is_pinned": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Is Pinned"
        },
        "published_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Published At"
        },
        "scheduled_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Scheduled At"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Updated At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "BlogPost",
      "description": "A blog post row returned by /v1/blog-posts. `target` is derived from\norganization_id (NULL → 'platform', else 'org').",
      "$defs": {
        "BlogPost": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "target": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Target"
            },
            "brand": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Brand"
            },
            "organization_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Organization Id"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "slug": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Slug"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "excerpt": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Excerpt"
            },
            "content": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Content"
            },
            "author": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Author"
            },
            "tags": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tags",
              "default": []
            },
            "featured_image": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Featured Image"
            },
            "category": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Category"
            },
            "date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Date"
            },
            "publish_to_website": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Publish To Website"
            },
            "publish_to_portal": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Publish To Portal"
            },
            "is_pinned": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Pinned"
            },
            "published_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Published At"
            },
            "scheduled_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scheduled At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "BlogPost",
          "description": "A blog post row returned by /v1/blog-posts. `target` is derived from\norganization_id (NULL → 'platform', else 'org')."
        }
      }
    }
  },
  {
    "name": "delete_blog_post",
    "description": "Delete Blog Post",
    "pathTemplate": "/blog-posts/{post_id}",
    "method": "DELETE",
    "args": [
      {
        "name": "post_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "get_blog_post",
    "description": "Get Blog Post",
    "pathTemplate": "/blog-posts/{post_id}",
    "method": "GET",
    "args": [
      {
        "name": "post_id",
        "description": "Blog post UUID",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ],
    "outputSchema": {
      "properties": {
        "id": {
          "type": "string",
          "title": "Id"
        },
        "target": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Target"
        },
        "brand": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Brand"
        },
        "organization_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Organization Id"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Title"
        },
        "slug": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Slug"
        },
        "status": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Status"
        },
        "excerpt": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Excerpt"
        },
        "content": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Content"
        },
        "author": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Author"
        },
        "tags": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "title": "Tags",
          "default": []
        },
        "featured_image": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Featured Image"
        },
        "category": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Category"
        },
        "date": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Date"
        },
        "publish_to_website": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Publish To Website"
        },
        "publish_to_portal": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Publish To Portal"
        },
        "is_pinned": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "title": "Is Pinned"
        },
        "published_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Published At"
        },
        "scheduled_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Scheduled At"
        },
        "created_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Created At"
        },
        "updated_at": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Updated At"
        }
      },
      "type": "object",
      "required": [
        "id"
      ],
      "title": "BlogPost",
      "description": "A blog post row returned by /v1/blog-posts. `target` is derived from\norganization_id (NULL → 'platform', else 'org').",
      "$defs": {
        "BlogPost": {
          "properties": {
            "id": {
              "type": "string",
              "title": "Id"
            },
            "target": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Target"
            },
            "brand": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Brand"
            },
            "organization_id": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Organization Id"
            },
            "title": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Title"
            },
            "slug": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Slug"
            },
            "status": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Status"
            },
            "excerpt": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Excerpt"
            },
            "content": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Content"
            },
            "author": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Author"
            },
            "tags": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "title": "Tags",
              "default": []
            },
            "featured_image": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Featured Image"
            },
            "category": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Category"
            },
            "date": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Date"
            },
            "publish_to_website": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Publish To Website"
            },
            "publish_to_portal": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Publish To Portal"
            },
            "is_pinned": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Is Pinned"
            },
            "published_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Published At"
            },
            "scheduled_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Scheduled At"
            },
            "created_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Created At"
            },
            "updated_at": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "null"
                }
              ],
              "title": "Updated At"
            }
          },
          "type": "object",
          "required": [
            "id"
          ],
          "title": "BlogPost",
          "description": "A blog post row returned by /v1/blog-posts. `target` is derived from\norganization_id (NULL → 'platform', else 'org')."
        }
      }
    }
  },
  {
    "name": "upload_blog_image",
    "description": "Upload Blog Image",
    "pathTemplate": "/blog-images",
    "method": "POST",
    "args": [
      {
        "name": "target",
        "description": "org (default) | platform",
        "in": "query",
        "required": false,
        "type": "string"
      },
      {
        "name": "brand",
        "description": "equateit | classquill (platform only)",
        "in": "query",
        "required": false,
        "type": "string"
      }
    ]
  }
];
