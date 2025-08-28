exports.HomePage = 
class HomePage {
    
    //#elements of HomePage
    constructor(page){
        this.page = page;
        this.findbutton = 'div[class*="tw-flex tw-flex-col"] a[href="https://staging.beequip.com/marktplaats/"] span[class="tw-mr-2.5"]';
    }

    //#actions of HomePage
    async gotoHomePage(){
      await this.page.setExtraHTTPHeaders({
        Authorization: 'Basic '+btoa('beequip-site-staging:X6T*JvQeKfYW6q*HCyFrUot9HRRm_Y-v')
        })   
      await this.page.goto('https://staging.beequip.com/');
    }

    async clickFindEquipment(){
      await this.page.locator(this.findbutton).click();
    }
    


}