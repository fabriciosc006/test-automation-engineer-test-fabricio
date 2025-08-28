exports.MarketPage = 
class MarketPage {
    
    //#elements of MarketPage
    constructor(page){
        this.page = page;
        this.categoryGroups = '#categoryGroups';
        
    }

    //#actions of MarketPage
    async gotoMarketPage(){
      await this.page.goto('https://staging.beequip.com/marktplaats/');
    }    
  
    async selectTruckModel(){
        await this.page.locator('#categoryGroups :text-is("Vrachtwagen")').click();
    }

}