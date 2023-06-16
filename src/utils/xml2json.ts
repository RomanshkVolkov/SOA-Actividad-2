export default function xml2json(xml: any, tagName: string, isJson: boolean = true) {
   try {
      const parser = new DOMParser();
      const xmlDOM = parser.parseFromString(xml, 'application/xml');

      const data = xmlDOM.getElementsByTagName(tagName)[0]?.childNodes[0]?.nodeValue;

      return JSON.parse(data || '');
   } catch {
      return false;
   }
}
