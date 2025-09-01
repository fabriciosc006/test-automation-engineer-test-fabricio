exports.LeasePage = 
class LeasePage {
    
    //#elements of LeasePage
    constructor(page){
        this.page = page;
        this.buttonLease = '//div[@class="sc-dff53fc1-2 bRSncR"]/div/a';   
        this.leaseText = '//div[@class="sc-dff53fc1-2 bRSncR"]/h4'
    }

    //#actions of LeasePage
    async gotoLeasePage(){
      await this.page.goto('https://staging.beequip.com/marktplaats/objecten/113415-mercedes-benz-actros-2127-schuifzeil-box-laadklep-apk-07-25/');
    } 
  
    async clickLease(){
        await this.page.locator(this.buttonLease).isVisible();
        await this.page.locator(this.buttonLease).click({ force: true });
        
    }
       


}