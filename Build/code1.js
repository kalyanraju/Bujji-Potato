gdjs.menuCode = {};


gdjs.menuCode.GDmenubgObjects1= [];
gdjs.menuCode.GDlogobgObjects1= [];
gdjs.menuCode.GDplaybgObjects1= [];
gdjs.menuCode.GDbujjuchObjects1= [];
gdjs.menuCode.GDpotatoObjects1= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};

gdjs.menuCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.menuCode.GDmenubgObjects1.length = 0;
gdjs.menuCode.GDlogobgObjects1.length = 0;
gdjs.menuCode.GDplaybgObjects1.length = 0;
gdjs.menuCode.GDbujjuchObjects1.length = 0;
gdjs.menuCode.GDpotatoObjects1.length = 0;


{

gdjs.menuCode.GDbujjuchObjects1.createFrom(runtimeScene.getObjects("bujjuch"));
gdjs.menuCode.GDlogobgObjects1.createFrom(runtimeScene.getObjects("logobg"));
gdjs.menuCode.GDplaybgObjects1.createFrom(runtimeScene.getObjects("playbg"));

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.menuCode.GDlogobgObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDlogobgObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.menuCode.GDplaybgObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDplaybgObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.menuCode.GDbujjuchObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbujjuchObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.menuCode.GDbujjuchObjects1.createFrom(runtimeScene.getObjects("bujjuch"));
gdjs.menuCode.GDlogobgObjects1.createFrom(runtimeScene.getObjects("logobg"));
gdjs.menuCode.GDplaybgObjects1.createFrom(runtimeScene.getObjects("playbg"));

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0, "menutimer");
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.menuCode.GDplaybgObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDplaybgObjects1[i].setOpacity(gdjs.menuCode.GDplaybgObjects1[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.menuCode.GDbujjuchObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbujjuchObjects1[i].setOpacity(gdjs.menuCode.GDbujjuchObjects1[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.menuCode.GDlogobgObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDlogobgObjects1[i].setOpacity(gdjs.menuCode.GDlogobgObjects1[i].getOpacity() + (10));
}
}}

}


{

gdjs.menuCode.GDplaybgObjects1.createFrom(runtimeScene.getObjects("playbg"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("playbg", gdjs.menuCode.GDplaybgObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "arena", false);
}}

}

return;
}
gdjs['menuCode']= gdjs.menuCode;
