function main() {

    d3.select("svg")
        .append("circle")
            .attr("cx", "0")
            .attr("cy", "0")
            .attr("r", "25");

    d3.select("svg")
        .append("circle")
            .attr("cx", "1280")
            .attr("cy", "0")
            .attr("r", "25");

    d3.select("svg")
        .append("circle")
            .attr("cx", "0")
            .attr("cy", "1280")
            .attr("r", "25");

    d3.select("svg")
        .append("circle")
            .attr("cx", "1280")
            .attr("cy", "1280")
            .attr("r", "25");
}

window.onload = main;