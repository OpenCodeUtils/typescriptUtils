class Sorter{

    getWeith(element:any){
        return element;
    }

    getOrdered (elements: any[], reverseOrder = false, weithExtractor=this.getWeith): any[] {

        const comparator = (element1: any, element2: any): any => {
            return weithExtractor(element1) > weithExtractor(element2) ? 1 : -1;
        }
        const sortedElements = elements.sort(comparator);
        if (reverseOrder === true) {
            return sortedElements.reverse();
        }
        return sortedElements;
    }
}

export {Sorter};