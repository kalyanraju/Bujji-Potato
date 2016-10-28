gdjs.introCode = {};
gdjs.introCode.userFunc0x5770050 = function(runtimeScene) {
var uid = runtimeScene.getVariables().get("userid");
var uuid=getAllUrlParams().user;
uid.setString(uuid);
var un = runtimeScene.getVariables().get("name");
var uun=getAllUrlParams().name;
un.setString(uun);
var mid = runtimeScene.getVariables().get("mid");
var mmid=getAllUrlParams().mid;
mid.setString(mmid);
};


gdjs.introCode.GDintrobgObjects1= [];
gdjs.introCode.GDintrobgObjects2= [];

gdjs.introCode.conditionTrue_0 = {val:false};
gdjs.introCode.condition0IsTrue_0 = {val:false};
gdjs.introCode.condition1IsTrue_0 = {val:false};

gdjs.introCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.introCode.GDintrobgObjects1.length = 0;
gdjs.introCode.GDintrobgObjects2.length = 0;


{

gdjs.introCode.GDintrobgObjects1.createFrom(runtimeScene.getObjects("introbg"));

gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.introCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.introCode.GDintrobgObjects1.length ;i < len;++i) {
    gdjs.introCode.GDintrobgObjects1[i].setOpacity(0);
}
}
{ //Subevents

{


gdjs.introCode.userFunc0x5770050(runtimeScene);

}

} //End of subevents
}

}


{

gdjs.introCode.GDintrobgObjects1.createFrom(runtimeScene.getObjects("introbg"));

gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0, "fadetimer");
}if (gdjs.introCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.introCode.GDintrobgObjects1.length ;i < len;++i) {
    gdjs.introCode.GDintrobgObjects1[i].setOpacity(gdjs.introCode.GDintrobgObjects1[i].getOpacity() + (1));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "fadetimer");
}if (gdjs.introCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}

return;
}
gdjs['introCode']= gdjs.introCode;
