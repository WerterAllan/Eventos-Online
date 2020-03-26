export class ConversaoGenericaUtil {

    
    public static converter<T>(obj: string): T  {

        const tipo = typeof obj;

        switch (tipo) {
            case "string":
                return obj as any as T;

            case "number":  
                return this.paraData(obj) as any as T;
        
            default:
                throw new Error("Conversão não implementada");
        }
        
    }


    private static paraData(obj: string): Date {

        return new Date(obj);

    }


}