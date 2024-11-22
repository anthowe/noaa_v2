var rndid =  makeid();
var hostname = location.protocol + '//' + location.hostname;
var hostname = "https://www.n2yo.com";

if (typeof footprint_n2yo == 'undefined') {
    var footprint_n2yo = '1';
}

if (typeof norad_n2yo == 'undefined') {
    var norad_n2yo = '25544';
}

if (typeof size_n2yo == 'undefined') {
    var size_n2yo = 'medium';
}
if (size_n2yo=='')
{
        size_n2yo='medium';
}
if (typeof allpasses_n2yo == 'undefined') {
    var allpasses_n2yo = '1';
}
if (typeof minelevation_n2yo == 'undefined') {
    var minelevation_n2yo = '5';
}
if (typeof map_n2yo == 'undefined') {
    var map_n2yo = '5';
}
document.write('<div id="'+rndid+'"></div>');
var newIframe = document.createElement('iframe');
if(size_n2yo=='thumbnail')
{
        newIframe.width = '300';
        newIframe.height = '350';
}

else if(size_n2yo=='small')
{
        newIframe.width = '410';
        newIframe.height = '450';
}
else if(size_n2yo=='medium')
{
        newIframe.width = '610';
        newIframe.height = '520';
}
else if(size_n2yo=='large')
{
        newIframe.width = '800';
        newIframe.height = '694';
}
newIframe.style.border='none';
newIframe.style.overflow='hidden';
newIframe.src = 'about:blank'; 
newIframe.scrolling = 'no'; 
document.getElementById(rndid).appendChild(newIframe);
newIframe.src = hostname+'/widgets/widget-tracker.php?s='+norad_n2yo+'&size='+size_n2yo+'&all='+allpasses_n2yo+'&me='+minelevation_n2yo+'&map='+map_n2yo+'&foot='+footprint_n2yo;
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
