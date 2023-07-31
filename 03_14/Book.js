class Book{
    constructor(
        title,
        author,
        genere,
        size,
        region,
        publishDate,
        unitPrice,
        copiesSold
        ){
            this.title = title;
            this.author = author;
            this.genere = genere;
            this.size = size;
            this.region = region;
            this.publishDate = publishDate;
            this.unitPrice = unitPrice;
            this.copiesSold = copiesSold;
        }

    totalProfit(){
       let profit = this.copiesSold * this.unitPrice;
       return profit;
    }
    totalPopularity(){
        if(this.copiesSold<=100&&this.copiesSold>0){return "Less Popular";}
        else if (this.copiesSold>100) {
            return "Popular";
            
        } else {
            return "Not Published yet.";
        }
    }


}
export default Book;