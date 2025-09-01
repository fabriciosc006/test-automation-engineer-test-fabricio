exports.CartPage = 
class CartPage {
    
    //#elements of CartPage
    constructor(page){
        this.page = page;
        this.checkBoxOption = 'button[class*="sc-10952c33-5"] span';   
        this.buttonYear = '//div[@class="sc-f4a6a8b2-1 WsHhY"]/div[1]/div[2]/div[1]/div[4]';
        this.inputYearFrom = '//div[@class="sc-eMwmJz eueBjM"]/input[@data-hook="aggregation-yearOfConstruction-from"]';
        this.inputYearTo = '//div[@class="sc-eMwmJz eueBjM"]/input[@data-hook="aggregation-yearOfConstruction-to"]';
        this.buttonKilometers = '//div[@class="sc-f4a6a8b2-1 WsHhY"]/div[1]/div[2]/div[1]/div[8]';
        this.inputKmFrom = '//div[@class="sc-eMwmJz eueBjM"]/input[@data-hook="aggregation-usageInKilometers-from"]';
        this.inputKmTo = '//div[@class="sc-eMwmJz eueBjM"]/input[@data-hook="aggregation-usageInKilometers-to"]';
        this.buttonOK = '//button[@type="submit"][contains(text(),"Ok")]';
        this.buttonCilinder = '//div[@class="sc-f4a6a8b2-1 WsHhY"]/div[1]/div[2]/div[3]/div[5]';
        this.cilinderCheckBox = '//div[@class="sc-f4a6a8b2-1 WsHhY"]/div[1]/div[2]/div[3]/div[5]/fieldset/div/div/div/input';
        this.buttonKmOK = '//div[@class="sc-f4a6a8b2-1 WsHhY"]/div[1]/div[2]/div[1]/div[8]/form/fieldset/div/div/button';
        this.EquipmentChosen = '//div[@class="sc-11fe422-0 jxajvU"]/article/div/h3/a[contains(@href, "actros")]';

    }

    //#actions of CartPage
    async gotoCartPage(){
      await this.page.goto('https://staging.beequip.com/marktplaats/vrachtwagen/');
    } 
  
    async clickCheckbox(){
        await this.page.locator(this.checkBoxOption).click();
    }
    
    async enterYear(yearfrom, yearto){
        await this.page.locator(this.buttonYear).scrollIntoViewIfNeeded();
        await this.page.locator(this.buttonYear).click();
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.inputYearFrom).fill(yearfrom);
        await this.page.locator(this.inputYearTo).fill(yearto);
        await this.page.locator(this.buttonOK).click();
        await this.page.waitForTimeout(3000)

    }

    async enterKilometers(kmfrom, kmto){
        await this.page.locator(this.buttonKilometers).click();
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.inputKmFrom).fill(kmfrom);
        await this.page.locator(this.inputKmTo).fill(kmto);
        await this.page.locator(this.buttonKmOK).click();

    }

    async enterCilinders(){
        await this.page.locator(this.buttonCilinder).click();
        await this.page.locator(this.cilinderCheckBox).isVisible();
        await this.page.locator(this.cilinderCheckBox).click({ force: true });
        
    }

    async clickEquipment(){
        await this.page.locator(this.EquipmentChosen).click();
    }

    

}