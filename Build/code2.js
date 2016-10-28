gdjs.arenaCode = {};
gdjs.arenaCode.userFunc0x57703d0 = function(runtimeScene) {
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


gdjs.arenaCode.GDplayerObjects1= [];
gdjs.arenaCode.GDplayerObjects2= [];
gdjs.arenaCode.GDpotatoObjects1= [];
gdjs.arenaCode.GDpotatoObjects2= [];
gdjs.arenaCode.GDbgarenaObjects1= [];
gdjs.arenaCode.GDbgarenaObjects2= [];
gdjs.arenaCode.GDscorebarObjects1= [];
gdjs.arenaCode.GDscorebarObjects2= [];
gdjs.arenaCode.GDmonkeyObjects1= [];
gdjs.arenaCode.GDmonkeyObjects2= [];
gdjs.arenaCode.GDrightarrowObjects1= [];
gdjs.arenaCode.GDrightarrowObjects2= [];
gdjs.arenaCode.GDleftarrowObjects1= [];
gdjs.arenaCode.GDleftarrowObjects2= [];
gdjs.arenaCode.GDbombObjects1= [];
gdjs.arenaCode.GDbombObjects2= [];
gdjs.arenaCode.GDexplosionObjects1= [];
gdjs.arenaCode.GDexplosionObjects2= [];
gdjs.arenaCode.GDscoreObjects1= [];
gdjs.arenaCode.GDscoreObjects2= [];
gdjs.arenaCode.GDnameObjects1= [];
gdjs.arenaCode.GDnameObjects2= [];
gdjs.arenaCode.GDgrassObjects1= [];
gdjs.arenaCode.GDgrassObjects2= [];
gdjs.arenaCode.GDbirds1Objects1= [];
gdjs.arenaCode.GDbirds1Objects2= [];
gdjs.arenaCode.GDbirds2Objects1= [];
gdjs.arenaCode.GDbirds2Objects2= [];
gdjs.arenaCode.GDgrass1Objects1= [];
gdjs.arenaCode.GDgrass1Objects2= [];
gdjs.arenaCode.GDstarObjects1= [];
gdjs.arenaCode.GDstarObjects2= [];
gdjs.arenaCode.GDhighlightObjects1= [];
gdjs.arenaCode.GDhighlightObjects2= [];

gdjs.arenaCode.conditionTrue_0 = {val:false};
gdjs.arenaCode.condition0IsTrue_0 = {val:false};
gdjs.arenaCode.condition1IsTrue_0 = {val:false};
gdjs.arenaCode.condition2IsTrue_0 = {val:false};
gdjs.arenaCode.conditionTrue_1 = {val:false};
gdjs.arenaCode.condition0IsTrue_1 = {val:false};
gdjs.arenaCode.condition1IsTrue_1 = {val:false};
gdjs.arenaCode.condition2IsTrue_1 = {val:false};

gdjs.arenaCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.arenaCode.GDplayerObjects1.length = 0;
gdjs.arenaCode.GDplayerObjects2.length = 0;
gdjs.arenaCode.GDpotatoObjects1.length = 0;
gdjs.arenaCode.GDpotatoObjects2.length = 0;
gdjs.arenaCode.GDbgarenaObjects1.length = 0;
gdjs.arenaCode.GDbgarenaObjects2.length = 0;
gdjs.arenaCode.GDscorebarObjects1.length = 0;
gdjs.arenaCode.GDscorebarObjects2.length = 0;
gdjs.arenaCode.GDmonkeyObjects1.length = 0;
gdjs.arenaCode.GDmonkeyObjects2.length = 0;
gdjs.arenaCode.GDrightarrowObjects1.length = 0;
gdjs.arenaCode.GDrightarrowObjects2.length = 0;
gdjs.arenaCode.GDleftarrowObjects1.length = 0;
gdjs.arenaCode.GDleftarrowObjects2.length = 0;
gdjs.arenaCode.GDbombObjects1.length = 0;
gdjs.arenaCode.GDbombObjects2.length = 0;
gdjs.arenaCode.GDexplosionObjects1.length = 0;
gdjs.arenaCode.GDexplosionObjects2.length = 0;
gdjs.arenaCode.GDscoreObjects1.length = 0;
gdjs.arenaCode.GDscoreObjects2.length = 0;
gdjs.arenaCode.GDnameObjects1.length = 0;
gdjs.arenaCode.GDnameObjects2.length = 0;
gdjs.arenaCode.GDgrassObjects1.length = 0;
gdjs.arenaCode.GDgrassObjects2.length = 0;
gdjs.arenaCode.GDbirds1Objects1.length = 0;
gdjs.arenaCode.GDbirds1Objects2.length = 0;
gdjs.arenaCode.GDbirds2Objects1.length = 0;
gdjs.arenaCode.GDbirds2Objects2.length = 0;
gdjs.arenaCode.GDgrass1Objects1.length = 0;
gdjs.arenaCode.GDgrass1Objects2.length = 0;
gdjs.arenaCode.GDstarObjects1.length = 0;
gdjs.arenaCode.GDstarObjects2.length = 0;
gdjs.arenaCode.GDhighlightObjects1.length = 0;
gdjs.arenaCode.GDhighlightObjects2.length = 0;


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].activateBehavior("Draggable", false);
}
}
{ //Subevents

{


gdjs.arenaCode.userFunc0x57703d0(runtimeScene);

}


{

gdjs.arenaCode.GDnameObjects2.createFrom(runtimeScene.getObjects("name"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDnameObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}

} //End of subevents
}

}


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.arenaCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.arenaCode.GDplayerObjects1[i].getAnimation() == 0 ) {
        gdjs.arenaCode.condition0IsTrue_0.val = true;
        gdjs.arenaCode.GDplayerObjects1[k] = gdjs.arenaCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.arenaCode.GDplayerObjects1.length = k;}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
gdjs.arenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
gdjs.arenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) == "Sravya1493";
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].activateBehavior("Draggable", true);
}
}}

}


{

gdjs.arenaCode.GDbirds1Objects1.createFrom(runtimeScene.getObjects("birds1"));
gdjs.arenaCode.GDpotatoObjects1.length = 0;

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)), "falltimer");
}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("potato", gdjs.arenaCode.GDpotatoObjects1).getEventsObjectsMap(), gdjs.random(500), 50, "falllayer");
}{for(var i = 0, len = gdjs.arenaCode.GDpotatoObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDpotatoObjects1[i].addPolarForce(90, 200, 1);
}
}{for(var i = 0, len = gdjs.arenaCode.GDpotatoObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDpotatoObjects1[i].getBehavior("Physics").applyTorque(gdjs.random(2), runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "falltimer");
}{for(var i = 0, len = gdjs.arenaCode.GDbirds1Objects1.length ;i < len;++i) {
    gdjs.arenaCode.GDbirds1Objects1[i].setPosition((gdjs.arenaCode.GDbirds1Objects1[i].getPointX("xb"))+gdjs.random(5),(gdjs.arenaCode.GDbirds1Objects1[i].getPointY("yb"))+gdjs.random(5));
}
}}

}


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.arenaCode.GDpotatoObjects1.createFrom(runtimeScene.getObjects("potato"));
gdjs.arenaCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
gdjs.arenaCode.GDstarObjects1.length = 0;

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("potato", gdjs.arenaCode.GDpotatoObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("player", gdjs.arenaCode.GDplayerObjects1).getEventsObjectsMap(), false, runtimeScene);
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
{gdjs.arenaCode.conditionTrue_1 = gdjs.arenaCode.condition1IsTrue_0;
gdjs.arenaCode.conditionTrue_1.val = context.triggerOnce(577795124);
}
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("star", gdjs.arenaCode.GDstarObjects1).getEventsObjectsMap(), (( gdjs.arenaCode.GDpotatoObjects1.length === 0 ) ? 0 :gdjs.arenaCode.GDpotatoObjects1[0].getPointX(""))+10, (( gdjs.arenaCode.GDpotatoObjects1.length === 0 ) ? 0 :gdjs.arenaCode.GDpotatoObjects1[0].getPointY(""))+10, "buttons");
}{for(var i = 0, len = gdjs.arenaCode.GDpotatoObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDpotatoObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].playAnimation();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "collect.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.random(20));
}{for(var i = 0, len = gdjs.arenaCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDstarObjects1[i].addForceTowardObject((gdjs.arenaCode.GDscoreObjects1.length !== 0 ? gdjs.arenaCode.GDscoreObjects1[0] : null), 100, 2);
}
}{for(var i = 0, len = gdjs.arenaCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDstarObjects1[i].setScale(gdjs.arenaCode.GDstarObjects1[i].getScale() / (2));
}
}
{ //Subevents

{

gdjs.arenaCode.GDplayerObjects2.createFrom(gdjs.arenaCode.GDplayerObjects1);
gdjs.arenaCode.GDscoreObjects2.createFrom(gdjs.arenaCode.GDscoreObjects1);
gdjs.arenaCode.GDhighlightObjects2.length = 0;

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
{gdjs.arenaCode.conditionTrue_1 = gdjs.arenaCode.condition0IsTrue_0;
gdjs.arenaCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1);
}
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
gdjs.arenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimationFrame(gdjs.random(3));
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("highlight", gdjs.arenaCode.GDhighlightObjects2).getEventsObjectsMap(), (( gdjs.arenaCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.arenaCode.GDplayerObjects2[0].getPointX("")), (( gdjs.arenaCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.arenaCode.GDplayerObjects2[0].getPointY("")), "falllayer");
}{for(var i = 0, len = gdjs.arenaCode.GDhighlightObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDhighlightObjects2[i].addForceTowardObject((gdjs.arenaCode.GDscoreObjects2.length !== 0 ? gdjs.arenaCode.GDscoreObjects2[0] : null), 100, 2);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].playAnimation();
}
}}

}


{

gdjs.arenaCode.GDplayerObjects2.createFrom(gdjs.arenaCode.GDplayerObjects1);
gdjs.arenaCode.GDscoreObjects2.createFrom(gdjs.arenaCode.GDscoreObjects1);
gdjs.arenaCode.GDhighlightObjects2.length = 0;

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
{gdjs.arenaCode.conditionTrue_1 = gdjs.arenaCode.condition0IsTrue_0;
gdjs.arenaCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 2);
}
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
gdjs.arenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("highlight", gdjs.arenaCode.GDhighlightObjects2).getEventsObjectsMap(), (( gdjs.arenaCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.arenaCode.GDplayerObjects2[0].getPointX("")), (( gdjs.arenaCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.arenaCode.GDplayerObjects2[0].getPointY("")), "falllayer");
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimationFrame(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.arenaCode.GDhighlightObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDhighlightObjects2[i].addForceTowardObject((gdjs.arenaCode.GDscoreObjects2.length !== 0 ? gdjs.arenaCode.GDscoreObjects2[0] : null), 100, 2);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].playAnimation();
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0.5);
}}

}


{

gdjs.arenaCode.GDplayerObjects2.createFrom(gdjs.arenaCode.GDplayerObjects1);
gdjs.arenaCode.GDscoreObjects2.createFrom(gdjs.arenaCode.GDscoreObjects1);
gdjs.arenaCode.GDhighlightObjects2.length = 0;

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
{gdjs.arenaCode.conditionTrue_1 = gdjs.arenaCode.condition0IsTrue_0;
gdjs.arenaCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 3);
}
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
gdjs.arenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("highlight", gdjs.arenaCode.GDhighlightObjects2).getEventsObjectsMap(), (( gdjs.arenaCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.arenaCode.GDplayerObjects2[0].getPointX("")), (( gdjs.arenaCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.arenaCode.GDplayerObjects2[0].getPointY("")), "falllayer");
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimationFrame(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].playAnimation();
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0.7);
}{for(var i = 0, len = gdjs.arenaCode.GDhighlightObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDhighlightObjects2[i].addForceTowardObject((gdjs.arenaCode.GDscoreObjects2.length !== 0 ? gdjs.arenaCode.GDscoreObjects2[0] : null), 100, 2);
}
}}

}


{


gdjs.arenaCode.condition0IsTrue_0.val = false;
{
{gdjs.arenaCode.conditionTrue_1 = gdjs.arenaCode.condition0IsTrue_0;
gdjs.arenaCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 4);
}
}if (gdjs.arenaCode.condition0IsTrue_0.val) {
}

}


{

gdjs.arenaCode.GDplayerObjects2.createFrom(gdjs.arenaCode.GDplayerObjects1);

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
{gdjs.arenaCode.conditionTrue_1 = gdjs.arenaCode.condition0IsTrue_0;
gdjs.arenaCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 5);
}
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
gdjs.arenaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].setAnimationFrame(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects2[i].playAnimation();
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0.8);
}}

}

} //End of subevents
}

}


{

gdjs.arenaCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));

{for(var i = 0, len = gdjs.arenaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}
}


{

gdjs.arenaCode.GDbombObjects1.length = 0;

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "bombtimer");
}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("bomb", gdjs.arenaCode.GDbombObjects1).getEventsObjectsMap(), gdjs.random(500), 50, "falllayer");
}{for(var i = 0, len = gdjs.arenaCode.GDbombObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDbombObjects1[i].setScale(gdjs.arenaCode.GDbombObjects1[i].getScale() / (4));
}
}{for(var i = 0, len = gdjs.arenaCode.GDbombObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDbombObjects1[i].addPolarForce(90, 200, 1);
}
}{}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "bombtimer");
}}

}


{

gdjs.arenaCode.GDbombObjects1.createFrom(runtimeScene.getObjects("bomb"));
gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("bomb", gdjs.arenaCode.GDbombObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("player", gdjs.arenaCode.GDplayerObjects1).getEventsObjectsMap(), false, runtimeScene);
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
{gdjs.arenaCode.conditionTrue_1 = gdjs.arenaCode.condition1IsTrue_0;
gdjs.arenaCode.conditionTrue_1.val = context.triggerOnce(577759196);
}
}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDbombObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDbombObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)));
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "end");
}}

}


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.arenaCode.GDrightarrowObjects1.createFrom(runtimeScene.getObjects("rightarrow"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("rightarrow", gdjs.arenaCode.GDrightarrowObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.arenaCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.arenaCode.GDplayerObjects1[i].getX() < 380 ) {
        gdjs.arenaCode.condition1IsTrue_0.val = true;
        gdjs.arenaCode.GDplayerObjects1[k] = gdjs.arenaCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.arenaCode.GDplayerObjects1.length = k;}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].addPolarForce(360, 100, 0);
}
}{runtimeScene.updateObjectsForces();}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.arenaCode.GDleftarrowObjects1.createFrom(runtimeScene.getObjects("leftarrow"));
gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
gdjs.arenaCode.condition1IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("leftarrow", gdjs.arenaCode.GDleftarrowObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.arenaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.arenaCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.arenaCode.GDplayerObjects1[i].getX() > 2 ) {
        gdjs.arenaCode.condition1IsTrue_0.val = true;
        gdjs.arenaCode.GDplayerObjects1[k] = gdjs.arenaCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.arenaCode.GDplayerObjects1.length = k;}}
if (gdjs.arenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].addPolarForce(180, 100, 0);
}
}{runtimeScene.updateObjectsForces();}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].playAnimation();
}
}}

}


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
gdjs.arenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].pauseAnimation();
}
}}

}


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.arenaCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.arenaCode.GDplayerObjects1[i].getX() < 2 ) {
        gdjs.arenaCode.condition0IsTrue_0.val = true;
        gdjs.arenaCode.GDplayerObjects1[k] = gdjs.arenaCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.arenaCode.GDplayerObjects1.length = k;}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].clearForces();
}
}}

}


{

gdjs.arenaCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.arenaCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.arenaCode.GDplayerObjects1[i].getX() > 640 ) {
        gdjs.arenaCode.condition0IsTrue_0.val = true;
        gdjs.arenaCode.GDplayerObjects1[k] = gdjs.arenaCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.arenaCode.GDplayerObjects1.length = k;}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.arenaCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDplayerObjects1[i].clearForces();
}
}}

}


{

gdjs.arenaCode.GDpotatoObjects1.createFrom(runtimeScene.getObjects("potato"));

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.arenaCode.GDpotatoObjects1.length;i<l;++i) {
    if ( gdjs.arenaCode.GDpotatoObjects1[i].getY() > 850 ) {
        gdjs.arenaCode.condition0IsTrue_0.val = true;
        gdjs.arenaCode.GDpotatoObjects1[k] = gdjs.arenaCode.GDpotatoObjects1[i];
        ++k;
    }
}
gdjs.arenaCode.GDpotatoObjects1.length = k;}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDpotatoObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDpotatoObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.arenaCode.GDbombObjects1.createFrom(runtimeScene.getObjects("bomb"));
gdjs.arenaCode.GDexplosionObjects1.length = 0;

gdjs.arenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.arenaCode.GDbombObjects1.length;i<l;++i) {
    if ( gdjs.arenaCode.GDbombObjects1[i].getY() > 800 ) {
        gdjs.arenaCode.condition0IsTrue_0.val = true;
        gdjs.arenaCode.GDbombObjects1[k] = gdjs.arenaCode.GDbombObjects1[i];
        ++k;
    }
}
gdjs.arenaCode.GDbombObjects1.length = k;}if (gdjs.arenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.arenaCode.GDbombObjects1.length ;i < len;++i) {
    gdjs.arenaCode.GDbombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("explosion", gdjs.arenaCode.GDexplosionObjects1).getEventsObjectsMap(), (( gdjs.arenaCode.GDbombObjects1.length === 0 ) ? 0 :gdjs.arenaCode.GDbombObjects1[0].getPointX("bombdrop"))-100, (( gdjs.arenaCode.GDbombObjects1.length === 0 ) ? 0 :gdjs.arenaCode.GDbombObjects1[0].getPointY("bombdrop"))-300, "falllayer");
}{}}

}

return;
}
gdjs['arenaCode']= gdjs.arenaCode;
