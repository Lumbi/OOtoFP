// java

/**
interface Graphic {
  public void print();
}

class CompositeGraphic implements Graphic {
  private List<Graphic> childGraphics = new ArrayList<Graphic>();

  public void print() {
    for (Graphic graphic : childGraphics) {
      graphic.print();
    }
  }

  public void add(Graphic graphic) {
    childGraphics.add(graphic);
  }

  public void remove(Graphic graphic) {
    childGraphics.remove(graphic);
  }
}

class Ellipse implements Graphic {
  public void print() {
    System.out.println("Ellipse");
  }
}
*/

// typescript

type PrintGraphic = () => void
const printEllipse: PrintGraphic = () => console.log("Ellipse")
const printComposite: (printChildren: PrintGraphic[]) => PrintGraphic =
  (printChildren) => () => printChildren.map(printChild => printChild())

// example

const printRoot = printComposite([printEllipse, printEllipse])
printRoot()
