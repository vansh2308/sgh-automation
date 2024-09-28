import { arc, select } from 'd3';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';



const data = [
  {
    innerRadius: 50,
    outerRadius: 60,
    value: 0.6,
    color: "#FE3494"
  },
  {
    innerRadius: 70,
    outerRadius: 80,
    value: 0.5,
    color: "#2A7C9E"
  },
  {
    innerRadius: 90,
    outerRadius: 100,
    value: 0.75,
    color: "#5DC4DA"
  },

]


export default function RadialChart() {

  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const theme = useSelector((state: RootState) => state.theme.value)

  useEffect(() => {
    let grooveColor = "#E4F3F7"
    drawChart(grooveColor)
  }, [theme])


  // WIP: Add Dark mode, Hover States

  function drawChart(grooveColor: string) {
    console.log("Drawing")
    const height = containerRef.current.clientHeight, width = containerRef.current.clientWidth;

    select("svg").remove()

    const svg = select(containerRef.current)
      .append('svg')
      .attr('height', `${height}`)
      .attr('width', `${width}`)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", "translate(" + width / 5 + "," + height / 2 + ")")


    for (let i = 0; i < data.length; i++) {
      const Arc = arc()
        .innerRadius(data[i].innerRadius)
        .outerRadius(data[i].outerRadius)
        .startAngle(0)
        .cornerRadius(40)

      const backgroundArc = arc()
        .innerRadius(data[i].innerRadius - 1)
        .outerRadius(data[i].outerRadius + 1)
        .startAngle(0)
        .cornerRadius(40)

      svg.append("path")
        .datum({ endAngle: 1 * Math.PI * 2 })
        .attr("d", backgroundArc)
        .style("fill", grooveColor);


      svg.append("path")
        .datum({ endAngle: data[i].value * Math.PI * 2 })
        .attr("d", Arc)
        .style("fill", data[i].color);

    }

    svg.append("text")
      .attr("text-anchor", "middle")
      .text(`50%`)
      .style('font-size', '1.5rem')
      .style('fill', '#181D3C');

    svg.append("text")
      .attr("text-anchor", "middle")
      .text("Etsy")
      .attr('dy', '1.3em')
      .style('font-size', '0.75em');
  }


  return (
    <div
      ref={containerRef}
      className='w-full h-full'
    />

  );
}

