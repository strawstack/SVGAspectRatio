function main() {

    const r = 20;
    
    d3.select("svg")
        .append("circle")
            .attr("cx", "0")
            .attr("cy", "0")
            .attr("r", r);

    d3.select("svg")
        .append("circle")
            .attr("cx", "1280")
            .attr("cy", "0")
            .attr("r", r);

    d3.select("svg")
        .append("circle")
            .attr("cx", "0")
            .attr("cy", "1280")
            .attr("r", r);

    d3.select("svg")
        .append("circle")
            .attr("cx", "1280")
            .attr("cy", "1280")
            .attr("r", r);
    
    d3.select("svg")
        .append("circle")
            .attr("cx", "640")
            .attr("cy", "640")
            .attr("r", r);
}

window.onload = main;
