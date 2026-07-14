// AUTO-GENERATED from docs/public-api/openapi.json by scripts/generate-tools.mjs.
// Do NOT edit by hand — run `npm run gen:tools` to regenerate after the API changes.
import type { ToolDef } from "./types.js";

export const GENERATED_TOOLS: ToolDef[] = [
  {
    "name": "ping",
    "description": "Ping",
    "pathTemplate": "/ping",
    "method": "GET",
    "args": []
  },
  {
    "name": "get_me",
    "description": "Get Me",
    "pathTemplate": "/me",
    "method": "GET",
    "args": []
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
    ]
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
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "name": "bulk_invite_users",
    "description": "Bulk Invite Users",
    "pathTemplate": "/users/bulk-invite",
    "method": "POST",
    "args": []
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
    ]
  },
  {
    "name": "get_student",
    "description": "Get Student",
    "pathTemplate": "/students/{student_id}",
    "method": "GET",
    "args": [
      {
        "name": "student_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
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
    ]
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
    ]
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
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
  },
  {
    "name": "tutor_available_slots",
    "description": "Tutor Available Slots",
    "pathTemplate": "/tutors/{tutor_id}/available-slots",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "",
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
    ]
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
    ]
  },
  {
    "name": "tutor_earnings",
    "description": "Tutor Earnings",
    "pathTemplate": "/tutors/{tutor_id}/earnings",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "",
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
    ]
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
    ]
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
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
  },
  {
    "name": "get_invoice",
    "description": "Get Invoice",
    "pathTemplate": "/invoices/{invoice_id}",
    "method": "GET",
    "args": [
      {
        "name": "invoice_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
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
    ]
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
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "parent_balance",
    "description": "Parent Balance",
    "pathTemplate": "/parents/{parent_id}/balance",
    "method": "GET",
    "args": [
      {
        "name": "parent_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "list_subjects",
    "description": "List Subjects",
    "pathTemplate": "/subjects",
    "method": "GET",
    "args": []
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "name": "get_student_group",
    "description": "Get Student Group",
    "pathTemplate": "/student-groups/{group_id}",
    "method": "GET",
    "args": [
      {
        "name": "group_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
  },
  {
    "name": "get_result",
    "description": "Get Result",
    "pathTemplate": "/results/{result_id}",
    "method": "GET",
    "args": [
      {
        "name": "result_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
  },
  {
    "name": "list_tutor_reviews",
    "description": "List Tutor Reviews",
    "pathTemplate": "/tutors/{tutor_id}/reviews",
    "method": "GET",
    "args": [
      {
        "name": "tutor_id",
        "description": "",
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
    ]
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
    ]
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
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "name": "org_join_link",
    "description": "Org Join Link",
    "pathTemplate": "/org/join-link",
    "method": "GET",
    "args": []
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
    ]
  },
  {
    "name": "list_conversation_messages",
    "description": "List Conversation Messages",
    "pathTemplate": "/conversations/{conversation_id}/messages",
    "method": "GET",
    "args": [
      {
        "name": "conversation_id",
        "description": "",
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
    ]
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
    ]
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
    "args": []
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
    ]
  },
  {
    "name": "recommend_tutors",
    "description": "Recommend Tutors",
    "pathTemplate": "/booking-requests/{request_id}/recommended-tutors",
    "method": "GET",
    "args": [
      {
        "name": "request_id",
        "description": "",
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "name": "get_lesson_participant",
    "description": "Get Lesson Participant",
    "pathTemplate": "/lesson-participants/{participant_id}",
    "method": "GET",
    "args": [
      {
        "name": "participant_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
  },
  {
    "name": "get_availability",
    "description": "Get Availability",
    "pathTemplate": "/availabilities/{availability_id}",
    "method": "GET",
    "args": [
      {
        "name": "availability_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
  },
  {
    "name": "get_location",
    "description": "Get Location",
    "pathTemplate": "/locations/{location_id}",
    "method": "GET",
    "args": [
      {
        "name": "location_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
  },
  {
    "name": "get_payout",
    "description": "Get Payout",
    "pathTemplate": "/payouts/{payout_id}",
    "method": "GET",
    "args": [
      {
        "name": "payout_id",
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
        "description": "",
        "in": "query",
        "required": false,
        "type": "number"
      },
      {
        "name": "offset",
        "description": "",
        "in": "query",
        "required": false,
        "type": "number"
      }
    ]
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
    ]
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
        "description": "",
        "in": "path",
        "required": true,
        "type": "string"
      }
    ]
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
