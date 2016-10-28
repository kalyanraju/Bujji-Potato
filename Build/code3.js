gdjs.endCode = {};
gdjs.endCode.userFunc0x5770408 = function(runtimeScene) {
var xhttp = new XMLHttpRequest();
var uid=runtimeScene.getVariables().get("userid").getAsString();
var scr=runtimeScene.getVariables().get("score").getAsString();
var mid=runtimeScene.getVariables().get("mid").getAsString();

 xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
 
 }
 };
 xhttp.open("GET", "https://vkwebzone.com/botgames/bujjipotato/index.php?"+"uid="+uid+"&updatescore="+scr+"&mid="+mid, true);
 xhttp.send();

};
gdjs.endCode.userFunc0x5770440 = function(runtimeScene) {
TelegramGameProxy.shareScore();
};


gdjs.endCode.GDendbgObjects1= [];
gdjs.endCode.GDendbgObjects2= [];
gdjs.endCode.GDrestartObjects1= [];
gdjs.endCode.GDrestartObjects2= [];
gdjs.endCode.GDshareObjects1= [];
gdjs.endCode.GDshareObjects2= [];
gdjs.endCode.GDfscoreObjects1= [];
gdjs.endCode.GDfscoreObjects2= [];
gdjs.endCode.GDfscorevalObjects1= [];
gdjs.endCode.GDfscorevalObjects2= [];
gdjs.endCode.GDendexplosionObjects1= [];
gdjs.endCode.GDendexplosionObjects2= [];

gdjs.endCode.conditionTrue_0 = {val:false};
gdjs.endCode.condition0IsTrue_0 = {val:false};
gdjs.endCode.condition1IsTrue_0 = {val:false};
gdjs.endCode.condition2IsTrue_0 = {val:false};

gdjs.endCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.endCode.GDendbgObjects1.length = 0;
gdjs.endCode.GDendbgObjects2.length = 0;
gdjs.endCode.GDrestartObjects1.length = 0;
gdjs.endCode.GDrestartObjects2.length = 0;
gdjs.endCode.GDshareObjects1.length = 0;
gdjs.endCode.GDshareObjects2.length = 0;
gdjs.endCode.GDfscoreObjects1.length = 0;
gdjs.endCode.GDfscoreObjects2.length = 0;
gdjs.endCode.GDfscorevalObjects1.length = 0;
gdjs.endCode.GDfscorevalObjects2.length = 0;
gdjs.endCode.GDendexplosionObjects1.length = 0;
gdjs.endCode.GDendexplosionObjects2.length = 0;


{

gdjs.endCode.GDfscorevalObjects1.createFrom(runtimeScene.getObjects("fscoreval"));
gdjs.endCode.GDendexplosionObjects1.length = 0;

gdjs.endCode.condition0IsTrue_0.val = false;
{
gdjs.endCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.endCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("endexplosion", gdjs.endCode.GDendexplosionObjects1).getEventsObjectsMap(), 0, 0, "");
}{for(var i = 0, len = gdjs.endCode.GDfscorevalObjects1.length ;i < len;++i) {
    gdjs.endCode.GDfscorevalObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{runtimeScene.getVariables().getFromIndex(2).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
{ //Subevents

{


gdjs.endCode.userFunc0x5770408(runtimeScene);

}

} //End of subevents
}

}


{

gdjs.endCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.endCode.condition0IsTrue_0.val = false;
gdjs.endCode.condition1IsTrue_0.val = false;
{
gdjs.endCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.endCode.condition0IsTrue_0.val ) {
{
gdjs.endCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("restart", gdjs.endCode.GDrestartObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.endCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "arena");
}}

}


{

gdjs.endCode.GDshareObjects1.createFrom(runtimeScene.getObjects("share"));

gdjs.endCode.condition0IsTrue_0.val = false;
gdjs.endCode.condition1IsTrue_0.val = false;
{
gdjs.endCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.endCode.condition0IsTrue_0.val ) {
{
gdjs.endCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("share", gdjs.endCode.GDshareObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}}
if (gdjs.endCode.condition1IsTrue_0.val) {

{ //Subevents

{


gdjs.endCode.userFunc0x5770440(runtimeScene);

}

} //End of subevents
}

}

return;
}
gdjs['endCode']= gdjs.endCode;
