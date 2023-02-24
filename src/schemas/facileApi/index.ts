export interface BaseResponse {
  status: string;
}

export interface SuccessResponse extends BaseResponse {
  data: any;
}

export interface ErrorResponse extends BaseResponse {
  message: string;
}
