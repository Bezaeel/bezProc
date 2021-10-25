import FizzyBuzzyBackend from '@app/backend/fizzybuzzy';
import {NextFunction, Request, Response} from 'express';
import {
    JsonController,
    Post,
    Req,
    Res
} from 'routing-controllers';

@JsonController('/1.0/fizzybuzzy')
export default class FizzyBuzzyController {
    @Post('/generate')
    fizzybuzzy(
        @Req() req: Request,
        @Res() res: Response,
        next: NextFunction
    ){
        const result = FizzyBuzzyBackend.fizzyBuzzy(req.body.value);
        return {
            isSuccess: true,
            code: 200,
            data: result
        }
    }
}