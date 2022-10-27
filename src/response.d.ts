export type ErrorTypeResponse =
  | "ROOM_MAX"
  | "ROOM_EXIST"
  | "NICKNAME_EXIST"
  | "INCORRECT_PASSCODE"
  | "ROOM_NOT_EXIST"
  | "CREATE_ROOM_INVALID"
  | "PARTICIPANT_NAME_INVALID";

export type ApiResponse = SuccessResponse | ErrorResponse;

type SuccessResponse = { status: "success"; message: string; data?: any };
type ErrorResponse = { status: "error"; error: string };
