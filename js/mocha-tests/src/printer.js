export class Printer {
  constructor(writer, converter) {
    this.writer = writer;
    this.converter = converter;
  }
  print(args) {
    
    if(!this.converter) throw new Error('No converter has been set!');

    this.writer.write(
      this.converter.convert(args)
    );
  }
}

export class ConsoleWriter {
  write(args){
    console.log(args);
  }
}