import * as _ from '@Index';
import { JQueryUiMenus } from '@JQueryUiMenus.page';

_.test('JQuery UI Menus', async({page})=>{
    const basePage = new _.BasePage(page);
    const jqueryUiMenus = new JQueryUiMenus(page);

    await basePage.goToUrl();
    await jqueryUiMenus.ClickJQueryUiMenusLink();
    await jqueryUiMenus.HoverEnabledMenuItem();
    await jqueryUiMenus.HoverDownloadMenuItem();
    await jqueryUiMenus.ClickPDFMenuButton();
});