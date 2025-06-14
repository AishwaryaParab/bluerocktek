import modelling from "../../public/services/3D-CAD-modelling.png";
import bom from "../../public/services/bom-generation.png";
import reverseEngg from "../../public/services/reverse-engineering.png";
import printer from "../../public/services/3d-printer.png";
import documentation from "../../public/services/product-documentation.png";
import global from "../../public/services/global-outsourcing.png";
import cad from "../../public/services/cad-conversion.png";
import design from "../../public/services/design-automation.png";

export const services = [
  {
    id: 1,
    name: "3D CAD Modelling",
    desc: "Creating seamless design communication channels across teams, with comprehensive 3D industrial products. Designs can also be validated by in house design checks, VAVE, FEM checks etc.",
    image: modelling,
    width: 70,
    height: 80,
  },
  {
    id: 2,
    name: "BOM Generation",
    desc: "By integrating your CAD systems to automation platforms; we help you develop custom CAD drawings, BOMs and BOQs faster than manual work.",
    image: bom,
    width: 60,
    height: 80,
  },
  {
    id: 3,
    name: "Reverse Engineering",
    desc: "Enables Re-engineering of worn-out parts with enhanced design ideas by converting 3D laser scans & Images to CAD models.",
    image: reverseEngg,
    width: 80,
    height: 80,
  },
  // {
  //   id: 4,
  //   name: "3D Printing",
  //   desc: "As a premier provider of 3D-printed parts (Prototype parts, Functional  Scale models, customized gifts etc), we bring your ideas to life, layer by layer. Our commitment to excellence extends beyond the ordinary, delivering bespoke solutions tailored to your specifications.",
  //   image: printer,
  //   width: 80,
  //   height: 80,
  // },
  {
    id: 5,
    name: "Product Documentation",
    desc: "Whether you need a word file, PDF document for sales quote, 3D model file or a sequencing assembly and we help you to create it with industry standards.",
    image: documentation,
    width: 75,
    height: 65,
  },
  {
    id: 6,
    name: "Global Outsourcing ",
    desc: "The Team with its strategic thinking ability has successfully lead and executed many international development projects. Quality Processes in place, ensuring optimum quality from every vendor during development and serial production. We have a strong data base of quality and proven vendors for various categories (casting, forging, heavy fabrication etc).",
    image: global,
    width: 75,
    height: 70,
  },
  {
    id: 7,
    name: "CAD Conversion",
    desc: "Transforming legacy design data from Paper drawings to 3D digital CAD drawings with Zero data loss and 100% accuracy.",
    image: cad,
    width: 80,
    height: 70,
  },
  {
    id: 8,
    name: "Design Automation",
    desc: "Be the market-differentiator with customised products by automating design cycles within CAD data and creating order – specific manufacturing data. 3D models can easily be made parametric along with the required design tables to quickly change the parts.",
    image: design,
    width: 75,
    height: 70,
  },
];
