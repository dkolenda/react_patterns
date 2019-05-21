const fs = require('fs');
const stream = fs.createWriteStream("./src/anti_pattern/HardTestArrow.tsx");
const size = 4000;

stream.once('open', function (fd:any) {

    
    stream.write(`import React from 'react';\n`);
    stream.write(`export class HardTestArrow extends React.Component<any,any> {\n`);
    stream.write(`\tconstructor(props:any) {\n`);
    stream.write(`\tsuper(props);\n`);
    stream.write(`\tthis.state = {counter:0};\n`);
    stream.write("}\n");

    stream.write("\n");
    stream.write(`\tprivate counterUp(){this.setState({counter:this.state.counter+1})};\n`);
    stream.write("\n");

    stream.write(`\tpublic render(){\n`);
    stream.write(`\treturn <div>\n`);
    stream.write(`\t<span>Licznik: {this.state.counter}</span>\n`);
    for(let i=0;i<size;i++) {
        stream.write(`\t<ItemButton label="Arrow in render" onClick={()=>{this.counterUp()}}/>\n`);
    }
    stream.write(`\t</div>}\n`);

    stream.write("}\n");

        //gg
        stream.write("\n");
        stream.write(`class ItemButton extends React.Component<any,any>{\n`);
        stream.write(`\tshouldComponentUpdate(nextProps:any, nextState:any) {\n`);
        stream.write(`\t// eslint-disable-next-line\n`);
        stream.write(`\tif (this.props.label != nextProps.label) {return true;}\n`);
        stream.write(`\tif(JSON.stringify(this.props.arrayRefTest) !== JSON.stringify(nextProps.arrayRefTest)) {return true;}\n`);
        stream.write(`\treturn false;\n`);   
        stream.write("}\n");
        stream.write(`\tpublic render(){\n`);
        stream.write(`\treturn <div>\n`);
        stream.write(`\t<button onClick={this.props.onClick}>{this.props.label}</button>\n`);
        stream.write(`\t</div>\n`);
        stream.write(`\t}\n`);
        stream.write("}\n");

    stream.end();
});
