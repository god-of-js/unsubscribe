import { Response } from "express"
class BaseResponse {
    res !: Response;
    constructor(res: Response) {
        this.res = res;
    }
    
    success(status: number = 200, message: string, data: object, customHandle: Boolean = false) {
        this.res.status(status).json({
            error: false,
            message,
            data: data,
            customHandle
        })
    }
    error(status: number, message: string, customHandle: Boolean = false) {
        this.res.status(status).json({
            error: true,
            message,
            customHandle
        })
    }
}
export default (res: Response) => new BaseResponse(res)