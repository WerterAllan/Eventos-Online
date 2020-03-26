export class HtmlPalestraUtil {
    
    public static porId = (id: string): HTMLElement =>
        document.getElementById(id);

    public static palestraPorId = (id: string): HTMLElement => 
        HtmlPalestraUtil.porId(`palestra_${id}`);


    
}