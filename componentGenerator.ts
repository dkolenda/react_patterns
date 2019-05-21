const fs = require('fs');
const stream = fs.createWriteStream("./src/anti_pattern/HardTestBind.tsx");
const size = 4000;

stream.once('open', function (fd:any) {

    
    stream.write(`import React from 'react';\n`);
    stream.write(`export class HardTestBind extends React.Component<any,any> {\n`);
    stream.write(`\tconstructor(props:any) {\n`);
    stream.write(`\tsuper(props);\n`);
    stream.write(`\tthis.state = {counter:0};\n`);

    for(let i=0;i<size;i++) {
        stream.write(`\tthis.counterAction${i} = this.counterAction${i}.bind(this);\n`);
    }

    stream.write("}\n");

    stream.write("\n");
    stream.write(`\tprivate counterUp(){this.setState({counter:this.state.counter+1})};\n`);
    stream.write("\n");

    for(let i=0;i<size;i++) {
        stream.write(`\tpublic counterAction${i}(){this.counterUp();};\n`);
    }

    stream.write(`\tpublic render(){\n`);
    stream.write(`\treturn <div>\n`);
    stream.write(`\t<span>Licznik: {this.state.counter}</span>\n`);
    for(let i=0;i<size;i++) {
        stream.write(`\t<ItemButton label="Bind out render" onClick={this.counterAction${i}}/>\n`);
    }
    stream.write(`\t</div>}\n`);

    stream.write("}\n");

    //gg
    stream.write("\n");
    stream.write(`class ItemButton extends React.PureComponent<any,any>{\n`);
    stream.write(`\tpublic render(){\n`);
    stream.write(`\treturn <div><button onClick={this.props.onClick}>{this.props.label}</button></div>\n`);
    stream.write(`\t}\n`);

    stream.write("}\n");

    stream.end();
});
