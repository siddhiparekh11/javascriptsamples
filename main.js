// color 
var age_domain = [0,2,4,6,11]
var age_color = d3.scaleThreshold()
    .domain(age_domain)
    .range(["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6"]);


// ageData 
var ageData = d3.map();




// asynchronous tasks, load topojson maps and data
d3.queue()
    .defer(d3.json, "californiacounties.json")
    .defer(d3.json, "attendees.json").await(ready);
   



// callback function  
function ready(error, data, dat) {

    dat.forEach(function(d) { 
               
               if(!ageData.has(d.city)){
                    ageData.set(d.city,1);
               }else{
                    var res = ageData.get(d.city);
                    res += 1;
                    ageData.set(d.city,res);
               }
           });

    console.log(d3.values(ageData.keys()));

    console.log("I am invoked");

    if (error) throw error;

    // california counties topojson
    var cal_counties = topojson.feature(data, {
        type: "GeometryCollection",
        geometries: data.objects.california_counties.geometries
    });

    // projection and path
    var projection = d3.geoAlbersUsa()
        .fitExtent([[20, 20], [460, 580]], cal_counties);;

    var geoPath = d3.geoPath()
        .projection(projection);

    // draw new york map and bind income data
    d3.select("svg.age").selectAll("path")
        .data(cal_counties.features)
        .enter()
        .append("path")
        .attr("d", geoPath)
        .attr("fill", function(d){
            return age_color(ageData.get(d.properties.GEOID));
        });
       
    
}