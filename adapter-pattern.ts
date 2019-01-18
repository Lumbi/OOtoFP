// java

/**
public interface StringProvider {
  public String getString();
}

public class ShoutingLineReader implements StringProvider {
  private LineReader lineReader = null;

  public ShoutingLineReader(final LineReader lineReader) {
    this.lineReader = lineReader;
  }

  public String getString() {
    return lineReader.readLine().toUpperCase();
  }
}
*/

// typescript

type LineReader = () => string
type StringProvider = () => string
const shoutingLineReader: (lineReader: LineReader) => StringProvider =
  (lineReader) => () => lineReader().toUpperCase()

// example

const lineReader: LineReader = () => 'hello world!'
shoutingLineReader(lineReader)()
