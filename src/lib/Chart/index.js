// @flow

type ChartTypes = {
  y0: string,
  y1: string,
  x: string
};

type ChartNames = {
  y0: string,
  y1: string
};

type ChartColors = {
  y0: string,
  y1: string
};

type ChartCoord = Array<number | string>;

type ChartColumns = Array<ChartCoord>;


interface ChartData {
  columns: ChartColumns,
  types: ChartTypes,
  names: ChartNames,
  colors: ChartColors
}

export class Chart {
  constructor(element, data: ChartData) {
    this.test = data;
    // this.drawLine(element);

    const widthCanvas = element.offsetWidth;

    console.log(widthCanvas);

    const dataX = data.columns[0];
    const diff = dataX[dataX.length - 1] - dataX[1];
    console.log('diff', diff);

    const ratio = widthCanvas / diff;
    this.ratio = ratio;
    console.log(ratio);

    const qwerty = this.setLineData(data.columns);
    this.drawLine(element, qwerty);
  }

  showTest() {
    console.log(this.test);
  }

  scaleRatioX() {

  }

  drawLine(element, lineString) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgNS = svg.namespaceURI;

    const polyline = document.createElementNS(svgNS, 'polyline');
    polyline.setAttribute('fill', 'none');
    polyline.setAttribute('stroke', 'red');
    polyline.setAttribute('stroke-width', '3');
    polyline.setAttribute('points', lineString);
    polyline.setAttribute('vector-effect', 'non-scaling-stroke');
    svg.appendChild(polyline);
    element.appendChild(svg);
  }

  setLineData(columns) {
    // TODO: optimize + check type

    const ratio123 = this.ratio;
    console.log('ratio', ratio123);

    const chartCoordObj = {};
    for (let i = 1; i < columns.length; i++) {
      chartCoordObj[columns[i][0]] = '';
    }

    // console.log(chartCoordObj);
    // for (let i = 0; i < columns[0].length; i++) {
    //   chartCoordObj[columns[i][0]] = '';
    // }

    for (let i = 1; i < columns[0].length; i++) {
      chartCoordObj.y0 += `${(columns[0][i] - columns[0][1]) * ratio123} ${columns[1][i]},`;
    }

    console.log(chartCoordObj);

    return chartCoordObj.y0.slice(0, -1);

    // console.log(colX);
  }
}
