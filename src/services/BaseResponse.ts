import { Response } from "express"
class BaseResponse {
    res !: Response;
    constructor(res: Response) {
        this.res = res;
    }
    success(status: number = 200, message: string, data: object) {
        this.res.status(status).json({
            error: false,
            message,
            data: data
        })
    }
    error(status: number, message: string) {
        this.res.status(status).json({
            error: true,
            message
        })
    }
}
export default (res: Response) => new BaseResponse(res)