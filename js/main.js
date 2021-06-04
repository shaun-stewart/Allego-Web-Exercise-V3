
import ManageCollectionsAndTasksDialog from "./manageCollectionsAndTasksDialog.js";
import menu from "./menu.js";




const dialog = new ManageCollectionsAndTasksDialog();

const manageCollectionsAndTasksLinkClickEventHandler = dialog.open;
menu.setup(manageCollectionsAndTasksLinkClickEventHandler);