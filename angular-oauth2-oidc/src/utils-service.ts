

export class UtilsService {
    static getParams(parameter: string[], searchKey: string): string {
        let param = undefined;
        parameter.forEach((p: string, k: number) => {
            if (p === searchKey) {
                param = parameter[k+1];
            }
        });
        return param;
    }
}
