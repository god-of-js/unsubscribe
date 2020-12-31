import { Response } from "express"
class BaseResponse {
    res !: Response
    constructor(res: Response) {
        this.res = res;
    }
    success(status: number = 200, message: string, data: object) {
        this.res.status(status).json({
            error: false,
            message,
            data
        })
    }
    error(status: number, message: string, err: object = {}) {
        this.res.status(status).json({
            error: false,
            message,
            err
        })
    }
}
export default (res: Response) => new BaseResponse(res)